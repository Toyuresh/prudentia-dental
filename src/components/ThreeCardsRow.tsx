'use client';
import Card from "./Card";

const ThreeCardsRow = () => {
    const cardsData = [
        {
            title: "General Dentistry",
            description: "Comprehensive dental care including cleanings, fillings, and preventive treatments to maintain your oral health",
            imageUrl: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80", // Placeholder image
            link: "/services/general",
        },
        {
            title: "Cosmetic Dentistry",
            description: "Transform your smile with our range of cosmetic services including whitening, veneers, and smile makeovers.",
            imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80", // Placeholder image
            link: "/services/cosmetic",
        },
        {
            title: "Surgical",
            description: "Achieve a perfectly aligned smile with our modern orthodontic treatments including braces and clear aligners.",
            imageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80", // Placeholder image
            link: "/services/surgical",
        },
    ];

    return (
        <div className="flex items-center justify-center mx-auto px-4 py-8">
            <div className="   grid grid-cols-1 md:grid-cols-3 gap-6">
                {cardsData.map((card, index) => (
                    <Card index={index}  key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default ThreeCardsRow;