/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-16 px-8">
      <Image src='/images/profile.jpeg' className="profile-img justify-self-center md:col-span-1" width={300} height={300} alt="Ricky's personal headshot" />
      <div className="text-left md:col-span-2 md:text-left">
        <div class="text-5xl font-extrabold mb-12 mt-12 ...">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 space-x-8">
            Hey, I'm Ricky
          </span>👋
        </div>
        <p>
          I'm a software wizard hailing from the world of palm trees
          and traffic, Los Angeles. I'm skilled at conjuring exceptional
          websites, applications, and all sorts of digital magic in
          between. They don't call it "coding" here, it's more like
          weaving the matrix. And occasionally, I moonlight as a pixel
          Picasso, designing sleek interfaces that even Leonardo da
          Vinci would double-tap on Instagram.
        </p>
        <div className="social-icons flex justify-center md:justify-start items-center gap-4">
          <a
            href="https://twitter.com/henriquesuper"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-x-twitter"></i>          </a>
          <a
            href="https://github.com/henriquesuper"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/rickyalves/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;