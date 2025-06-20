"use client";
import React, { useEffect, useRef, useState } from "react";
import { Syne } from "next/font/google";
import { useView } from "@/context/ViewContext";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const syne = Syne({ subsets: ["latin"] });

export default function Contact() {
  const { setSectionInView } = useView();
  const [viewCount, setViewCount] = useState<number>(0);
  const [formDisplay, setFormDisplay] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("contact");
  }, [inView, setSectionInView]);

  useEffect(() => {
    if (inView) {
      setViewCount((c) => c + 1);
    }
  }, [inView, setSectionInView]);

  const { formState, register, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(data: any) {
    if (!formRef.current) return;

    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const ownerTemplateID = process.env.NEXT_PUBLIC_NICK_TEMPLATE_ID!;
    const userTemplateID = process.env.NEXT_PUBLIC_CONFIRMATION_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

    emailjs
      .sendForm(serviceID, ownerTemplateID, formRef.current, { publicKey })
      .then(() => {
        console.log("Message to Nick sent");

        emailjs
          .send(
            serviceID,
            userTemplateID,
            {
              userName: data.userName,
              userEmail: data.userEmail,
            },
            { publicKey }
          )
          .then(() => {
            console.log("Auto-reply sent to user");
          })
          .catch((err) => console.error("Auto-reply failed", err));

        toast.success("Message sent", {
          position: "bottom-left",
          autoClose: 3000,
          theme: "dark",
          className: `custom-toast font-kumbhSans`,
        });

        reset();
        setTimeout(() => setFormDisplay(false), 5000);
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
        toast.error("Message not sent, check your network", {
          position: "bottom-left",
          autoClose: 3000,
          theme: "dark",
          className: `custom-toast font-kumbhSans`,
        });
      });
  }

  return (
    <>
      <section
        ref={ref}
        id="contact"
        className={`overflow-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 py-4 md:py-10 lg:py-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl bg-gradient-to-r from-[#1d094b] to-[#380770] transition-all duration-500 ${
          formDisplay ? "h-auto" : "h-[50px]"
        }`}
      >
        {!formDisplay ? (
          <div
            className={` ${
              syne.className
            } flex justify-between items-center w-full duration-1000 ${
              formDisplay && "opacity-0"
            }`}
          >
            <div className="inline w-full">GOT A PROJECT IN MIND?</div>
            <Link href="#footer">
              <button
                className={`rounded-md font-bold uppercase mt-4 lg:mt-0`}
                data-blobity-radius="12"
                onClick={() => {
                  setFormDisplay(!formDisplay);
                }}
              >
                CONTACT&nbsp;ME
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="ml-auto float-right md:absolute right-0 -top-5 text-2xl opacity-50">
              <Icon
                icon="gg:close"
                onClick={() => {
                  setFormDisplay(false);
                  reset();
                }}
              />
            </div>
            <div className="flex items-center h-full gap-2 w-full">
              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className={`back w-full flex flex-col gap-3`}
              >
                <div className="flex gap-1 flex-col">
                  <label
                    htmlFor="userName"
                    className="opacity-70 text-sm lg:text-base "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="userName"
                    {...register("userName", {
                      required: "Please enter your name.",
                      pattern: {
                        value: /^[a-zA-Z][a-zA-Z0-9]{2,}/,
                        message: "Please enter a valid name.",
                      },
                    })}
                    className="bg-gradient-to-r from-[#1b0944] to-[#1c0550] rounded-md  outline-none py-1 pl-2 focus:outline-white focus:ring-2 focus:ring-white"
                  />
                  {errors?.userName && (
                    <span className="text-red-400 text-xs">
                      {errors?.userName?.message as string}
                    </span>
                  )}
                </div>
                <div className="flex gap-1 flex-col">
                  <label
                    htmlFor="userEmail"
                    className="opacity-70 text-sm lg:text-base "
                  >
                    Email
                  </label>
                  <input
                    id="userEmail"
                    type="email"
                    {...register("userEmail", {
                      required: "Enter a correct email address",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please provide a valid email address",
                      },
                    })}
                    className="bg-gradient-to-r from-[#1b0944] to-[#1c0550] rounded-md outline-none py-1 pl-2 focus:outline-white focus:ring-2 focus:ring-white"
                  />
                  {errors?.userEmail && (
                    <span className="text-red-400 text-xs">
                      {errors?.userEmail?.message as string}
                    </span>
                  )}
                </div>
                <div className="flex gap-1 flex-col">
                  <label
                    htmlFor="userMessage"
                    className="opacity-70 text-sm lg:text-base"
                  >
                    Message
                  </label>
                  <textarea
                    id="userMessage"
                    {...register("userMessage", {
                      required:
                        "Thank you for reaching out! I will be in touch soon :).",
                    })}
                    rows={4}
                    cols={50}
                    className="bg-gradient-to-r from-[#1b0944] to-[#1c0550] rounded-md outline-none py-1 pl-2 focus:outline-white focus:ring-1 focus:ring-white"
                  />
                  {errors?.userMessage && (
                    <span className="text-red-400 text-xs">
                      {errors?.userMessage?.message as string}
                    </span>
                  )}
                </div>
                <button className={`rounded-md font-bold uppercase mt-4`}>
                  Send
                </button>
              </form>
            </div>
          </>
        )}
      </section>
      <ToastContainer />
    </>
  );
}
