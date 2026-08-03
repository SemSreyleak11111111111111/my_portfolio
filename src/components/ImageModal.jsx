import { AnimatePresence, motion } from "framer-motion";

const ImageModal = ({ image, title, onClose }) => {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            src={image}
            alt={title}
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

          <button
            onClick={onClose}
            className="
              absolute
              top-6
              right-6
              text-white
              text-5xl
              hover:text-gray-400
            "
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;