'use client';
import BeforeAfterSlider from "./slider";


export default function SmileSection() {
  return (
    <div>
      <section id="smile" className="py-2">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Smile Transformations
          </h2>
        </div>
      </section>
      {/* *Before and after Slider */}
      <section className="py-1 px-4 bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <BeforeAfterSlider
            beforeImage="hero/Beforeaftersliders/chippedtooth/drill-free-front-tooth-repair-after-composite-smile-restore-prudentia-dental-pune.jpg"
            afterImage="hero/Beforeaftersliders/chippedtooth/drill-free-front-tooth-repair-before-composite-smile-restore-prudentia-dental-pune.jpg"
          />
          <BeforeAfterSlider
            beforeImage="hero/Beforeaftersliders/spaces/instant-front-tooth-gap-closure-after-smile-makeover-prudentia-pimple-saudagar.jpg"
            afterImage="hero/Beforeaftersliders/spaces/instant-front-tooth-gap-closure-before-smile-makeover-prudentia-pimple-saudagar.jpg"
          />
          <BeforeAfterSlider
            beforeImage="hero/Beforeaftersliders/smilemakeover/cosmetic-teeth-cleaning-polishing-one-day-smile-refresh-cosmetic-smile-makeover-after-prudentia-micro-dental-pimple-saudagar.JPG.JPG"
            afterImage="hero/Beforeaftersliders/smilemakeover/cosmetic-teeth-cleaning-polishing-one-day-smile-refresh-cosmetic-smile-makeover-before-prudentia-micro-dental-pimple-saudagar.jpg"
          />
          <BeforeAfterSlider
            beforeImage="hero/Beforeaftersliders/crookedteeth/crooked-front-teeth-aligned-one-day-cosmetic-fix-after-prudentia-dental-pimple-saudagar.jpg"
            afterImage="hero/Beforeaftersliders/crookedteeth/crooked-front-teeth-aligned-one-day-cosmetic-fix-before-prudentia-dental-pimple-saudagar.jpg"
          />
        </div>
      </section>
    </div>
  );
}
