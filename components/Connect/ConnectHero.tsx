import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function ConnectHero() {
    return (
        <section className="w-full max-w-[1920px] mx-auto bg-lilac-lavender py-16 md:py-24 lg:py-32 pt-24 md:pt-32 lg:pt-40">
            <div className="w-full px-6 md:px-8 lg:px-24 flex flex-col md:flex-row gap-12 lg:gap-24 relative">

                {/* Left Content: Title, Text, Images */}
                <div className="w-full md:w-1/2 flex flex-col gap-12 z-10">
                    <div className="flex flex-col gap-[4rem] md:gap-[5.5rem] items-start mt-8 md:mt-16 ml-4 md:ml-8 lg:ml-12">
                        <ScrollReveal>
                            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-medium text-lilac-green tracking-tight text-left">
                                Let’s Connect
                            </h1>
                        </ScrollReveal>

                        <div className="space-y-6 max-w-lg">
                            <ScrollReveal delay={0.2}>
                                <p className="text-lg md:text-xl text-lilac-green font-sans font-normal text-left">
                                    Beginning therapy is an important step. If you have questions about my practice or would like to explore working together, you’re welcome to reach out.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3}>
                                <p className="text-lg md:text-xl text-lilac-green font-sans font-normal leading-relaxed text-left">
                                    I offer a brief initial consultation to discuss your concerns, answer questions, and determine whether my approach may be a good fit.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Images - Below Text */}
                    <div className="relative w-[380px] h-[440px] md:w-[500px] md:h-[580px] lg:w-[650px] lg:h-[750px] mt-16 md:mt-16 lg:mt-24 ml-8 md:ml-12 lg:ml-24 self-start">
                        <ScrollReveal width="100%" className="w-full h-full relative">
                            {/* Main Arch Image */}
                            <div className="absolute top-0 left-4 md:left-0 w-[320px] h-[350px] md:w-[380px] md:h-[480px] lg:w-[500px] lg:h-[600px] rounded-t-full overflow-hidden bg-gray-300 z-10">
                                <Image
                                    src="/ccircle.jpg"
                                    alt="Connect Hero Image"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </ScrollReveal>
                    </div>
                </div>

                {/* Right Content: Note Box */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center md:items-start md:mt-48 lg:mt-64">
                    <ScrollReveal delay={0.4} className="w-full max-w-xl lg:max-w-2xl">
                        <div className="bg-lilac-green p-8 md:p-8 lg:p-12 text-lilac-cream text-base md:text-base lg:text-lg font-sans leading-relaxed w-full shadow-lg">
                            <p>
                                <span className="font-bold block mb-4 text-xl md:text-xl lg:text-2xl text-lilac-lavender">Preferred Contact: For privacy reasons, email is the best way to get in touch.</span>
                                contact@drmayareynolds.com
                                <br />
                                I typically respond within 1–2 business days.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
}
