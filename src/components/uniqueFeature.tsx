import Image, { StaticImageData } from 'next/image';

interface TechnologyCardProps {
  image: StaticImageData | string;
  title: string;
  description: string;
}

const TechnologyCard = ({ image, title, description }: TechnologyCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-purple-400 to-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default function TechnologySection() {
  return (
    <section className="bg-gradient-to-b from-purple-100 to-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Unique Features
          </h2>
          <p className="text-lg text-gray-600">
            Holistic dentistry that treats the person—not just the teeth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <TechnologyCard
            image="/images/unique1.png"
            title="Micro-Dentistry. Maximum Precision."
            description="Less drilling, more preserving. Our advanced magnification tech delivers painless, long-lasting results."
          />
          <TechnologyCard
            image="/images/unique2.png"
            title="Tech That Transforms Care"
            description="From cavity detection to sterilization—we use the best:
Caries Probe, Electronic Anesthesia
Digital X-rays (80% less radiation)
Sonic tools & Class B Sterilization"
          />
          <TechnologyCard
            image="/images/unique3.png"
            title="Root Canals, Reimagined"
            description="Save your tooth—no crowns, no stress.
Precise, pain-free, fast healing
High success, even in tough cases"
          />
          <TechnologyCard
            image="/images/unique4.png"
            title="Smile Brighter, Naturally"
            description="Fix chips, gaps, stains & misalignment—minimally."
          />
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-xl md:text-2xl font-semibold text-purple-600">
            Smarter tools. Smoother care.
          </p>
        </div>
      </div>
    </section>
  );
}