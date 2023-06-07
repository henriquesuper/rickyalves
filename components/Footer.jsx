const Footer = () => {
    return (
      <>
        <hr/>
        <div className="footer-container">
          <p>
            © {new Date().getFullYear()} Ricky's Code Chronicles
          </p>
          <div className="social_icons">
            <a
              href="https://twitter.com/henriquesuper"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
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
      </>
    )
  }
  
  export default Footer;