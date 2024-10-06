const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <hr className="border-none bg-gray-400 h-px w-4/5 mx-auto md:w-full" />
      <div className="flex justify-around items-center py-8 bg-transparent border-t border-gray-300">
        <p className="text-sm text-gray-800">© {currentYear} Ricky Alves</p>
        <div className="flex justify-between items-center gap-4">
          <a href="https://twitter.com/henriquesuper" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl transition-all duration-300 ease-in-out hover:text-blue-500">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://github.com/henriquesuper" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl transition-all duration-300 ease-in-out hover:text-blue-500">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/rickyalves/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl transition-all duration-300 ease-in-out hover:text-blue-500">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;