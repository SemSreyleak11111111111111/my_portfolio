import { motion } from "framer-motion";

const skills = [
  {
    name: "Adobe Photoshop",
    bg: "bg-blue-500/15",
    text: "text-blue-400",
    border: "border-blue-500/30",
  },
  {
    name: "Adobe Illustrator",
    bg: "bg-orange-500/15",
    text: "text-orange-400",
    border: "border-orange-500/30",
  },
  {
    name: "Adobe Premiere Pro",
    bg: "bg-violet-500/15",
    text: "text-violet-400",
    border: "border-violet-500/30",
  },
  {
    name: "Adobe After Effects",
    bg: "bg-purple-500/15",
    text: "text-purple-400",
    border: "border-purple-500/30",
  },
  {
    name: "Figma",
    bg: "bg-pink-500/15",
    text: "text-pink-400",
    border: "border-pink-500/30",
  },
  {
    name: "Canva",
    bg: "bg-cyan-500/15",
    text: "text-cyan-400",
    border: "border-cyan-500/30",
  },
  {
    name: "CapCut",
    bg: "bg-gray-200/10",
    text: "text-white",
    border: "border-gray-500/30",
  },
  {
    name: "Blender",
    bg: "bg-amber-500/15",
    text: "text-amber-400",
    border: "border-amber-500/30",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white mb-16"
        >
          My Skills
        </motion.h2>

        <div className="flex flex-wrap gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.08,
              }}
              className={`
                ${skill.bg}
                ${skill.text}
                ${skill.border}
                border
                rounded-2xl
                px-7
                py-4
                cursor-default
                font-semibold
                text-lg
                transition-all
                duration-300
                hover:shadow-2xl
                backdrop-blur-sm
              `}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;