import { FacebookNeutral, InstagramNeutral } from "@/assets";

function SocialMediaFollow() {
  return (
    <div className="ibm-plex-mono-bold text-center mt-4 flex flex-col items-center justify-center text-sm font-bold">
      Follow Us
      <div className="inline-flex items-center space-x-4">
        <a
          href="https://www.facebook.com/share/1D4yS2JEHM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={FacebookNeutral}
            alt="Facebook"
            className="w-8 h-8"
          />
        </a>
        <a
          href="https://www.instagram.com/manchahocatrers"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* ? Unequal weight and width because original dimensions are different and to balance space */}
          <img src={InstagramNeutral} alt="Instagram" className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}

export default SocialMediaFollow;
