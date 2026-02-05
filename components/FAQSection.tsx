"use client";

import { useState } from "react";


import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Do you take insurance?",
            answer: "I am an out-of-network provider. I can provide documentation for clients who wish to seek reimbursement through their insurance plans."
        },
        {
            question: "What are your rates?",
            answer: "Session fees vary depending on the type of service. Please contact me directly for current rates and availability."
        },
        {
            question: "Do you have any openings?",
            answer: "Availability changes periodically. The best way to find out is to reach out directly through the contact form."
        }
    ];

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-lilac-cream w-full py-32 md:py-40 px-8 md:px-12">
            <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-start gap-24">

                {/* Left Image Arch */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
                    <ScrollReveal width="100%">
                        <div className="relative w-full max-w-[400px] h-[550px] md:max-w-[650px] md:w-[650px] md:h-[850px] rounded-t-full overflow-hidden">
                            <Image
                                src="/faq.jpg"
                                alt="FAQ Image"
                                fill
                                className="object-cover"
                                style={{ objectPosition: "50% 35%" }}
                            />
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 flex flex-col gap-10 pt-10">
                    <ScrollReveal>
                        <h2 className="text-5xl md:text-6xl font-serif text-lilac-green leading-tight tracking-tight">
                            FAQs
                        </h2>
                    </ScrollReveal>

                    <div className="w-full border-t border-lilac-green/20">
                        {faqs.map((faq, index) => (
                            <ScrollReveal key={index} delay={index * 0.1} width="100%">
                                <div className="border-b border-lilac-green/20">
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full py-6 flex justify-start items-center text-left hover:opacity-70 transition-opacity gap-6"
                                    >
                                        <span className="text-lilac-green shrink-0">
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <line x1="12" y1="5" x2="12" y2="19" className={`origin-center transition-transform duration-300 ease-out ${openIndex === index ? "-rotate-90" : "rotate-0"}`} />
                                            </svg>
                                        </span>
                                        <span className="text-4xl md:text-5xl font-sans text-lilac-green font-normal">
                                            {faq.question}
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-60 opacity-100 pb-6 pl-11" : "max-h-0 opacity-0 pl-11"
                                            }`}
                                    >
                                        <p className="text-xl md:text-2xl text-lilac-green font-sans leading-[2] font-normal">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
