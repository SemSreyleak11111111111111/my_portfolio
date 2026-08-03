import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Cattttt
            </h2>

            <p className="text-zinc-400 mt-2">
              Graphic Designer & Video Editor
            </p>
          </div>

          {/* Center */}
          <div className="text-center text-zinc-500 text-sm">
            © {year} Cattttt. All rights reserved.
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            Made with
            <FaHeart className="text-white animate-pulse" />
            using React & Tailwind CSS
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;