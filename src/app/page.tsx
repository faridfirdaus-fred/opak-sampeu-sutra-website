import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ImageSlider images={["image1.jpg", "image2.png", "image3.png"]} />
      <Footer />
    </div>

  );
}
