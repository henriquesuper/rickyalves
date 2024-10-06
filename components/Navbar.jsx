import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 bg-gray-100 shadow-md">
      <div className="text-2xl font-bold text-gray-800">
        <Link href="/">
          Ricky's Code Chronicles
        </Link>
      </div>
      <Link href="/piano" className="bg-blue-500 text-white px-4 py-2 rounded-md text-base font-semibold transition-all duration-500 ease-in-out hover:bg-blue-600 cursor-pointer">Cast a Musical Spell</Link>
    </div>
  )
}

export default Navbar;