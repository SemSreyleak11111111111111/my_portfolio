import { FaPalette } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    "Skills",
    "Poster",
    "Logo",
    "3D",
    "Motion",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3"
        >
          <FaPalette className="text-2xl text-orange-500" />

          <div>
            <h1 className="text-xl font-bold text-white">
              Kanha Leak
            </h1>

            <p className="text-xs text-slate-400">
              Graphic Designer
            </p>
          </div>
        </a>

        {/* Menu */}
        <nav>
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-orange-500 duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;