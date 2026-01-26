"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");

  const generate = async () => {
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      });

      const result = await res.json();
      alert(result.message);

      if (result.success) {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
      }
    } catch (err) {
      console.log(err);
      alert("Server error!");
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-17 p-10 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-center text-2xl">Generate your short URLs</h1>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={url}
          className="px-4 py-2 focus:outline-purple-600 gap-5 rounded-md"
          placeholder="Enter Your URL"
          onChange={(e) => seturl(e.target.value)}
        />

        <input
          type="text"
          value={shorturl}
          className="px-4 py-2 focus:outline-purple-600 gap-5 rounded-md"
          placeholder="Enter a preferred alias of the URL"
          onChange={(e) => setshorturl(e.target.value)}
        />

        <button
          className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white my-3"
          onClick={generate}
        >
          Generate
        </button>
      </div>

      {generated && (
        <code>
          <span className="font-bold text-lg">Your Link:{" "}</span>
          <Link target="_blank" href={generated} className="text-blue-600 underline">
            {generated}
          </Link>
        </code>
      )}
    </div>
  );
};

export default Shorten;
