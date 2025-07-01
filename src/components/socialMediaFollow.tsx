import { UserRoundPlus } from "lucide-react";

function SocialMediaFollow() {
  return (
    <div className="text-center mt-4 flex flex-col items-center justify-center text-sm font-bold">
      <UserRoundPlus/>
      Follow Us On
      <div className="inline-flex items-center space-x-4">
        <a
          href="https://www.facebook.com/manchahocatrers/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="facebook.svg" alt="Facebook" className="w-10 h-10" />
        </a>
        <a
          href="https://www.instagram.com/manchahocatrers/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="instagram.svg"
            alt="Instagram"
            className="w-10 h-10"
          />
        </a>
      </div>
    </div>
  );
}

export default SocialMediaFollow;

