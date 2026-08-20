import { motion } from "framer-motion";

const skills = [
  {
    name: "Adobe Photoshop",
    short: "PS",
    level: 100,
    color: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/40",
    effect: "pulse",
  },
  {
    name: "Adobe Illustrator",
    short: "AI",
    level: 70,
    color: "from-orange-500 to-yellow-400",
    glow: "shadow-orange-500/40",
    effect: "fire",
  },
  {
    name: "Figma",
    short: "FIG",
    level: 70,
    color: "from-pink-500 to-purple-500",
    glow: "shadow-pink-500/40",
    effect: "magic",
  },
  {
    name: "CapCut",
    short: "CC",
    level: 90,
    color: "from-gray-300 to-white",
    glow: "shadow-white/30",
    effect: "glitch",
  },
  {
    name: "Adobe Premiere Pro",
    short: "PR",
    level: 50,
    color: "from-violet-500 to-purple-400",
    glow: "shadow-violet-500/40",
    effect: "lightning",
  },
  {
    name: "Adobe After Effects",
    short: "AE",
    level: 60,
    color: "from-purple-500 to-fuchsia-400",
    glow: "shadow-purple-500/40",
    effect: "energy",
  },
  {
    name: "Canva",
    short: "CAN",
    level: 90,
    color: "from-cyan-400 to-blue-400",
    glow: "shadow-cyan-500/50",
    effect: "aura",
  },
  {
    name: "Blender",
    short: "BL",
    level: 40,
    color: "from-amber-500 to-orange-400",
    glow: "shadow-amber-500/40",
    effect: "particles",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 -right-40 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* =========================
            HEADING
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-14 md:mb-16"
        >
          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gray-500 sm:text-sm sm:tracking-[0.4em]">
            What I use
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">
            My <span className="text-gray-500">Skills</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-500 sm:mt-5 sm:text-base">
            A visual overview of my experience across design, motion graphics,
            video editing, and creative tools.
          </p>
        </motion.div>

        {/* =========================
            GRAPH
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl sm:rounded-3xl sm:p-6 md:p-10"
        >

          {/* Mobile swipe hint */}
          <div className="mb-4 flex items-center justify-between md:hidden">
            <span className="text-[9px] uppercase tracking-[0.25em] text-gray-600">
              Skill Level
            </span>

            <motion.span
              animate={{
                x: [0, 5, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="text-[9px] uppercase tracking-widest text-gray-600"
            >
              Swipe →
            </motion.span>
          </div>

          {/* Horizontal scroll on mobile */}
          <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 md:overflow-visible">
            <div className="relative min-w-[700px] md:min-w-0">

              {/* =========================
                  GRAPH GRID
              ========================= */}
              <div className="pointer-events-none absolute inset-x-8 bottom-28 top-10 sm:inset-x-10">
                {[100, 80, 60, 40, 20, 0].map((value) => (
                  <div
                    key={value}
                    className="absolute left-0 right-0 border-t border-white/[0.07]"
                    style={{
                      bottom: `${value}%`,
                    }}
                  >
                    <span className="absolute -left-6 -top-3 text-[9px] text-gray-600 sm:-left-7 sm:text-[10px]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* =========================
                  BARS
              ========================= */}
              <div className="relative flex h-[380px] items-end justify-between gap-5 px-6 sm:h-[430px] sm:gap-6 md:h-[450px] md:gap-5 md:px-0">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="group flex h-full min-w-[55px] flex-1 flex-col items-center justify-end sm:min-w-[65px]"
                  >

                    {/* Percentage */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.08 + 0.8,
                        type: "spring",
                      }}
                      className="mb-2 text-center sm:mb-3"
                    >
                      <span className="text-lg font-bold sm:text-xl md:text-2xl">
                        {skill.level}
                      </span>

                      <span className="text-[10px] text-gray-500 sm:text-xs">
                        %
                      </span>
                    </motion.div>

                    {/* =========================
                        BAR
                    ========================= */}
                    <div className="relative flex h-[260px] w-full max-w-[48px] items-end justify-center sm:h-[300px] sm:max-w-[58px] md:h-[320px] md:max-w-[70px]">

                      {/* Background bar */}
                      <div className="absolute bottom-0 h-full w-full rounded-t-xl bg-white/[0.04] sm:rounded-t-2xl" />

                      {/* =========================
                          EFFECTS
                      ========================= */}

                      {/* Photoshop */}
                      {skill.effect === "pulse" && (
                        <motion.div
                          animate={{
                            opacity: [0.1, 0.5, 0.1],
                            scale: [1, 1.25, 1],
                          }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute -inset-4 rounded-full bg-cyan-400/20 blur-2xl"
                        />
                      )}

                      {/* Illustrator */}
                      {skill.effect === "fire" &&
                        [0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [0, -30, -60],
                              x: [
                                0,
                                i === 1 ? 8 : -8,
                                i === 1 ? -4 : 4,
                              ],
                              opacity: [0, 1, 0],
                              scale: [0.5, 1, 0],
                            }}
                            transition={{
                              duration: 1.3,
                              repeat: Infinity,
                              delay: i * 0.4,
                            }}
                            className="absolute bottom-[65%] h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.9)]"
                          />
                        ))}

                      {/* Figma */}
                      {skill.effect === "magic" &&
                        [0, 1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            animate={{
                              rotate: [0, 180, 360],
                              scale: [0.5, 1.5, 0.5],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                            className="absolute h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.9)]"
                            style={{
                              left: `${20 + i * 20}%`,
                              bottom: `${60 + (i % 2) * 10}%`,
                            }}
                          />
                        ))}

                      {/* CapCut */}
                      {skill.effect === "glitch" && (
                        <>
                          <motion.div
                            animate={{
                              opacity: [0, 1, 0, 0.8, 0],
                              x: [-5, 5, -3, 4, 0],
                            }}
                            transition={{
                              duration: 0.5,
                              repeat: Infinity,
                              repeatDelay: 2,
                            }}
                            className="absolute -inset-2 rounded-t-2xl bg-white/20 blur-md"
                          />

                          <motion.div
                            animate={{
                              x: [-10, 10, -6, 6, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 0.35,
                              repeat: Infinity,
                              repeatDelay: 2.5,
                            }}
                            className="absolute left-[-8px] right-[-8px] top-[30%] h-1 bg-white"
                          />
                        </>
                      )}

                      {/* Premiere */}
                      {skill.effect === "lightning" && (
                        <>
                          <motion.div
                            animate={{
                              opacity: [0, 1, 0, 1, 0],
                            }}
                            transition={{
                              duration: 0.7,
                              repeat: Infinity,
                              repeatDelay: 2,
                            }}
                            className="absolute -inset-3 rounded-t-2xl bg-violet-500/30 blur-xl"
                          />

                          <motion.div
                            animate={{
                              top: ["100%", "0%"],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatDelay: 1.5,
                            }}
                            className="absolute left-0 h-[2px] w-full bg-purple-200 shadow-[0_0_15px_rgba(168,85,247,1)]"
                          />
                        </>
                      )}

                      {/* After Effects */}
                      {skill.effect === "energy" && (
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            rotate: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                            },
                            scale: {
                              duration: 1.5,
                              repeat: Infinity,
                            },
                          }}
                          className="absolute -inset-5 rounded-full border border-purple-400/30 blur-sm"
                        />
                      )}

                      {/* Canva */}
                      {skill.effect === "aura" && (
                        <>
                          <motion.div
                            animate={{
                              opacity: [0, 0.6, 0, 0.8, 0],
                              scale: [1, 1.2, 1, 1.3, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                            className="absolute -inset-6 rounded-full bg-cyan-400/30 blur-2xl"
                          />

                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{
                                y: [0, -30, -60],
                                x: [0, 8, -5],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.5,
                              }}
                              className="absolute bottom-[65%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,1)]"
                              style={{
                                left: `${20 + i * 25}%`,
                              }}
                            />
                          ))}
                        </>
                      )}

                      {/* Blender */}
                      {skill.effect === "particles" &&
                        [0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{
                              y: [0, -40, -70],
                              x: [
                                0,
                                i % 2 ? 15 : -15,
                                5,
                              ],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.6,
                            }}
                            className="absolute bottom-[55%] h-1.5 w-1.5 rounded-full bg-orange-300 shadow-[0_0_12px_rgba(251,146,60,1)]"
                            style={{
                              left: `${20 + i * 25}%`,
                            }}
                          />
                        ))}

                      {/* =========================
                          MAIN BAR
                      ========================= */}
                      <motion.div
                        initial={{
                          height: 0,
                        }}
                        whileInView={{
                          height: `${skill.level}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1.4,
                          delay: index * 0.08 + 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                          scaleX: 1.1,
                        }}
                        className={`group/bar relative w-full overflow-hidden rounded-t-xl bg-gradient-to-t ${skill.color} ${skill.glow} shadow-2xl sm:rounded-t-2xl`}
                      >

                        {/* Flicker */}
                        <motion.div
                          animate={{
                            opacity: [
                              0.1,
                              0.5,
                              0.15,
                              0.7,
                              0.1,
                            ],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay:
                              index % 2 === 0 ? 2 : 3,
                          }}
                          className="absolute inset-0 bg-white/10"
                        />

                        {/* Shine */}
                        <motion.div
                          animate={{
                            y: ["120%", "-120%"],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            ease: "easeInOut",
                          }}
                          className="absolute left-0 h-20 w-full bg-white/30 blur-xl sm:h-24"
                        />

                        {/* Energy line */}
                        <motion.div
                          animate={{
                            top: ["100%", "10%"],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                            delay: index * 0.2,
                          }}
                          className="absolute left-0 h-[2px] w-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                        />

                        {/* Top */}
                        <div className="absolute left-0 right-0 top-0 h-1 bg-white/70" />
                      </motion.div>
                    </div>

                    {/* =========================
                        ICON
                    ========================= */}
                    <motion.div
                      animate={{
                        opacity: [1, 0.75, 1],
                        scale: [1, 1.04, 1],
                      }}
                      transition={{
                        duration: 1.5 + index * 0.1,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                      whileHover={{
                        scale: 1.15,
                        y: -5,
                        rotate: [0, -5, 5, 0],
                      }}
                      className={`relative mt-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} text-[10px] font-black text-black shadow-lg ${skill.glow} sm:mt-5 sm:h-12 sm:w-12 sm:text-xs`}
                    >
                      <motion.div
                        animate={{
                          opacity: [0, 0.5, 0],
                          scale: [0.8, 1.5, 0.8],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="absolute inset-0 rounded-xl bg-white/20 blur-md"
                      />

                      <span className="relative z-10">
                        {skill.short}
                      </span>
                    </motion.div>

                    {/* Name */}
                    <p className="mt-2 hidden max-w-[90px] text-center text-[10px] leading-tight text-gray-500 transition-colors duration-300 group-hover:text-white md:mt-3 md:block md:text-xs">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================
            MOBILE HINT / LABELS
        ========================= */}
        <div className="mt-6 flex items-center justify-between px-1 text-[9px] uppercase tracking-[0.2em] text-gray-600 sm:mt-8 sm:px-2 sm:text-[10px] sm:tracking-[0.3em]">
          <span>Beginner</span>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="h-px w-8 bg-white/10 sm:w-12" />

            <span>Skill Level</span>

            <div className="h-px w-8 bg-white/10 sm:w-12" />
          </div>

          <span>Expert</span>
        </div>

        {/* =========================
            BOTTOM DECORATION
        ========================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
          }}
          className="mt-10 flex items-center gap-4 sm:mt-12"
        >
          <div className="h-px flex-1 bg-white/10" />

          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
              },
            }}
            className="h-3 w-3 rounded-full border border-white/40"
          />

          <div className="h-px flex-1 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;