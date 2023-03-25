import React, { useRef } from "react";
import Btn from "../components/btn";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
export default function contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d8g1xla",
        "template_i83flcn",
        form.current,
        "6ugmJcbXxgoVZidp1"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
           toast.success("Message sent successfully! 😍")
        },
        (error) => {
          console.log(error.text);
          toast.error("Fail to send! 😭");
        }
      );
  };
  
  return (
    <div className="pb-60 pt-44" id="contact">
    <ToastContainer />
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
        <div className=" flex flex-col gap-y-4 text-Lightest-Slate ">
          <h1 className="whitespace-nowrap textClamp flex flex-row text-Lightest-Slate gap-x-2 justify-center mb-1 font-bold items-center">
            <span className=" text-Green font-sans">04.</span>What’s Next?
          </h1>
          <h1 className="text-center text-5xl font-bold mb-4 whitespace-nowrap max-md:text-4xl">
            Get In Touch
          </h1>
          <input
            type="text"
            name="user_name"
            className="pl-2 text-1xl py-4 bg-Navy outline-Green active:border-b-0 border-b"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="mt-4 pl-2 text-1xl py-4 bg-Navy outline-Green active:border-b-0 border-b"
            placeholder="Enter your email"
            required          
          />
          <textarea
            name="message"
            className="text-Lightest bg-Navy text-1xl resize-none pt-2 pl-2 outline-Green active:border-b-0 border-b"
            placeholder="Your message"
            rows={5}
            required
          ></textarea>
          <Btn type="submit" className={"w-44 mx-auto mt-12"}>
            Send message
          </Btn>
        </div>
      </form>
    </div>
  );
}
