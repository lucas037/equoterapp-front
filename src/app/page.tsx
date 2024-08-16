import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import SlideImg from "./componentes/SlideImg";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <SlideImg />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
