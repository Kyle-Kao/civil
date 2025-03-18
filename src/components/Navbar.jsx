import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link className="text-gray-700 dark:text-gray-300 hover:text-blue-500" to='/'>Home</Link>
        <Link className="text-gray-700 dark:text-gray-300 hover:text-blue-500" to='/about'>About</Link>
      </div>
    </nav>
  )
}