import resume from "../resume/Holly_Wheeler_Resume.pdf";
import { motion } from "framer-motion";

function Resume() {
  return (
    <div>
      <iframe
        src={resume}
        width="100%"
        height="900px"
        allowFullScreen
        className="pt-12 h-screen w-full"
      ></iframe>
      <motion.div
        className="slide-in bg-white dark:bg-midnight"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out bg-white dark:bg-midnight"
        initial={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export default Resume;
