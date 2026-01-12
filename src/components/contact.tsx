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
          Get In <span className="text-(--accent-color)">Touch</span>
        </h2>
        <p className="ibm-plex-serif-regular mt-4 text-lg text-neutral-200">
          We'd love to hear from you! Reach out to us via email or phone.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Email Contact */}
          <div className="bg-neutral-800 rounded-lg py-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="ibm-plex-mono-bold text-xl font-semibold text-white flex items-center justify-center">
              Email Us
            </h3>
            <div className="bg-neutral-900 -rotate-2 w-full flex flex-col items-start px-2 my-4">
              <p className="ibm-plex-mono-regular text-base text-neutral-400">
                For general inquiries and support.
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-1 inline-block text-neutral-200 font-mono hover:underline underline-offset-2 hover:underline-offset-4 transition-all duration-200 font-medium text-lg"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Phone Number Contact */}
          <div className="bg-neutral-800 rounded-lg py-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="ibm-plex-mono-bold text-xl font-semibold text-white flex items-center justify-center">
              Call Us
            </h3>
            <div className="bg-neutral-900 -rotate-2 w-full flex flex-col items-start px-2 my-4">
              <p className="ibm-plex-mono-regular text-base text-neutral-400">
                For immediate assistance or questions.
              </p>
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="mt-1 inline-block text-neutral-200 font-mono hover:underline underline-offset-2 hover:underline-offset-4 transition-all duration-200 font-medium text-lg"
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
