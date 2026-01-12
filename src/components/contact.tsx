import React from "react";

// Define props for the ContactArea component for better type safety
interface ContactAreaProps {
  email: string;
  phoneNumber: string;
  // You can add more props here if needed, like address, social links, etc.
}

const ContactArea: React.FC<ContactAreaProps> = ({ email, phoneNumber }) => {
  return (
    <section className="bg-neutral-900 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="raleway-bold text-3xl font-extrabold text-neutral-100 sm:text-4xl">
          Get In Touch
        </h2>
        <p className="ibm-plex-serif-regular mt-4 text-lg text-neutral-200">
          We'd love to hear from you! Reach out to us via email or phone.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Email Contact */}
          <div className="bg-neutral-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="ibm-plex-mono-bold text-xl font-semibold text-white flex items-center justify-center">
              Email Us
            </h3>
            <p className="ibm-plex-mono-regular mt-4 text-base text-neutral-400">
              For general inquiries and support.
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-4 inline-block text-(--accent-color) font-mono hover:underline underline-offset-2 hover:underline-offset-4 transition-all duration-200 font-medium text-lg"
            >
              {email}
            </a>
          </div>

          {/* Phone Number Contact */}
          <div className="bg-stone-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-white flex items-center justify-center">
              Call Us
            </h3>
            <p className="mt-4 text-base text-gray-500">
              For immediate assistance or questions.
            </p>
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
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
