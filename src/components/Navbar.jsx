import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          Chordz <span className="text-red-500">Tech</span>
        </h1>

        {/* Menu */}
        <ul className="flex gap-6 items-center">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          {/* Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <span className="cursor-pointer flex items-center gap-1">
              What We Do ▼
            </span>

            {/* DROPDOWN */}
            {dropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg w-48 z-50">

                <Link to="/web" className="block px-4 py-2 hover:bg-blue-100">
                  Web Development
                </Link>

                <Link to="/app" className="block px-4 py-2 hover:bg-blue-100">
                  App Development
                </Link>

                <Link to="/ai" className="block px-4 py-2 hover:bg-blue-100">
                  AI/ML
                </Link>

                <Link to="/seo" className="block px-4 py-2 hover:bg-blue-100">
                  SEO
                </Link>

                <Link to="/marketing" className="block px-4 py-2 hover:bg-blue-100">
                  Digital Marketing
                </Link>

              </div>
            )}
          </li>

          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/partners">Partners</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/support">Support</Link></li>

        </ul>
      </div>
    </nav>
  );
}