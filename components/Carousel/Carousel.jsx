import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Carousel({ children, autoPlay, isSpaced }) {
  // Define the common configuration
  let config = {
    loop: true
  };

  if (isSpaced) {
    // Add the breakpoints and slides configuration if isSpaced is true
    config = {
      ...config,
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 5 }
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 }
        }
      },
      slides: { perView: 1 }
    };
  }

  const [sliderRef] = useKeenSlider(config, [
    (slider) => {
      if (!autoPlay) return;

      let timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 2500);
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    }
  ]);

  return (
    <div ref={sliderRef} className="keen-slider bg-red">
      {children}
    </div>
  );
}
