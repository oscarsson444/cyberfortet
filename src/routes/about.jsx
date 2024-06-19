import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="text-white flex flex-col w-full items-center">
      <div className="bg-black/20 p-10 mt-10 flex flex-col items-center w-4/5">
        <h4>Hej och välkommen till cyberfortet!</h4>
        <div className="grid md:grid-cols-4 grid-cols-1 mt-5 md:gap-4 ">
          <div className="col-span-3">
            <p>
              Jag som driver hemsidan heter Joakim Oscarsson och är en
              teknikentusiast som precis tagit civilingenjörsexamen i
              mjukvaruteknik med inriktning säkra system från Linköpings
              universitet.
              <br />
              <br />
              Målet med hemsidan är att skriva om olika koncept inom IT/OT som
              jag själv vill lära mig mer om. Det kan vara allt från hur en
              router fungerar till en detaljerad guide till en CTF utmaning.
              <br />
              <br />
            </p>
            <div className="w-full flex flex-col gap-4 mb-6 md:mb-0">
              <p>Om du vill ta kontakt med mig finns jag här:</p>
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
              </div>
            </div>
          </div>
          <img
            src="https://i.imgur.com/MwGIs9y.jpg"
            className="object-center object-cover rounded-2xl col-span-1"
            alt="Image of author"
          />
        </div>
      </div>
    </div>
  );
}
