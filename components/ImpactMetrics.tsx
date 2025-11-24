import { impactMetrics } from "@/lib/data";

export default function ImpactMetrics() {
    return (
        <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-container mx-auto">
                <h2 className="text-3xl font-semibold mb-4 text-foreground dark:text-dark-foreground">
                    {impactMetrics.title}
                </h2>
                <p className="text-lg text-secondary dark:text-dark-secondary mb-12 max-w-3xl leading-relaxed">
                    {impactMetrics.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {impactMetrics.metrics.map((metric, index) => (
                        <div key={index} className="text-center md:text-left">
                            <div className="text-4xl md:text-5xl font-bold text-accent dark:text-dark-accent mb-2">
                                {metric.value}
                            </div>
                            <div className="text-secondary dark:text-dark-secondary">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
