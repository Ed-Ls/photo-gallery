import { Fragment, useRef, useEffect } from "react";
import "./App.css";
import "./locomotive-scroll.css";
import Footer from "./components/Footer/Footer";
import GalleryItem from "./components/GalleryItem/GalleryItem";
import Navbar from "./components/Navbar/Navbar";
import { imageData } from "./data/data";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: "horizontal",
      });
    }
  }, []);

  const images = imageData.map((tupples, index) =>
    tupples.map((url, elementIndex) => (
      <GalleryItem
        key={url}
        src={url}
        index={elementIndex}
        columnOffset={index * 14}
      />
    ))
  );

  return (
    <Fragment>
      <Navbar />
      <div className="main-container">
        <div className="scroll-container" data-scroll-container ref={ref}>
          <div className="content">
            <div className="gallery">
              {images}

              <div className="gallery-helper">
                <div class="mouse_scroll">
                  <div class="mouse">
                    <div class="wheel"></div>
                  </div>
                  <div className="scroll">Scroll</div>
                </div>
              </div>

              <div
                className="behind-text fill"
                data-scroll
                data-scroll-speed={3}
              >
                Travel Beyond Creativity
              </div>
              <div
                className="behind-text outline"
                data-scroll
                data-scroll-speed={3}
              >
                Travel Beyond Creativity
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
