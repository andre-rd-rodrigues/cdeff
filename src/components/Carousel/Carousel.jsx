import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

export default function Carousel({
  children,
  autoPlay,
  isSpaced,
  timeoutProp = 2500
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Define the common configuration
  let config = {
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
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

  const [sliderRef, instanceRef] = useKeenSlider(config, [
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
        }, timeoutProp);
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

  // children need to have this className: "keen-slider__slide"

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {children}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys()
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
