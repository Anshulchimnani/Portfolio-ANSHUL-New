import { expertise } from "@/lib/data";

export default function Expertise() {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-container mx-auto">
                <h2 className="text-3xl font-semibold mb-12 text-foreground dark:text-dark-foreground">
                    What I Do
                </h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {expertise.map((skill, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-accent dark:hover:border-dark-accent transition-colors"
                        >
                            <div className="text-4xl mb-4">{skill.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-dark-foreground">
                                {skill.title}
                            </h3>
                            <p className="text-secondary dark:text-dark-secondary">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
