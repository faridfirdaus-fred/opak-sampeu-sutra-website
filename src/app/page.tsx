import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ImageSlider images={["image1.jpg", "image2.png", "image3.png"]} />
      <ProductList />
      <Footer />
    </div>

  );
}
