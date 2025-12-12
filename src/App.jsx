import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

function App() {
  return (
    <>
      {/* Banner Section */}
      <Carousel
        autoFocus={true}
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
      >
        <div>
          <img
            src="https://i.ibb.co.com/XxjyDT6H/img-01.jpg"
            alt="Banner 1"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] 2xl:h-[700px] object-cover "
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/JW8N5jqB/img-02.jpg"
            alt="Banner 2"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] 2xl:h-[700px] object-cover "
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/M5gMLtWf/img-03.jpg"
            alt="Banner 3"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] 2xl:h-[700px] object-cover "
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/FLWjNM0X/img-10.jpg"
            alt="Banner 4"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] 2xl:h-[700px] object-cover "
          />
        </div>
      </Carousel>

      {/* body */}
      <div className="my-20 flex flex-col justify-center items-center md:flex-row gap-12 px-4">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            className="h-80 w-80 md:h-96 md:w-96 rounded-3xl object-cover shadow-lg"
            src="https://i.ibb.co.com/PvrRC2r6/img-04.jpg"
            alt="Img"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-xl bg-white/40 p-6 rounded-3xl border">
          <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-800 mb-2">
            Bogura Polytechnic Institute
          </h1>

          <hr className="border-gray-300 my-3" />

          <p className="text-gray-800 font-semibold leading-relaxed text-justify">
            The Computer Department of Bogra Polytechnic Institute, established
            in 2003, is one of the key academic units dedicated to producing
            skilled professionals in the field of Computer Technology. Since its
            early years, including contributions from the 2005–06 (2nd Shift)
            session, the department has been committed to quality technical
            education, practical training, and modern ICT-based learning. It
            plays a vital role in preparing students for the rapidly evolving
            technology sector through structured coursework, hands-on lab
            activities, and an industry-oriented curriculum.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-horizontal footer-center bg-gray-800 text-primary-content p-10">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="inline-block fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Pranto - 715499
          </p>
          <p className="font-bold">
            Computer Department,{" "}
            <span>
              6<sup>th</sup> Semister
            </span>{" "}
            2<sup>nd</sup> Shift session 22-23
            <br />
            Bogura Polytechnic Institute
          </p>
        </aside>
        <nav>
          <div className="flex mt-5 gap-3">
            <a
              href="https://www.linkedin.com/in/pranto-kumar-/"
              target="_blank"
            >
              <img
                className="w-20"
                src="https://i.ibb.co.com/N2QMmYdD/linkedin-removebg.png"
                alt="LinkedIn"
              />
            </a>
            <a href="https://github.com/SKMPranto" target="_blank">
              <img
                className="w-20 mt-1 md:ml-2"
                src="https://i.ibb.co.com/0pSf3LTt/github-removebg.png"
                alt="Github"
              />
            </a>
            <a
              href="https://www.facebook.com/skpranto.skpranto.71"
              target="_blank"
            >
              <img
                className="w-11 my-2 md:ml-9"
                src="https://i.ibb.co.com/20ThQvrG/Facebook.png"
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/s_pranto_kumar/?hl=en"
              target="_blank"
            >
              <img
                className="w-11 mt-2 ml-5 md:ml-15"
                src="https://i.ibb.co.com/1tXGG5ZB/insta-removebg.png"
                alt="Instagram"
              />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default App;
