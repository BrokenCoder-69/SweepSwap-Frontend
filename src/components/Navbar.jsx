import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/40 backdrop-blur-sm text-white z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-cyan-400">SweepSwap</div>

        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#features" className="hover:text-purple-400">
            Features
          </a>
          <a href="#how" className="hover:text-purple-400">
            How It Works
          </a>
          <a href="#cta" className="hover:text-purple-400">
            Join
          </a>
          <a
            href="/login"
            className="block bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-full text-white "
          >
            Login
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-white">
          <a href="#features" className="block hover:text-purple-400">
            Features
          </a>
          <a href="#how" className="block hover:text-purple-400">
            How It Works
          </a>
          <a href="#cta" className="block hover:text-purple-400">
            Join
          </a>
          <a
            href="/login"
            className="block bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-full text-white"
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
