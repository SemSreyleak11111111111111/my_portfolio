import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectRow = ({ title, data, id }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef(null);

  // =========================
  // CLOSE POPUP WITH ESCAPE
  // =========================
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

  // =========================
  // AUTO SCROLL
  // =========================
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    let animationFrame;
    let isPaused = false;

    const speed = 0.5; // Change this to make scrolling faster/slower

    const scroll = () => {
      if (!isPaused) {
        container.scrollLeft += speed;

        // Reset to beginning when reaching the end
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 1
        ) {
          container.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <section
        id={id}
        className="bg-black text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* SECTION TITLE */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-10"
          >
            {title}
          </motion.h2>

          {/* HORIZONTAL PROJECT ROW */}
          <div
            ref={scrollRef}
            className="
              flex
              gap-6
              overflow-x-auto
              pb-6
              scrollbar-hide
              cursor-grab
            "
          >
            {data.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                onClick={() => setSelectedImage(project)}
                className="
                  group
                  flex-shrink-0
                  cursor-pointer
                  overflow-hidden
                  rounded-2xl
                  bg-zinc-900
                "
              >
                {/* FIXED HEIGHT / AUTO WIDTH */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-[400px]
                    w-auto
                    block
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================
          IMAGE POPUP
      ========================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="
              fixed
              inset-0
              z-[100]
              bg-black/90
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-5
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >

            {/* IMAGE */}
            <motion.img
              src={selectedImage.image}
              alt={selectedImage.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="
                max-w-[95vw]
                max-h-[90vh]
                object-contain
                rounded-xl
                shadow-2xl
              "
            />

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute
                top-6
                right-6
                w-12
                h-12
                rounded-full
                bg-white
                text-black
                text-3xl
                font-bold
                flex
                items-center
                justify-center
                hover:bg-zinc-300
                transition
              "
            >
              ×
            </button>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectRow;