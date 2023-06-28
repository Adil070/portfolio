import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/6d628f10-52c6-4fe9-91de-5025fb1275d1"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-300 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - <br />
            <b className="text-cyan-600">mohsadil070@gmail.com</b>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded "
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]  rounded"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-cyan-300  hover:text-black hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center rounded">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
