import { motion, AnimatePresence } from "framer-motion";
import { content } from "../data/sampleContent";

export default function AdaptiveLayout({ mode }) {
  if (!mode) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        className="content-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        {mode === "quick" && (
          <>
            <h2>Quick Overview</h2>
            <p>{content.summary}</p>
          </>
        )}

        {mode === "decide" && (
          <>
            <h2>Decision View</h2>

            <h4>Pros</h4>
            <ul>
              {content.pros.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h4>Cons</h4>
            <ul>
              {content.cons.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {mode === "deep" && (
          <>
            <h2>Deep Explanation</h2>
            <p>{content.details}</p>
          </>
        )}

        {mode === "explore" && (
          <>
            <h2>Explore Mode</h2>
            <p>{content.summary}</p>
            <p>{content.details}</p>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
