// components/photos.ts
import type { Photo } from "react-photo-album";

interface ExtendedPhoto extends Photo {
  title: string;
  description?: string;
}

const photos: ExtendedPhoto[] = [
  {
    src: "hero/Gallery/before-after-chipped-tooth-composite-bonding-smile-makeover-prudentia-pimple-saudagar.jpg",
    width: 1200,
    height: 800,
    alt: "Chipped tooth",
    title: "Chipped Tooth Repair",
    description: "before-after-chipped-tooth-composite-bonding-smile-makeover-prudentia-pimple-saudagar"
  },
  {
    src: "hero/Gallery/cosmetic-bonding-chipped-tooth-before-after-aesthetic-repair-prudentia-pimple-saudagar.jpg",
    width: 1000,
    height: 667,
    alt: "Cosmetic bonding chipped-tooth",
    title: "Cosmetic bonding chipped-tooth",
    description: "cosmetic-bonding-chipped-tooth-before-after-aesthetic-repair-prudentia-pimple-saudagar"
  },
  {
    src: "hero/Gallery/non-invasive-chipped-tooth-repair-composite-contouring-prudentia-dental-care-pune.jpg",
    width: 1200,
    height: 800,
    alt: "Non Invasive chipped tooth",
    title: "Non Invasive chipped tooth",
    description: "non-invasive-chipped-tooth-repair-composite-contouring-prudentia-dental-care-pune"
  },
  {
    src: "hero/Gallery/reattached-broken-tooth-fragment-natural-repair-prudentia-micro-dental-care-pimple-saudagar.jpg",
    width: 1200,
    height: 800,
    alt: "Reattached broken tooth",
    title: "Reattached broken tooth",
    description: "reattached-broken-tooth-fragment-natural-repair-prudentia-micro-dental-care-pimple-saudagar"
  },
  {
    src: "hero/Gallery/conservative-composite-bonding-discolored-front-tooth-prudentia-pune.jpg",
    width: 1000,
    height: 667,
    alt: "Conservative composite bonding",
    title: "Conservative composite bonding",
    description: "conservative-composite-bonding-discolored-front-tooth-prudentia-pune"
  },
  {
    src: "hero/Gallery/minimally-invasive-composite-discolored-tooth-restoration-prudentia-pimple-saudagar.jpg",
    width: 1200,
    height: 800,
    alt: "Minimally invasive composite discolored tooth",
    title: "Minimally invasive composite discolored tooth",
    description: "minimally-invasive-composite-discolored-tooth-restoration-prudentia-pimple-saudagar"
  },
  {
    src: "hero/Gallery/single-day-smile-makeover-chipped-teeth-gap-closure-prudentia-pimple-saudagar.jpg",
    width: 1200,
    height: 800,
    alt: "Single day smile makeover",
    title: "Single day smile makeover",
    description: "single-day-smile-makeover-chipped-teeth-gap-closure-prudentia-pimple-saudagar"
  },

  {
    src: "hero/Gallery/cosmetic-composite-fillings-front-teeth-gap-closure-prudentia-micro-dental-care-pimple-saudagar.jpg",
    width: 1200,
    height: 800,
    alt: "Cosmetic composite fillings",
    title: "Cosmetic composite fillings",
    description: "cosmetic-composite-fillings-front-teeth-gap-closure-prudentia-micro-dental-care-pimple-saudagar"
  },
    {
    src: "hero/Gallery/diastema-closure-composite-gap-filling-front-teeth-smile-prudentia-pimple-saudagar.jpg",
    width: 1200,
    height: 800,
    alt: "Diastema closure composite gap filling",
    title: "Diastema closure composite gap filling",
    description: "diastema-closure-composite-gap-filling-front-teeth-smile-prudentia-pimple-saudagar"
  },
  {
    src: "hero/Gallery/cosmetic-bonding-crooked-front-teeth-correction-smile-prudentia-pimple-saudagar.jpg",
    width: 1000,
    height: 667,
    alt: "Cosmetic bonding crooked",
    title: "Cosmetic bonding crooked",
    description: "cosmetic-bonding-crooked-front-teeth-correction-smile-prudentia-pimple-saudagar"
  },
  {
    src: "hero/Gallery/same-day-composite-veneers-stained-front-teeth-correction-prudentia-pimple-saudagar.jpg",
    width: 1000,
    height: 667,
    alt: "Same day composite veneers",
    title: "Same day composite veneers",
    description: "same-day-composite-veneers-stained-front-teeth-correction-prudentia-pimple-saudagar"
  },
  {
    src: "hero/Gallery/post-braces-smile-makeover-aligned-front-teeth-polishing-composite-prudentia-pimple-saudagar.jpg",
    width: 1000,
    height: 667,
    alt: "Post braces smile makeover",
    title: "Post braces smile makeover",
    description: "post-braces-smile-makeover-aligned-front-teeth-polishing-composite-prudentia-pimple-saudagar"
  },
   {
    src: "hero/Gallery/front-teeth-gap-closure-decay-repair-cosmetic-fillings-smile-makeover-prudentia-pimple-saudagar.jpg",
    width: 1000,
    height: 667,
    alt: "Front teeth gap closure",
    title: "Front teeth gap closure",
    description: "front-teeth-gap-closure-decay-repair-cosmetic-fillings-smile-makeover-prudentia-pimple-saudagar"
  },    {
    src: "hero/Gallery/front-tooth-decay-cosmetic-composite-filling-restoration-prudentia-dental-pimple-saudagar.jpg",
    width: 1000,
    height: 667,
    alt: "Front tooth decay cosmetic",
    title: "Front tooth decay cosmetic",
    description: "front-tooth-decay-cosmetic-composite-filling-restoration-prudentia-dental-pimple-saudagar"
  },   {
    src: "hero/Gallery/cosmetic-fillings-front-teeth-gap-closure-smile-makeover-prudentia-dental-pimple-saudagar.jpg",
    width: 1000,
    height: 667,
    alt: "Cosmetic fillings",
    title: "Cosmetic-fillings",
    description: "cosmetic-fillings-front-teeth-gap-closure-smile-makeover-prudentia-dental-pimple-saudagar"
  },    {
    src: "hero/Gallery/tooth-decay-cosmetic-composite-filling-restoration-prudentia-dental-pimple-saudagar.jpg",
    width: 1000,
    height: 667,
    alt: "Tooth decay",
    title: "Tooth decay",
    description: "tooth-decay-cosmetic-composite-filling-restoration-prudentia-dental-pimple-saudagar"
  },   {
    src: "hero/Gallery/cosmetic-fillings-front-teeth-gap-closure-smile-makeover-prudentia-dental-pimple-saudagar.jpg",
    width: 1000,
    height: 667,
    alt: "Cosmetic fillings",
    title: "Cosmetic fillings",
    description: "cosmetic-fillings-front-teeth-gap-closure-smile-makeover-prudentia-dental-pimple-saudagar"
  },    {
    src: "hero/Gallery/front-tooth-gap-missing-tooth-fiber-bridge-composite-filling-smile-makeover-prudentia-dental-pimple-saudagar.jpg",
    width: 1000,
    height: 667,
    alt: "Front toothgap",
    title: "Front toothgap",
    description: "front-tooth-gap-missing-tooth-fiber-bridge-composite-filling-smile-makeover-prudentia-dental-pimple-saudagar"
  },   
  {
    src: "hero/Gallery/post-braces-gap-filling-cosmetic-polishing-smile-enhancement-prudentia-pimple-saudagar.jpg",
    width: 1000,
    height: 667,
    alt: "Post braces gap filling",
    title: "Post braces gap filling",
    description: "post-braces-gap-filling-cosmetic-polishing-smile-enhancement-prudentia-pimple-saudagar"
  },    
  {
    src: "hero/Gallery/front-tooth-missing-fiber-reinforced-bridge-no-drill-smile-restoration-prudentia-pimple-saudagar.jpg",
    width: 1000,
    height: 667,
    alt: "Front tooth missing fiber",
    title: "Front tooth missing fiber",
    description: "front-tooth-missing-fiber-reinforced-bridge-no-drill-smile-restoration-prudentia-pimple-saudagar"
  },
  {
    src: "hero/Gallery/tooth-onlay-before-after-conservative-restoration-prudentia-dental-pimple-saudagar.jpg",
    width: 1000,
    height: 667,
    alt: "Tooth onlay",
    title: "Tooth onlay",
    description: "tooth-onlay-before-after-conservative-restoration-prudentia-dental-pimple-saudagar"
  },
  // Add more images with consistent structure...
];

export type { ExtendedPhoto };
export default photos;
