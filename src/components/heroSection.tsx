import SocialMediaFollow from "@/components/socialMediaFollow"; // Assuming SocialMediaFollow is in your components folder
import clsx from "clsx";

function HeroSection() {
  // Define your social media links here, as the SocialMediaFollow component expects them

  return (
    <section
      id="hero"
      className={clsx(
        "flex min-h-[90vh] flex-col items-center justify-center relative overflow-hidden",
      )}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Content of your hero section */}
        <img
          src="/manchaho_catrers_logo.svg" // Make sure this path is correct
          alt="Manchaho Catrers Logo"
          className="mb-6 w-32 h-32 md:w-40 md:h-40 rounded-full shadow-xl object-cover z-10" // Increased size, added shadow, z-index
        />
        <h1 className="wix-madefor-display-bold text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 text-center z-10">
          Manchaho Catrers
        </h1>
        <p className="ibm-plex-serif-regular mt-4 text-lg md:text-xl font-light mx-4 md:mx-10 text-center max-w-2xl text-gray-700 z-10">
          Make your special day more special and beautiful with our exquisite
          wedding and engagement services.
        </p>

        {/* Social Media Follow Component */}
        <div className="mt-8 z-10">
          {" "}
          {/* Added margin top and z-index */}
          <SocialMediaFollow />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
