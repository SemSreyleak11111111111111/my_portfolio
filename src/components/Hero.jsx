import { motion } from "framer-motion";
import {
  FaTiktok,
  FaTelegram,
  FaPinterest,
  FaEnvelope,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[6px] text-gray-400 mb-4">
           Work With
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            Cattttt
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-gray-300">
            Graphic Designer & Video Editor
          </h2>

          <p className="mt-8 max-w-xl text-gray-400 leading-8">
            I'm a Graphic Designer and Visual Artist passionate about
            branding, motion graphics, and 3D design.
            <br /><br />
            I enjoy transforming ideas into compelling visual stories
            through design, animation, and creative problem-solving,
            creating visuals that are both meaningful and memorable.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="#poster"
              className="px-7 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-6 mt-10 text-2xl">
            <a href="https://www.tiktok.com/@cattttttttt67" target="_blank" rel="noreferrer">
              <FaTiktok className="hover:text-gray-400 transition" />
            </a>

            <a href="https://t.me/cattttt_2711" target="_blank" rel="noreferrer">
              <FaTelegram className="hover:text-gray-400 transition" />
            </a>

            <a href="https://pin.it/6iZLsNEmD" target="_blank" rel="noreferrer">
              <FaPinterest className="hover:text-gray-400 transition" />
            </a>

            <a href="mailto:Kanhaleak777@gmail.com">
              <FaEnvelope className="hover:text-gray-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 lg:w-[430px] lg:h-[430px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src="https://i.pinimg.com/736x/13/f0/bd/13f0bdd9fc7a37bc69bf303564904694.jpg"
              alt="Cattttt"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;