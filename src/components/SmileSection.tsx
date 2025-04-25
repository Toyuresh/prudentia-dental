'use client';
import ImageComparisonSlider from "./slider";

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
          <ImageComparisonSlider
            beforeImage="/images/after1.jpg"
            afterImage="/images/before1.jpg"
          />
          <ImageComparisonSlider
            beforeImage="/images/after2.jpg"
            afterImage="/images/before2.jpg"
          />
          <ImageComparisonSlider
            beforeImage="/images/before3.jpg"
            afterImage="/images/after3.jpg"
          />
          <ImageComparisonSlider
            beforeImage="/images/before4.jpg"
            afterImage="/images/after4.jpg"
          />
        </div>
      </section>
    </div>
  );
}
