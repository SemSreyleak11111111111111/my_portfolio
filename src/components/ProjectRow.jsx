import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectRow = ({  data, id }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <section id={id} className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* <h2 className="text-5xl font-bold mb-10">{title}</h2> */}

          {/* Horizontal Scroll */}
          <div
            className="
              flex
              gap-6
              overflow-x-auto
              pb-4
              snap-x
              snap-mandatory
              scrollbar-hide
              scroll-smooth
            "
          >
            {data.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                onClick={() => setSelectedImage(project)}
                className="
                  group
                  cursor-pointer
                  rounded-2xl
                  bg-zinc-900
                  overflow-hidden
                  flex-shrink-0
                  w-[300px]
                  snap-start
                "
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* <div className="p-5">
                  <h3 className="text-lg font-semibold">
                    {project.title}
                  </h3>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.25 }}
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-white text-black text-3xl font-bold hover:bg-gray-300 transition"
              >
                ×
              </button>

              <div className="mt-5 text-center text-white">
                <h3 className="text-xl font-semibold">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectRow;