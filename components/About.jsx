import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>Unveiling the Code Conjurer</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
          Donning my developer cape, I've always been a cyber 
          Sherlock Holmes, sleuthing out elegant and effective 
          solutions for the most cryptic of digital conundrums. 
          My coding powers are fueled by a solid foundation in 
          the mystical languages of HTML, CSS, and JavaScript, 
          enabling me to twirl between front-end and back-end 
          development like a code-wielding ballerina. My mission? 
          To fine-tune performance, level-up user experiences, 
          and to ensure my code is as clean and shiny as a newly 
          minted bit coin.
          </p>
          <p>I've traveled across the digital landscape, 
            from crafting humble static websites to architecting 
            complex enterprise-level applications, all while wielding 
            an array of magical artifacts like React, Vue.js, Node.js, 
            and Laravel. But I'm not just about the tried and true - 
            my voracious curiosity propels me to constantly unearth, 
            learn, and assimilate new technological wizardry. 
            Right now, I'm brewing up a storm in the realm of Swift, 
            with a freshly baked app soon to leap out of the oven and 
            into the app-sphere. Brace yourselves, because this code 
            magician is just getting started!
            </p>
        </div>
        <div className="about-img">
          <Image src='/images/about.jpeg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;