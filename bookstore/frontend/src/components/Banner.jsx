import React from 'react';

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      {/* Left Section */}
      <div className="w-full order-2 md:order-1 md:w-1/2">
        <div className="space-y-12 mt-12 md:mt-32">
          <h1 className="text-4xl font-bold">
            Hello, welcome here to learn something{' '}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-xl font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim.
            Quo fugiat ea labore dolor. Repellat, quis deleniti corrupti
            nostrum reprehenderit dolores provident, cum beatae hic quae
            voluptatem ullam minus.
          </p>

          <label className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 shadow-sm">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="M22 7 13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              required
              className="flex-1 outline-none"
            />
          </label>

          <button className="btn btn-secondary mt-6">Subscribe</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="order-1 w-full md:w-1/2 flex justify-center items-center">
        <img src="/Banner.png" className="w-80 h-80 object-contain" alt="Banner" />
      </div>
    </div>
  );
}

export default Banner;
