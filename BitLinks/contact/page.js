"use client";
import React from "react";

const Page = () => {
  return (
    <div className="mx-auto max-w-lg my-6 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">Reach Us through</h1>

      <div className="flex flex-col gap-4">

        {/* Email Row */}
        <div className="flex items-center justify-between bg-purple-100 p-3 rounded-lg">
          <span className="font-medium">Email:</span>

          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base">ibrahimbaig2001@gmail.com</span>

            <a href="mailto:ibrahimbaig2001@gmail.com">
              <lord-icon
                class="cursor-pointer"
                src="https://cdn.lordicon.com/wpsdctqb.json"
                trigger="hover"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
            </a>
          </div>
        </div>

        {/* Phone Row */}
        <div className="flex items-center justify-between bg-purple-100 p-3 rounded-lg">
          <span className="font-medium">Phone:</span>

          <div className="flex items-center gap-2">
            <span className="text-sm sm:text-base">+91 8919610853</span>

            <a href="tel:+918919610853">
              <lord-icon
                class="cursor-pointer"
                src="https://cdn.lordicon.com/wtywrnoz.json"
                trigger="hover"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
