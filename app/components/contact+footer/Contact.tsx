"use client";
import React, { useEffect, useRef, useState } from "react";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
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

  // For email.js
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(data: any) {
    console.log(data);

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        formRef.current as HTMLFormElement,
        {
          publicKey: `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            className: `custom-toast font-kumbhSans`,
          });
          reset();
          setTimeout(() => setFormDisplay(!formDisplay), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Message not sent, check your network", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
            className: `custom-toast font-kumbhSans`,
          });
        }
      );
  }

  return (
    <>
      <section
        ref={ref}
        id="contact"
        className={`flex flex-col gap-4 items-center justify-center w-full h-screen text-white/75`}
      >
        {!formDisplay ? (
          <div
            className={` ${
              syne.className
            } flex justify-between items-center w-full duration-1000 ${
              formDisplay && "opacity-0"
            }`}
          >
            <div className="inline w-full">
              GOT A PROJECT IN MIND?
              <Link href="#footer" data-no-blobity>
                <span
                  data-blobity
                  onClick={() => {
                    setFormDisplay(!formDisplay);
                  }}
                  className="text-2xl font-bold uppercase"
                >
                  CONTACT ME
                </span>
              </Link>
            </div>
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
                data-blobity
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
                className={`back w-full flex flex-col gap-3 grow-[2] basis-0`}
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
                    className="bg-transparent outline-none py-1 pl-2"
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
                    className="bg-transparent outline-none py-1 pl-2"
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
                    className="bg-transparent outline-none py-1 pl-2"
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
        )}{" "}
      </section>
      <ToastContainer />
    </>
  );
}
