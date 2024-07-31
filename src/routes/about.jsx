import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Star from "../components/Star";
import { FaGithub } from "react-icons/fa";

export default function About() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const documentHeight = document.documentElement.scrollHeight;
    const documentWidth = document.documentElement.scrollWidth;

    const starConstant = Math.ceil(documentHeight * documentWidth * 0.00006);

    const starsArray = [...Array(starConstant)].map(() => ({
      top: Math.random() * (documentHeight - 10),
      left: Math.random() * (documentWidth - 10),
    }));

    setStars(starsArray);
  }, []);
  return (
    <div className="text-white flex flex-col w-full items-center mb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="bg-black/20 backdrop-blur-sm z-10 p-10 mt-10 rounded-lg flex flex-col items-center w-4/5"
      >
        <h4>Hej och välkommen till cyberfortet!</h4>
        <div className="grid md:grid-cols-4 grid-cols-1 mt-5 md:gap-4 ">
          <div className="col-span-3">
            <p>
              Jag som driver hemsidan heter Joakim Oscarsson och är en
              teknikentusiast som 2024 tog civilingenjörsexamen i mjukvaruteknik
              med inriktning säkra system från Linköpings universitet.
              <br />
              <br />
              Målet med hemsidan är att skriva om olika koncept inom IT som jag
              själv vill lära mig mer om. Det kan vara allt från projekt med en
              Raspberry Pi till en detaljerad guide om en CTF utmaning. Nedan
              följer lite information om min utbildning och tidigare jobb.
              <br />
              <br />
            </p>
            <div className="w-full flex flex-col gap-4 mb-6 md:mb-0">
              <div className="flex flex-col">
                <p className="text-xl">Master Thesis</p>
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://liu.diva-portal.org/smash/record.jsf?pid=diva2%3A1879960&dswid=-5512"
                >
                  Cyberattack Evaluation of Cloud-controlled Energy Storage
                </a>
              </div>
              <div className="flex flex-col">
                <p className="text-xl">Kurser</p>
                <a
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://studieinfo.liu.se/program/6CMJU/4208#curriculum"
                >
                  Programplan, inriktning Säkra System
                </a>
              </div>
              <div className="flex flex-col">
                <div className=" inline-block">
                  <p className="text-xl inline">Full-Stack på </p>
                  <a
                    className="underline text-xl"
                    target="_blank"
                    rel="noreferrer"
                    href="https://alobyte.se/"
                  >
                    Alobyte
                  </a>
                  <p className="inline text-xl"> (2022-2024)</p>
                </div>
                <p>Arbetade med frameworks som:</p>
                <ul className="list-disc list-inside">
                  <li>
                    <Link to="https://react.dev/" className="underline">
                      React
                    </Link>
                  </li>
                  <li>
                    <Link to="https://nextjs.org/" className="underline">
                      Next.js
                    </Link>
                  </li>
                  <li>
                    <Link to="https://vitejs.dev/" className="underline">
                      Vite.js
                    </Link>
                  </li>
                  <li>
                    <Link to="https://tailwindcss.com/" className="underline">
                      Tailwind CSS
                    </Link>
                  </li>
                  <li>
                    <Link to="https://nestjs.com/" className="underline">
                      NestJS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://fastapi.tiangolo.com/"
                      className="underline"
                    >
                      FastAPI
                    </Link>
                  </li>
                </ul>
              </div>

              <p className="text-xl mt-10">Kontakt</p>
              <div className="flex flex-row md:flex-col gap-4">
                <Link
                  to="https://www.linkedin.com/in/joakim-oscarsson-5145a919b"
                  className="flex flex-row items-center gap-4 cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="w-10 h-10" />
                  <p className="hidden md:block underline">
                    www.linkedin.com/in/joakim-oscarsson-5145a919b
                  </p>
                </Link>
                <Link
                  to="mailto:oscarsson444@gmail.com"
                  className="flex flex-row items-center gap-4 cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdOutlineEmail className="w-10 h-10" />
                  <p className="hidden md:block underline">
                    oscarsson444@gmail.com
                  </p>
                </Link>
                <Link
                  to="https://github.com/oscarsson444"
                  className="flex flex-row items-center gap-4 cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="w-10 h-10" />
                  <p className="hidden md:block underline">oscarsson444</p>
                </Link>
              </div>
            </div>
          </div>
          <img
            src="https://i.imgur.com/MwGIs9y.jpg"
            className="object-center object-cover rounded-2xl col-span-1"
            alt="Image of author"
          />
        </div>
      </motion.div>
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: `${star.top}px`,
            left: `${star.left}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Star />
        </div>
      ))}
    </div>
  );
}
