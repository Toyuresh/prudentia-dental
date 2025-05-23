'use client';
import ThemeCarousel from "./serviceCarousel";

export default function ServiceSection()
{
    return (
        <div>
        <section className="flex bg-white items-center justify-center">
        <div className="container mx-auto px-4 mt-10">
          <h2 className="text-4xl font-bold text-center ">Why Prudentia?</h2>
        </div>
      </section>
      <section
        id="services"
        className="flex bg-white items-center justify-center "
      >
        <ThemeCarousel/>
      </section>
      </div>
    );
}