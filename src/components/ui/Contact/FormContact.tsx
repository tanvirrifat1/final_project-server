import Image from "next/image";
import React from "react";
import img from "../../../assets/service/Contact us-bro.png";

const FormContact = () => {
  return (
    <div className="mt-10 py-4">
      <div>
        <h1 className="text-4xl text-center font-semibold">
          Have any question ?
        </h1>
        <p className="text-center py-4">
          It is a long established fact that a reader will be distracted content
          of a page when looking.
        </p>
      </div>
      {/*  */}
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-slate-300">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leadi lg:text-5xl">Lets talk!</h2>
            <div className="text-gray-400">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          <Image
            src={img}
            alt=""
            className="w-[400px] h-[380px]"
            width={500}
            height={500}
          />
        </div>
        <form className="space-y-6">
          <div>
            <label className="text-sm">Full name</label>
            <input
              id="name"
              type="text"
              placeholder="name"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              id="email"
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Bio"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-outline rounded-full w-full hover:bg-white hover:text-black hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
