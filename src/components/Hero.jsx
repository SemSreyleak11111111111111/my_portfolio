import { motion } from "framer-motion";
import {
  FaTiktok,
  FaTelegram,
  FaPinterest,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* ================= BACKGROUND ================= */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white blur-[150px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-white blur-[150px]"
      />

      {/* Small floating dots */}

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 left-[12%] w-2 h-2 bg-white rounded-full"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 right-[15%] w-3 h-3 bg-white/40 rounded-full"
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 py-20 flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {/* Small Text */}

            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="text-gray-500 text-sm tracking-[5px] uppercase mb-6"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}

            <div className="overflow-hidden">
              <motion.h1
                variants={{
                  hidden: {
                    y: 120,
                    opacity: 0,
                  },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="text-7xl md:text-8xl lg:text-[110px] font-black leading-[0.8] tracking-[-6px]"
              >
                Cattttt
              </motion.h1>
            </div>

            {/* Animated Line */}

            <motion.div
              variants={{
                hidden: {
                  width: 0,
                },
                visible: {
                  width: "120px",
                  transition: {
                    duration: 0.8,
                  },
                },
              }}
              className="h-[2px] bg-white mt-8 mb-6"
            />

            {/* Job */}

            <motion.h2
              variants={{
                hidden: {
                  opacity: 0,
                  x: -30,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              className="text-2xl md:text-3xl font-semibold"
            >
              Graphic Designer
              <span className="text-gray-600 mx-3">&</span>
              Video Editor
            </motion.h2>

            {/* Description */}

            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="mt-7 max-w-xl text-gray-400 leading-8"
            >
              I'm a Graphic Designer and Visual Artist passionate about
              branding, motion graphics, and 3D design.

              <br />
              <br />

              I enjoy transforming ideas into compelling visual stories
              through design, animation, and creative problem-solving.
            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="flex flex-wrap gap-4 mt-10"
            >
              {/* View Projects */}

              <a
                href="#poster"
                className="group relative overflow-hidden px-8 py-4 bg-white text-black rounded-full font-semibold"
              >
                <span className="relative z-10 transition group-hover:text-white">
                  View Projects
                </span>

                <span className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>

              {/* Contact */}

              <a
                href="#contact"
                className="px-8 py-4 border border-white/40 rounded-full hover:bg-white hover:text-black transition duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Icons */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                },
              }}
              className="flex gap-6 mt-10 text-xl"
            >
              <a
                href="https://www.tiktok.com/@cattttttttt67"
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-2 hover:text-gray-400 transition"
              >
                <FaTiktok />
              </a>

              <a
                href="https://t.me/cattttt_2711"
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-2 hover:text-gray-400 transition"
              >
                <FaTelegram />
              </a>

              <a
                href="https://pin.it/6iZLsNEmD"
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-2 hover:text-gray-400 transition"
              >
                <FaPinterest />
              </a>

              <a
                href="mailto:Kanhaleak777@gmail.com"
                className="hover:-translate-y-2 hover:text-gray-400 transition"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 120,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex justify-center lg:justify-end"
          >

            {/* Rotating Ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[330px] h-[330px] md:w-[430px] md:h-[430px] lg:w-[500px] lg:h-[500px] rounded-full border border-dashed border-white/20"
            />

            {/* Second Ring */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[300px] h-[300px] md:w-[390px] md:h-[390px] lg:w-[460px] lg:h-[460px] rounded-full border border-white/10"
            />

            {/* Image */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.04,
              }}
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[430px] lg:h-[430px] rounded-full overflow-hidden border border-white/40 shadow-2xl"
            >
              <img
                src="https://i.pinimg.com/736x/f0/ae/3e/f0ae3e1c00bcdae91f0b777c4dd5b9af.jpg"
                alt="Cattttt"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Floating Text */}

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-0 lg:left-5 bg-white text-black px-6 py-3 text-xs font-bold tracking-[3px]"
            >
              DESIGN • CREATE • INSPIRE
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ================= SCROLL ================= */}

      <motion.a
        href="#poster"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-500"
      >
        <span className="text-[10px] tracking-[5px] uppercase">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;