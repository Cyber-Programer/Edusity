import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5" id="contact">
      <span className="text-lg font-bold capitalize text-nav-bg">
        Contact Us
      </span>
      <h2 className="text-3xl font-bold">Get in Touch</h2>
      {/* left right container */}
      <div className="flex flex-col gap-5 md:flex-row">
        {/* left */}
        <div className="mt-10 container-left w-full md:w-[50%] ">
          <div className="flex flex-col justify-start gap-5 py-5">
            <h3 className="flex items-center justify-start gap-3 text-2xl font-bold">
              Send us a message{" "}
              <img className="w-10" src="/assets/msg-icon.png" alt="" />{" "}
            </h3>
            <p className="text-sm text-gray-500">
              Feel free to reach out through contact form or find our contact
              information below. Your feedback, questions, and suggestions are
              important to us as we strive to provide exceptional service to our
              university community.
            </p>
            {/* contact details */}
            <div className="flex flex-col gap-2">
              <span className="flex items-center justify-start gap-5">
                <img className="w-5" src="/assets/sms.png" alt="" />{" "}
                Contact@GreatStack.dev
              </span>
              <span className="flex items-center justify-start gap-5">
                <img className="w-5" src="/assets/call.png" alt="" />
                +1 123-456-7890
              </span>
              <span className="flex items-center justify-start gap-5">
                <img className="w-5" src="/assets/location.png" alt="" />
                77 Massachusetts Ave, Cambridge MA 02139, United States
              </span>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="mt-10 container-right w-full md:w-[50%]">
          <form action="" className="flex flex-col gap-2 ">
            {/* name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-normal text-gray-600 capitalize "
              >
                Your name
              </label>
              <input
                type="text"
                placeholder="name"
                className="bg-[#ebecfe] px-5 py-2 rounded-lg "
              />
            </div>

            {/* phone number */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="your name"
                className="font-normal text-gray-600 capitalize "
              >
                Phone number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="bg-[#ebecfe] px-5 py-2 rounded-lg "
              />
            </div>

            {/* email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-normal text-gray-600 capitalize "
              >
                Email Id
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-[#ebecfe] px-5 py-2 rounded-lg "
              />
            </div>

            {/* your message */}
            <label htmlFor="name" className="font-normal text-gray-600 capitalize ">
                Write your messages here
              </label>
              <textarea
                type="text"
                placeholder="Enter your message"
                rows={5}
                className="bg-[#ebecfe] px-5 py-2 rounded-lg resize-none"
              />
            <div className="flex gap-4">
                <input type="checkbox" name="human" id="human" />
                <label htmlFor="text">I am human</label>
                <img src="" alt="" />
            </div>
            <button className="py-3 mb-5 font-bold text-white rounded-xl bg-nav-bg">Send Message</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
