import about from "../assets/about.png";

const About = ({darkMode}) => {
  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-warp justify-center gap-4 relative order-2 lg:order-1"
        >
          <div className="relative w-75 h-75 lg:w-96 lg:h-96">
            {/* Images */}
            <div
              className="absolute -inset-6 lg:-inset-20 bg-linear-to-l from-[#f97316] via-[#fb923c] to-[#f59e0b] rotate-12 star-shape z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>
            <img
              src={about}
              alt="Abouy Image"
              className="absolute inset-0 w-full h-full object-cover z-10 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-dealy="400"
            />
          </div>
        </figure>
        <article
          data-aos="fade-left"
          data--aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:order-2"
        >
          <header>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>
          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            I’m a passionate Full-Stack Web Developer and Graphic Designer who
            loves turning ideas into clean, functional, and visually appealing
            digital experiences. I enjoy building websites and applications that
            don’t just work, but feel right to the people using them. <br />{" "}
            <br />
            With experience across both frontend and backend development, I
            focus on creating solutions that are fast, responsive, and easy to
            use. My background in graphic design helps me pay close attention to
            details like layout, color, and balance because good design isn’t
            just about looks, it’s about clarity and purpose. <br /> <br /> I’m
            also actively learning UI/UX design, constantly improving how users
            interact with products and how those experiences can feel more
            natural and enjoyable. I believe learning never stops in tech, and
            growth is part of my daily routine. <br /> <br /> What sets me apart
            is my commitment to understanding your vision. I don’t just build
            projects I collaborate, listen, and transform ideas into digital
            products that represent your brand and goals. Whether you’re
            starting from scratch or improving an existing project, I’m here to
            help bring it to life. <br /> <br /> If you’re looking for someone
            who is reliable, creative, and genuinely invested in your project,
            I’d love to work with you.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="650"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                5+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Projects
              </div>
            </div>

            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="650"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                1+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Years Experience
              </div>
            </div>

            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                5+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Review Projects
              </div>
            </div>
          </div>

           <button
                    className={`w-full sm:w-auto border-2 border-orange-500 inline-flex items-center justify-center py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform ${ darkMode ? 'text-white bg-orange-500/10' : 'text-gray-800 bg-white/90'}`}
                    data-aos='fada-up'
                    data-aos-delay='800'
                  >

                    Learn More
                  </button>
        </article>
      </div>
    </section>
  );
};

export default About;
