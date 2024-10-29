import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const Slider = () => {
  return (
    <div>
      <AwesomeSlider
        media={[
          {
            source: "/w-1.jpeg",
          },
          {
            source: "/w-2.jpeg",
          },
          {
            source: "/w-3.jpeg",
          },
        ]}
      />
    </div>
  );
};

export default Slider;
