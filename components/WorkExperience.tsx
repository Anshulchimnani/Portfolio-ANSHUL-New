import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { workExperience } from "@/lib/data";

export default function WorkExperience() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-container mx-auto">
                <h2 className="text-3xl font-semibold mb-4 text-foreground dark:text-dark-foreground">
                    {workExperience.title}
                </h2>
                <p className="text-lg text-secondary dark:text-dark-secondary mb-8 max-w-3xl leading-relaxed">
                    {workExperience.description}
                </p>

                {/* Experience Highlights */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-dark-foreground">
                        Experience highlights:
                    </h3>
                    <ul className="space-y-3 mb-8">
                        {workExperience.highlights.map((highlight, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-secondary dark:text-dark-secondary"
                            >
                                <span className="text-accent dark:text-dark-accent mt-1">•</span>
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CV Link */}
                <Link
                    href="/cv"
                    className="inline-flex items-center gap-2 text-accent dark:text-dark-accent hover:underline"
                >
                    <span>Read my full CV</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
