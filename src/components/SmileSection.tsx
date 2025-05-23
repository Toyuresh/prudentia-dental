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
            beforeImage="/images/after1.JPG"
            afterImage="/images/before1.JPG"
          />
          <BeforeAfterSlider
            beforeImage="/images/after2.JPG"
            afterImage="/images/before2.JPG"
          />
          <BeforeAfterSlider
            beforeImage="/images/after3.JPG"
            afterImage="/images/before3.JPG"
          />
          <BeforeAfterSlider
            beforeImage="/images/after4.JPG"
            afterImage="/images/before4.JPG"
          />
        </div>
      </section>
    </div>
  );
}
