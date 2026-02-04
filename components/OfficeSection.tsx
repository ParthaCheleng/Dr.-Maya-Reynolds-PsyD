import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function OfficeSection() {
    return (
        <section className="bg-lilac-green w-full py-20 px-6 md:px-12 text-lilac-beige overflow-hidden">
            <div className="max-w-[95rem] mx-auto flex flex-col gap-12">

                {/* TOP ROW: Two Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Wide Image - Spans 2 cols */}
                    <div className="md:col-span-2 relative aspect-[16/9] w-full bg-gray-700 overflow-hidden">
                        <ScrollReveal width="100%" className="h-full">
                            <Image
                                src="/office1.jpeg"
                                alt="Office Wide"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </ScrollReveal>
                    </div>

                    {/* Right Portrait Image - Spans 1 col */}
                    <div className="md:col-span-1 relative aspect-[3/4] md:aspect-auto w-full bg-gray-700 overflow-hidden">
                        <ScrollReveal width="100%" delay={0.2} className="h-full">
                            <Image
                                src="/office2.jpeg"
                                alt="Office Detail"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </ScrollReveal>
                    </div>
                </div>

                {/* BOTTOM ROW: Title, Text, Image */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-center mt-8">

                    {/* Title - 1 col */}
                    <div className="md:col-span-1">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-none tracking-tight">
                                Our <br />
                                <span className="italic font-light">Office</span>
                            </h2>
                        </ScrollReveal>
                    </div>

                    {/* Text - 2 cols */}
                    <div className="md:col-span-2 flex flex-col justify-center">
                        <ScrollReveal delay={0.2}>
                            <p className="text-lg font-sans leading-relaxed text-lilac-beige/90">
                                A calm, private space in Santa Monica designed to feel grounded and welcoming. Natural light, comfortable seating, and a quiet atmosphere support reflection and ease throughout our work together.
                                <br /><br />
                                I offer in-person sessions in this office, as well as virtual options. Your comfort, safety, and privacy are prioritized at every step.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Image - 1 col */}
                    <div className="md:col-span-1 relative aspect-square w-full bg-gray-700 overflow-hidden mt-8 md:mt-0">
                        <ScrollReveal delay={0.4} width="100%" className="h-full">
                            <Image
                                src="/insight.webp"
                                alt="Office Detail 2"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </ScrollReveal>
                    </div>

                </div>

            </div>
        </section>
    );
}
