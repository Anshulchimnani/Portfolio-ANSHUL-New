import { iso27001Content } from "@/lib/data";

export default function ISO27001Section() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-container mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-foreground dark:text-dark-foreground">
          {iso27001Content.title}
        </h2>
        <p className="text-lg text-secondary dark:text-dark-secondary mb-8 max-w-3xl leading-relaxed">
          {iso27001Content.description}
        </p>

        {/* Competencies List */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-dark-foreground">
            Key competencies:
          </h3>
          <ul className="space-y-3">
            {iso27001Content.competencies.map((competency, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-secondary dark:text-dark-secondary"
              >
                <span className="text-accent dark:text-dark-accent mt-1">•</span>
                <span>{competency}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
