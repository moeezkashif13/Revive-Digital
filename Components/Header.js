import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function HeaderComp({
  specialAppearanceFields,
  text,
  special = "our",
  main = "workkkkkk",
  anotherAppearance,
}) {
  const splittingText = () => {
    if (text) {
      const splitText = text.split(" ");

      const getFirstWord = splitText.shift();

      const joiningRemainingWords = splitText.join(" ");

      return { getFirstWord, joiningRemainingWords };
    }
  };

  const mainString = splittingText();

  return (
    <div className="relative  h-[380px] capitalize ">
      <div className="absolute left-0 top-10 z-20 w-full px-12  text-white ">
        <Navbar />
      </div>

      <div className="heroSectVideoDiv h-full bg-purple-500">
        <video width="100%" height="100%" autoPlay loop muted playsinline>
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="frontDiv absolute top-4 h-full w-full pl-4 text-white">
        <div
          className="relative h-full "
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          {/* NAVBARR STARTT */}

          {/* NAVBARR ENDDD */}

          {anotherAppearance ? (
            <div className=" absolute  -bottom-3    z-20 flex  h-full w-full flex-col items-center justify-center gap-y-4">
              <p className="text-5xl font-medium">
                {specialAppearanceFields?.["each-service-header"]}
              </p>
              {/* {specialAppearanceFields?.['each-service-paragraph']} */}
              <p className="w-1/2 text-xl font-semibold ">
                {specialAppearanceFields?.["each-service-paragraph"]}{" "}
              </p>

              <div className="flex gap-x-6 text-lg font-semibold text-white">
                <Link
                  style={{ transition: "all 0.3s" }}
                  href="/our-work"
                  className="rounded-3xl border px-7 py-2 hover:bg-white hover:text-black "
                >
                  View Portfolio
                </Link>

                <Link
                  style={{ transition: "all 0.3s" }}
                  href="/contact"
                  className="rounded-3xl border px-7 py-2 hover:bg-white hover:text-black "
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          ) : (
            <div className=" absolute  bottom-4 left-28 z-20 flex  h-1/2  w-[65%]   flex-col justify-center text-4xl font-extrabold">
              <p>
                <span className="relative ">
                  {mainString ? (
                    <span>{mainString.getFirstWord}</span>
                  ) : (
                    <span> {special} </span>
                  )}

                  <span className="absolute -bottom-1 left-0 h-1 w-full bg-white"></span>
                </span>

                {mainString ? (
                  <span className="ml-3">
                    {mainString.joiningRemainingWords}
                  </span>
                ) : (
                  <span> {main} </span>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
