'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function CloudBackground({ color = 0x050510 }) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const container = containerRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(color, 0.001);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 20000);
    camera.position.z = 3000;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(color, 1);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add starfield
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      transparent: true
    });

    const starVertices = [];
    for (let i = 0; i < 6000; i++) {
      const x = (Math.random() - 0.5) * 8000;
      const y = (Math.random() - 0.5) * 8000;
      const z = (Math.random() - 0.5) * 8000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Texture loader
    const loader = new THREE.TextureLoader();
    
    // Cloud particles
    const cloudParticles = [];
    
    // Load cloud texture
    loader.load('/images/cloud.png', function(texture) {
      // Create volumetric-looking clouds with varying opacity and size
      const cloudGeometry = new THREE.PlaneGeometry(500, 500);
      const cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
        opacity: 0.4
      });
      
      // Create multiple cloud meshes and position them randomly
      for (let i = 0; i < 40; i++) {
        const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial.clone());
        cloud.material.opacity = Math.random() * 0.4 + 0.2;
        
        cloud.position.set(
          Math.random() * 8000 - 4000,
          Math.random() * 1000 - 500,
          Math.random() * 2000 - 1000
        );
        cloud.rotation.z = Math.random() * 2 * Math.PI;
        cloud.rotation.x = Math.random() * Math.PI;
        cloud.rotation.y = Math.random() * Math.PI;
        
        const scale = Math.random() * 3 + 1;
        cloud.scale.set(scale, scale, 1);
        
        scene.add(cloud);
        cloudParticles.push({
          mesh: cloud,
          rotSpeed: Math.random() * 0.0006 - 0.0003,
          moveSpeed: Math.random() * 0.3 + 0.1
        });
      }
      
      // Create glowing effect particles
      const glowGeometry = new THREE.SphereGeometry(100, 16, 16);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x00a2ff,
        transparent: true,
        opacity: 0.03
      });
      
      for (let i = 0; i < 15; i++) {
        const glow = new THREE.Mesh(glowGeometry, glowMaterial.clone());
        const size = Math.random() * 20 + 10;
        glow.scale.set(size, size, size);
        glow.position.set(
          Math.random() * 6000 - 3000,
          Math.random() * 1000 - 500,
          Math.random() * 1000 - 500
        );
        glow.material.opacity = Math.random() * 0.03 + 0.01;
        scene.add(glow);
        cloudParticles.push({
          mesh: glow,
          rotSpeed: 0,
          moveSpeed: Math.random() * 0.2 + 0.05,
          isGlow: true
        });
      }
      
      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0x555555);
      scene.add(ambientLight);
      
      // Add directional light with slight blue tint
      const directionalLight = new THREE.DirectionalLight(0xcceeff, 0.8);
      directionalLight.position.set(0, 0, 1);
      scene.add(directionalLight);
      
      // Add point lights for glow effect
      const pointLight1 = new THREE.PointLight(0x0077ff, 50, 1000);
      pointLight1.position.set(500, 200, 100);
      scene.add(pointLight1);
      
      const pointLight2 = new THREE.PointLight(0x00ffff, 30, 800);
      pointLight2.position.set(-500, 100, 300);
      scene.add(pointLight2);
      
      // Animation loop
      let frame = 0;
      const animate = () => {
        frame += 0.01;
        
        // Animate stars (subtle twinkle)
        stars.rotation.y += 0.0001;
        
        // Animate clouds
        cloudParticles.forEach(p => {
          if (p.isGlow) {
            // Make glows pulse
            p.mesh.material.opacity = (Math.sin(frame * p.moveSpeed) + 1) * 0.02 + 0.01;
          } else {
            // Rotate clouds
            p.mesh.rotation.z += p.rotSpeed;
            
            // Subtle movement
            p.mesh.position.y += Math.sin(frame * p.moveSpeed) * 0.2;
            p.mesh.position.x += Math.cos(frame * p.moveSpeed) * 0.1;
          }
        });
        
        // Subtle camera movement
        camera.position.y = Math.sin(frame * 0.05) * 30;
        camera.position.x = Math.cos(frame * 0.05) * 30;
        camera.lookAt(scene.position);
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
      
      animate();
    });

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (rendererRef.current && rendererRef.current.domElement && container.contains(rendererRef.current.domElement)) {
        container.removeChild(rendererRef.current.domElement);
      }
      window.removeEventListener('resize', handleResize);
      scene.clear();
    };
  }, [color]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0" />
  );
} 