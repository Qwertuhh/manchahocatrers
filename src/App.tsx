import NavigationMenu from "@/components/navbar";
import ReviewList from "@/components/review";
import Gallery from "@/components/gallery";
import ContactArea from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import SubHeroSection from "./components/subHero";

function App() {
  return (
    <>
      <NavigationMenu />
      <HeroSection />
      <div className=" bg-gradient-to-br from-stone-900 to-stone-700 flex items-center justify-center p-4 font-sans">
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
