import React from "react";

const Contact = () => {
  return (
    <div className="px-60 py-20">
      <div className="bg-form w-full h-[450px] rounded-md flex justify-between ">
        <form
          action="mailto:marius.igret13@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <ul className="pt-16 pl-24 relative">
            <li>
              <label>Mail</label>
            </li>
            <li>
              <input
                name="mail"
                type="mail"
                className="bg-tertiary mb-6 p-2 text-xs outline-none rounded-sm"
              />
            </li>
            <li>
              <label>Message</label>
            </li>
            <li>
              <textarea
                name="message"
                className="bg-tertiary w-[370px] p-2 text-xs outline-none h-40 rounded-sm"
              />
            </li>
            <li>
              <button
                type="submit"
                className="py-1 px-10 shadow-sm rounded-sm uppercase hover:bg-white transition-all duration-300 bg-form absolute bottom-4 left-[335px]"
              >
                send
              </button>
            </li>
          </ul>
        </form>
        <div className="flex relative flex-col items-end pr-4 pt-4 space-y-5">
          <div className="bg-black text-white rounded-full h-8 w-8 items-center justify-center flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="self-start">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              marius.igret13@gmail.com
            </p>
            <p>
              <span className="font-semibold">Phone number:</span> +40 743 801
              810
            </p>
          </div>
          <p className="text-3xl -right-20 bottom-10 absolute font-bold w-[21ch]">
            FEEL FREE TO CONTACT ME
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
