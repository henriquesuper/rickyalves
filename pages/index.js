import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Head from 'next/head';
import Script from 'next/script'

const Home = () => {
  return (
    <>
      <Head>
        <title>Ricky's Code Chronicles</title>
        <meta name="description" content="Ricky's Code Chronicles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className="font-inter text-base leading-normal bg-white text-gray-800 max-w-6xl mx-auto px-8 shadow-lg rounded-lg my-8">
        <Hero />
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </>
  );
};

export default Home;