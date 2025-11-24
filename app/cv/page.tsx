import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CVPage() {
    return (
        <>
            <Header />
            <main className="pt-24 pb-20 px-6 min-h-screen">
                <div className="max-w-container mx-auto">
                    {/* Back Link */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-accent dark:text-dark-accent hover:underline mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to home</span>
                    </Link>

                    {/* Header with Download Button */}
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-4xl font-semibold text-foreground dark:text-dark-foreground">
                            Curriculum Vitae
                        </h1>
                        <a
                            href="/cv.pdf"
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 bg-accent dark:bg-dark-accent text-white rounded-lg hover:opacity-90 transition-opacity"
                        >
                            <Download className="w-4 h-4" />
                            <span>Download PDF</span>
                        </a>
                    </div>

                    {/* CV Content */}
                    <div className="space-y-12">
                        {/* Summary */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-dark-foreground">
                                Professional Summary
                            </h2>
                            <p className="text-secondary dark:text-dark-secondary leading-relaxed">
                                Data scientist and machine learning engineer with expertise in
                                building production-ready ML models, designing scalable data
                                pipelines, and implementing enterprise-grade security standards
                                (ISO 27001). Passionate about turning complex datasets into
                                actionable insights that drive business value.
                            </p>
                        </section>

                        {/* Skills */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-dark-foreground">
                                Technical Skills
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold mb-2 text-foreground dark:text-dark-foreground">
                                        Programming & Tools
                                    </h3>
                                    <p className="text-secondary dark:text-dark-secondary">
                                        Python, SQL, R, Git, Docker, Jupyter
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2 text-foreground dark:text-dark-foreground">
                                        Data Science & ML
                                    </h3>
                                    <p className="text-secondary dark:text-dark-secondary">
                                        Scikit-learn, TensorFlow, Pandas, NumPy, Matplotlib, Seaborn
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2 text-foreground dark:text-dark-foreground">
                                        Data Engineering
                                    </h3>
                                    <p className="text-secondary dark:text-dark-secondary">
                                        ETL Pipelines, Data Warehousing, PostgreSQL, MongoDB
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2 text-foreground dark:text-dark-foreground">
                                        Security & Compliance
                                    </h3>
                                    <p className="text-secondary dark:text-dark-secondary">
                                        ISO 27001, GDPR, DPDP, Risk Assessment, ISMS
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Experience */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-dark-foreground">
                                Experience
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground dark:text-dark-foreground">
                                        Data Scientist / ML Engineer
                                    </h3>
                                    <p className="text-secondary dark:text-dark-secondary mb-2">
                                        Dublin, Ireland
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-secondary dark:text-dark-secondary">
                                        <li>
                                            Built ML models for healthcare cost prediction with 92%
                                            accuracy
                                        </li>
                                        <li>
                                            Designed and implemented ETL pipelines processing 100K+
                                            records/day
                                        </li>
                                        <li>
                                            Implemented ISO 27001 compliant data systems and security
                                            controls
                                        </li>
                                        <li>
                                            Deployed NLP applications to production using Django and
                                            Heroku
                                        </li>
                                        <li>
                                            Conducted statistical analysis on environmental datasets
                                            (CO2 emissions)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-dark-foreground">
                                Education
                            </h2>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground dark:text-dark-foreground">
                                    Data Science & Machine Learning
                                </h3>
                                <p className="text-secondary dark:text-dark-secondary">
                                    Relevant coursework in statistics, machine learning, data
                                    engineering, and information security
                                </p>
                            </div>
                        </section>

                        {/* Certifications */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-dark-foreground">
                                Certifications
                            </h2>
                            <ul className="space-y-2 text-secondary dark:text-dark-secondary">
                                <li>• ISO 27001 Information Security Management</li>
                                <li>• Data Science & Machine Learning (Various Platforms)</li>
                            </ul>
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-dark-foreground">
                                Notable Projects
                            </h2>
                            <ul className="space-y-3 text-secondary dark:text-dark-secondary">
                                <li>
                                    <strong className="text-foreground dark:text-dark-foreground">
                                        Healthcare Insurance Cost Prediction:
                                    </strong>{" "}
                                    ML model for predicting out-of-pocket healthcare costs
                                </li>
                                <li>
                                    <strong className="text-foreground dark:text-dark-foreground">
                                        CO2 Emissions Analysis:
                                    </strong>{" "}
                                    Statistical analysis and visualization of environmental data
                                </li>
                                <li>
                                    <strong className="text-foreground dark:text-dark-foreground">
                                        Sentiment Analysis App:
                                    </strong>{" "}
                                    NLP application deployed on Heroku using Django
                                </li>
                                <li>
                                    <strong className="text-foreground dark:text-dark-foreground">
                                        Ireland Tourist Destinations Scraper:
                                    </strong>{" "}
                                    Web scraping and geospatial visualization project
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
