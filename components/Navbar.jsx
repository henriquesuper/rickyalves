import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Ricky's Code Chronicles
        </Link>
      </div>
      <Link href="/piano" className="cta-btn">Cast a Musical Spell</Link>
    </div>
  )
}

export default Navbar;