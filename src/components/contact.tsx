import React from 'react';

// Define props for the ContactArea component for better type safety
interface ContactAreaProps {
  email: string;
  phoneNumber: string;
  // You can add more props here if needed, like address, social links, etc.
}

const ContactArea: React.FC<ContactAreaProps> = ({ email, phoneNumber }) => {
  return (
    <section className="bg-stone-900 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          We'd love to hear from you! Reach out to us via email or phone.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Email Contact */}
          <div className="bg-stone-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-white flex items-center justify-center">
              <svg
                className="h-6 w-6 mr-3 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 6V5a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2h6.14m1.94 0L21 14a2 2 0 002-2V7a2 2 0 00-2-2h-3"
                />
              </svg>
              Email Us
            </h3>
            <p className="mt-4 text-base text-gray-500">
              For general inquiries and support.
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-4 inline-block text-green-500 hover:text-green-700 font-medium text-lg transition-colors duration-200"
            >
              {email}
            </a>
          </div>

          {/* Phone Number Contact */}
          <div className="bg-stone-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-white flex items-center justify-center">
              <svg
                className="h-6 w-6 mr-3 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us
            </h3>
            <p className="mt-4 text-base text-gray-500">
              For immediate assistance or questions.
            </p>
            <a
              href={`tel:${phoneNumber.replace(/\s/g, '')}`}
              className="mt-4 inline-block text-green-500 hover:text-green-700 font-medium text-lg transition-colors duration-200"
            >
              {phoneNumber}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;

