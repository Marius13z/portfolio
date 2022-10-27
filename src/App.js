import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />
      <section>
        <div className="items-center px-4 lg:px-16 relative flex justify-between">
          <div className="">
            <h1 className="uppercase text-lg lg:text-2xl font-bold">
              Marius Igret
            </h1>
            <p className="text-xs lg:text-lg text-primary"> React Developer</p>
          </div>
          <img
            alt="me"
            className="z-10 max-w-sm lg:max-w-2xl"
            src="./Group 96.png"
          />
          <div
            onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
            className="hidden lg:flex group space-x-4 items-center cursor-pointer"
          >
            <span className="text-black text-sm">See my work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 p-1 bg-white rounded-full group-hover:bg-black group-hover:text-white duration-300 transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
        </div>
      </section>
      {/* Content */}

      {/* Projects */}
      <Projects />
      {/* About me */}
      <About />

      {/* Contact */}
      <Contact />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bg-primary hover:bg-black hover:text-white transition-all duration-300 rounded-full p-2 bottom-10 right-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </main>
  );
}

export default App;
