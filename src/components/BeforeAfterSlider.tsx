
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, className }: BeforeAfterSliderProps) => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      <div className="relative w-full h-[400px]">
        {/* After image (right side) - full width */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{ 
            backgroundImage: `url(${afterImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Before image (left side) - partial width based on slider */}
        <div
          className="absolute top-0 left-0 h-full"
          style={{
            width: `${sliderValue}%`,
            backgroundImage: `url(${beforeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
            borderRight: '3px solid #FFD100',
          }}
        />

        {/* Vertical divider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-autospa-yellow"
          style={{ left: `${sliderValue}%`, transform: 'translateX(-50%)' }}
        />

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-autospa-black/80 text-white px-3 py-1 rounded">
          Before
        </div>
        <div className="absolute bottom-4 right-4 bg-autospa-black/80 text-white px-3 py-1 rounded">
          After
        </div>
      </div>

      {/* Slider control */}
      <div className="px-4 py-3 bg-autospa-black">
        <Slider
          value={[sliderValue]}
          onValueChange={(value) => setSliderValue(value[0])}
          max={100}
          step={1}
          className="py-4"
        />
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
