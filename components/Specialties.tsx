import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Specialties() {
    const specialties = [
        {
            title: "Anxiety & Chronic Stress",
            description: "Support for persistent worry, overthinking, panic symptoms, sleep difficulties, and the physical tension that often accompanies anxiety.",
            image: "/miles.webp",
            pos: "15% 50%",
        },
        {
            title: "Trauma & Recovery",
            description: "Trauma-informed therapy for adults impacted by single-incident trauma or long-standing patterns rooted in earlier life experiences, relationships, or chronic stress.",
            image: "/recovery.jpg",
            pos: "80% 25%",
        },
        {
            title: "Burnout & High-Pressure Careers",
            description: "Support for professionals, entrepreneurs, and creatives experiencing emotional exhaustion, perfectionism, and disconnection after years of pushing through stress.",
            image: "/burnout.jpg",
            pos: "center",
        },
    ];

    return (
        <section className="py-20 md:py-24 px-6 md:px-12 max-w-[1920px] mx-auto min-h-screen flex flex-col justify-center">
            <ScrollReveal width="100%">
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-lilac-green text-center mb-12 leading-tight">
                    My Specialties
                </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 h-full">
                {specialties.map((item, index) => (
                    <ScrollReveal key={index} delay={index * 0.2} width="100%" className="h-full">
                        <div className="bg-lilac-beige p-8 pb-12 flex flex-col gap-6 border border-lilac-green h-full min-h-[350px] min-[400px]:min-h-[420px] md:min-h-[450px] lg:min-h-[500px] items-center text-center md:text-left md:items-start relative">
                            <h3 className="text-2xl md:text-1xl text-lilac-green font-serif font-semibold tracking-tight">{item.title}</h3>
                            <p className="text-sm md:text-1x1 text-lilac-green leading-relaxed font-sans font-semibold min-h-[80px]">
                                {item.description}
                            </p>
                            <div className="w-[280px] h-[280px] min-[400px]:w-[312px] min-[400px]:h-[312px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden bg-gray-300 mt-auto mx-auto relative">
                                <Image
                                    src={item.image}
                                    alt={`${item.title} Image`}
                                    fill
                                    className="object-cover"
                                    style={{ objectPosition: item.pos }}
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
