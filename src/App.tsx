import NavigationMenu from "@/components/navbar";
import ReviewList from "@/components/review";
import Gallery from "@/components/gallery";
import ContactArea from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import SubHeroSection from "@/components/subHero";
import clsx from "clsx";

function App() {
  return (
    <>
      <NavigationMenu />
      <div
        className={clsx(
          // ? Background pattern
          "w-full bg-[radial-gradient(circle_at_1px_1px,#D4D4D8_1px,transparent_0px)] bg-[length:25px_25px]",
          "flex flex-col items-center justify-center py-12"
        )}
      >
        <HeroSection />
        <SubHeroSection />
      </div>
      <div id="highlights">
        <ReviewList />
        <Gallery />
      </div>
      <div id="contact">
        <ContactArea
          email="manchahocatrers@gmail.com"
          phoneNumber="+91 9024319241"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
