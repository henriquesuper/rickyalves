import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white bg-opacity-70 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/" className="font-sans tracking-tight hover:text-blue-600 transition-colors duration-300">
              Ricky's Code Chronicles
            </Link>
          </div>
          <div className="flex space-x-4 items-center">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <Link href="/piano" className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-0.5">
              Cast a Musical Spell
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children }) => (
  <a href={href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group">
    {children}
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
  </a>
)

export default Navbar;