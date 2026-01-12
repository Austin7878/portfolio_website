// const Contact = ({ darkMode }) => {
//   return (
//     <section
//       id="contact"
//       style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
//       className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
//           <h2
//             className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
//             style={{ color: darkMode ? "white" : "#1f2937" }}
//           >
//             Get In{" "}
//             <span
//               style={{
//                 background: "linear-gradient(to right, #f97316, #f59e0b)",
//                 WebkitBackgroundClip: "text",
//                 backgroundClip: "text",
//                 color: "transparent",
//               }}
//             >
//               Touch
//             </span>
//           </h2>

//           <p
//             className="text-base sm:text-lg md:text-xl text-center mx-auto max-w-3xl"
//             style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
//           >
//             Let's connect. If you have a project in mind, a question, or an idea
//             you'd like to explore feel free to reach out. I'm always open to new
//             opportunities & meaningful collaborations.
//           </p>
//         </div>

//         {/* Form Centered */}
//         <div className="grid grid-cols-1 place-items-center">
//           <form
//             style={{
//               background: darkMode
//                 ? "linear-gradient(to right, #1f2937, #111827)"
//                 : "linear-gradient(to right, #ffffff, #f9fafb)",
//               borderColor: darkMode ? "#374151" : "#e5e7eb",
//             }}
//             className="w-full max-w-lg rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg"
//             data-aos="fade-up"
//           >
//             <div className="flex flex-col gap-4">
//               {/* Name */}
//               <input
//                 type="text"
//                 placeholder="Name"
//                 required
//                 style={{
//                   backgroundColor: darkMode ? "#374151" : "#faede3",
//                   borderColor: darkMode ? "#4b5563" : "#d1d5db",
//                   color: darkMode ? "white" : "#1f2937",
//                 }}
//                 className="w-full px-4 py-3 rounded-lg text-sm sm:text-base
//                 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
//               />

//               {/* Email */}
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 required
//                 style={{
//                   backgroundColor: darkMode ? "#374151" : "#faede3",
//                   borderColor: darkMode ? "#4b5563" : "#d1d5db",
//                   color: darkMode ? "white" : "#1f2937",
//                 }}
//                 className="w-full px-4 py-3 rounded-lg text-sm sm:text-base
//                 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
//               />

//               {/* Message */}
//               <textarea
//                 rows="4"
//                 placeholder="Message"
//                 required
//                 style={{
//                   backgroundColor: darkMode ? "#374151" : "#faede3",
//                   borderColor: darkMode ? "#4b5563" : "#d1d5db",
//                   color: darkMode ? "white" : "#1f2937",
//                 }}
//                 className="w-full px-4 py-3 rounded-lg text-sm sm:text-base
//                 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
//                 transition-all resize-y"
//               />

//               {/* Button */}
//               <button
//                 type="submit"
//                 style={{
//                   background: "linear-gradient(to right, #f97316, #f59e0b)",
//                 }}
//                 className="mx-auto px-6 py-2 text-white font-semibold rounded-lg
//                 text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25
//                 hover:scale-[1.02] transition-all"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;














import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ darkMode }) => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_cb8e6xt",
      "template_bzea8oy",
      formRef.current,
      "m89aR24qMu0FYiqDI"
    )
    .then(
      () => {
        alert("Message sent successfully ✅");
        e.target.reset();
      },
      (error) => {
        alert("Failed to send message ❌");
        console.error(error);
      }
    );
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Touch
            </span>
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl text-center mx-auto max-w-3xl"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            Let's connect. If you have a project in mind, a question, or an idea
            you'd like to explore feel free to reach out. I'm always open to new
            opportunities & meaningful collaborations.
          </p>
        </div>

        {/* Form Centered */}
        <div className="grid grid-cols-1 place-items-center">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            style={{
              background: darkMode
                ? "linear-gradient(to right, #1f2937, #111827)"
                : "linear-gradient(to right, #ffffff, #f9fafb)",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
            className="w-full max-w-lg rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg"
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-4">
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-4 py-3 rounded-lg text-sm sm:text-base
                focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-4 py-3 rounded-lg text-sm sm:text-base
                focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              />

              {/* Message */}
              <textarea
                rows="4"
                name="message"
                placeholder="Message"
                required
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-4 py-3 rounded-lg text-sm sm:text-base
                focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
                transition-all resize-y"
              />

              {/* Button */}
              <button
                type="submit"
                style={{
                  background: "linear-gradient(to right, #f97316, #f59e0b)",
                }}
                className="mx-auto px-6 py-2 text-white font-semibold rounded-lg
                text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25
                hover:scale-[1.02] transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
