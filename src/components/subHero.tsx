
function SubHeroSection() {
  return (
    <section className="relative bg-stone-700 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 md:p-12 shadow-2xl border border-gray-700 border-opacity-30 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
      {/* Custom CSS for animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>

      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
        Discover Our Menu
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg text-gray-300 max-w-2xl">
        Explore a world of culinary delights and savor the flavors of our exquisite dishes. From traditional favorites to modern twists, our menu is crafted to tantalize your taste buds and elevate your dining experience.
      </p>

      {/* Stars Section */}
      <div className="flex space-x-2 sm:space-x-2 text-yellow-400">
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
        href="/manchaho_catrers_menu.pdf" // Link to the menu section
        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900"
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