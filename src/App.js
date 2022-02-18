import Starter from "./sections/Starter";
import About from "./sections/About";
import Why from "./sections/Why";
import Testimonials from "./sections/Testimonials";
import Blogs from "./sections/Blogs";
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Starter />
      <About />
      <Why />
      <Testimonials />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
