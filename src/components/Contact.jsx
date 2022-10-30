import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/20/solid";

const Contact = () => {
  const [sentMail, setSentMail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_API_KEY}`
      )
      .then(() => setTimeout(() => setSentMail(false), 3000));

    e.target.reset();
  };

  return (
    <div className="px-6 md:px-32 xl:px-60 py-20">
      <div className="bg-form px-4 py-12 space-y-12 lg:space-y-0 lg:p-24 rounded-md flex flex-col lg:flex-row justify-between ">
        <form className="w-full" onSubmit={sendEmail}>
          <ul>
            <li>
              <label>Mail</label>
            </li>
            <li>
              <input
                name="email"
                type="email"
                className="bg-tertiary w-[80%] sm:w-[60%] lg:w-[40%]  mb-6 p-2 text-xs outline-none rounded-sm"
              />
            </li>
            <li>
              <label>Message</label>
            </li>
            <li className="w-full">
              <textarea
                name="message"
                className="bg-tertiary w-[100%] sm:w-[80%] lg:w-[60%] p-2 text-xs outline-none h-40 rounded-sm"
              />
            </li>
            <li>
              <button
                onClick={() => setSentMail(true)}
                type="submit"
                className={`flex mt-4 font-medium w-[100%] sm:w-[80%] justify-center lg:w-[60%] items-center py-1.5 shadow-sm rounded-sm uppercase hover:bg-white transition-all duration-300 bg-tertiary 
                ${sentMail ? "px-6" : "px-10"} `}
              >
                {sentMail ? "MESSAGE SENT" : "SEND MESSAGE"}
                {sentMail ? (
                  <img
                    alt="check button"
                    className="h-5 pl-2"
                    src="../../check.webp"
                  />
                ) : (
                  <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 text-black ml-2" />
                )}
              </button>
            </li>
          </ul>
        </form>
        <div className="flex flex-col space-y-4">
          <span className="flex">
            <EnvelopeIcon className="h-6" />
            <span className="pl-2">marius.igret13@gmail.com</span>
          </span>
          <span className="flex">
            <PhoneIcon className="h-6" />
            <span className="pl-2">+40 0743 801 810</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
