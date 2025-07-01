import NavigationMenu from "@/components/navbar";
import ReviewList from "@/components/review";
import Gallery from "@/components/gallery";
import ContactArea from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";

function App() {
  return (
    <>
      <NavigationMenu />
     <HeroSection />
      <div id="highlights">
        <ReviewList />
        <Gallery />
      </div>
      <div id="contact">
        <ContactArea email="manchahocatrers@gmail.com" phoneNumber="+91 9024319241" />
      </div>
      <Footer />
    </>
  );
}

export default App;
