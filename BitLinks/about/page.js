"use client";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      
      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-3xl w-full shadow-lg p-6 rounded-lg flex flex-col gap-4 bg-white">
          <h2 className="font-bold text-2xl text-center">Welcome</h2>

          <p className="text-center">
            BitLinks is a useful tool for shortening your regularly visited URLs based on your preferred keywords.
          </p>

          <p className="text-center">
            This BitLink website is built using Next.js and is available on GitHub and is free to use. We understand
            the pain of long URLs and frustrating logins, so we made it available to everyone without asking for your details.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-400 text-white py-3 text-center">
        <p>&copy; 2026 BitLinks. All rights reserved. Free for all</p>
      </footer>

    </div>
  );
};

export default Page;
