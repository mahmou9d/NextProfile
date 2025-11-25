"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full relative overflow-hidden text-white py-16 px-4 lg:px-24  bg-[#000824]">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold">WebAgency</h2>
          <p className="text-blue-200">
            We build stunning websites and apps that grow your business and
            elevate your brand.
          </p>
          <p className="text-blue-300">
            © 2025 WebAgency. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Portfolio
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p className="text-blue-200">Phone: 01009014597</p>
          <p className="text-blue-200">Email: mohnud0987@gmail.com</p>
          <p className="text-blue-200">Website: www.webagency.com</p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 hover:scale-110 transition-transform shadow-lg"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 hover:scale-110 transition-transform shadow-lg"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 hover:scale-110 transition-transform shadow-lg"
            >
              <FaLinkedinIn className="text-white" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 hover:scale-110 transition-transform shadow-lg"
            >
              <FaGithub className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import { FaLocationArrow } from "react-icons/fa6";

// import { socialMedia } from "@/data";
// import MagicButton from "./MagicButton";

// const Footer = () => {
//   return (
//     <footer className="w-full pt-20 pb-10" id="contact">
//       {/* background grid */}
//       <div className="w-full absolute left-0 -bottom-72 min-h-96">
//         <img
//           src="/footer-grid.svg"
//           alt="grid"
//           className="w-full h-full opacity-50 "
//         />
//       </div>

//       <div className="flex flex-col items-center">
//         <h1 className="heading lg:max-w-[45vw]">
//           Ready to take <span className="text-purple">your</span> digital
//           presence to the next level?
//         </h1>
//         <p className="text-white-200 md:mt-10 my-5 text-center">
//           Reach out to me today and let&apos;s discuss how I can help you
//           achieve your goals.
//         </p>
//         <a href="mailto:contact@jsmastery.pro">
//           <MagicButton
//             title="Let's get in touch"
//             icon={<FaLocationArrow />}
//             position="right"
//           />
//         </a>
//       </div>
//       <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
//         <p className="md:text-base text-sm md:font-normal font-light">
//           Copyright © 2024 Mahmoud Mohammed
//         </p>

//         <div className="flex items-center md:gap-3 gap-6">
//           {socialMedia.map((info) => (
//             <div
//               key={info.id}
//               className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg  "
//             >
//               <img src={info.img} alt="icons" width={20} height={20} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
