import { consulting } from "@/lib/data";

export default function Consulting() {
    const scrollToContact = () => {
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-container mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-foreground dark:text-dark-foreground">
                    {consulting.title}
                </h2>

                {/* Services List */}
                <div className="mb-8">
                    <p className="text-lg text-secondary dark:text-dark-secondary mb-4">
                        I&apos;m available for:
                    </p>
                    <ul className="space-y-3 mb-8">
                        {consulting.services.map((service, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-secondary dark:text-dark-secondary"
                            >
                                <span className="text-accent dark:text-dark-accent mt-1">•</span>
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pitch */}
                <p className="text-lg text-secondary dark:text-dark-secondary mb-8 max-w-3xl leading-relaxed">
                    {consulting.pitch}
                </p>

                {/* CTA Button */}
                <a
                    href="#contact"
                    className="inline-block px-6 py-3 bg-accent dark:bg-dark-accent text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                    Get in touch
                </a>
            </div>
        </section>
    );
}
