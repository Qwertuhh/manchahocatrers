
function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-stone-700 pb-8 mb-8">
        {/* Company Info / Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-stone-100 mb-4 tracking-wide">
            Manchaho Catrers
          </h3>
          <p className="text-stone-400 text-sm leading-relaxed">
          Make your special day more special and beautiful with our exquisite wedding and engagement services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-stone-100 mb-4">
            Quick Links
          </h4>
          <nav>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-stone-100 transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-stone-100 transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-stone-100 transition-colors duration-200"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-stone-100 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Social Media / Contact Short */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-stone-100 mb-4">
            Connect With Us
          </h4>
          <div className="flex justify-center md:justify-start space-x-6 mb-4">
            {/* Replace with actual SVG icons or icon library */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-stone-400 hover:text-stone-100 transition-colors duration-200"
            >
              <svg
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C17.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-stone-400 hover:text-stone-100 transition-colors duration-200"
            >
              <svg
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.75-.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p className="text-stone-400 text-sm">Jaipur, Rajasthan, India</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-stone-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} Your Manchaho Catrers. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
