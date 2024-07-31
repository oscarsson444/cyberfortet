import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="text-white flex flex-col gap-5 w-full justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="bg-black/20 p-10 mt-10 rounded-lg flex flex-col items-center w-4/5 gap-4"
      >
        <h4>Utbildning - Civilingenjör Mjukvaruteknik</h4>
        <ul>
          <li className="flex gap-2">
            <p>Master Thesis - </p>
            <a
              className="underline"
              target="_blank"
              rel="noreferrer"
              href="https://liu.diva-portal.org/smash/record.jsf?pid=diva2%3A1879960&dswid=-5512"
            >
              Cyberattack Evaluation of Cloud-controlled Energy Storage
            </a>
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="bg-black/20 p-10 mt-10 rounded-lg flex flex-col items-center w-4/5"
      >
        <h4>Full-Stack</h4>
        <p>
          Jobbade som full-stack utvecklare i nästan 2 år och var med i följande
          projekt:
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="bg-black/20 p-10 mt-10 rounded-lg flex flex-col items-center w-4/5"
      >
        <h4>Projekt</h4>
        <p>Spel</p>
      </motion.div>
    </div>
  );
}
