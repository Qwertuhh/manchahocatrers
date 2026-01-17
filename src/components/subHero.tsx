/**
 * Copyright (c) 2026 Arihant Jain, Qwertuhh
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import clsx from "clsx";

function SubHeroSection() {
  return (
    <section
      id="subhero"
      className="relative bg-neutral-100/40 bg-opacity-80 m-4 md:max-w-5xl text-neutral-900 backdrop-blur-lg rounded-md p-8 md:p-12 flex flex-col items-center justify-center text-center space-y-6 border-2 border-neutral-200"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 leading-tight wix-madefor-display-bold">
        Discover Our <span className="text-(--accent-color)">Menu</span>
      </h2>
      {/* Description */}
      <p className="noto-serif-regular text-base md:text-lg text-neutral-900 max-w-4xl ">
        Explore a world of culinary delights and savor the flavors of our
        exquisite dishes. From traditional favorites to modern twists, our menu
        is crafted to tantalize your taste buds and elevate your dining
        experience.
      </p>
      {/* Stars Section */}
      <div className="flex space-x-2 sm:space-x-2 text-yellow-400 transition-all duration-300 ease-in-out cursor-pointer">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-10 h-10 sm:w-12 sm:h-12 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.917 1.48-8.279L.001 9.306l8.332-1.151L12 .587z" />
          </svg>
        ))}
      </div>
      {/* Menu Button */}
      <a
        href="/menu"
        className={clsx(
          "ibm-plex-mono-bold inline-flex items-center justify-center px-8 py-3",
          "text-base font-medium rounded-full shadow-lg transform transition-all duration-300 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:ring-offset-gray-900",
          "hover:scale-105",
          // Gradient + text colors
          "text-neutral-900",
          "bg-gradient-to-r from-yellow-200 to-(--accent-color)",
          // ? Little darker version of yelow-200 has been set
          "hover:from-[#f5d96c] hover:to-(--acent-hover)",
          // Border accent
          "border border-(--accent-color) hover:border-(--acent-hover)"
        )}
      >
        View Our Menu
        <svg
          className="ml-2 -mr-1 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </a>
    </section>
  );
}

export default SubHeroSection;
