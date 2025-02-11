export default function Services() {
    const features = [
        "Asset Library",
        "Code Preview",
        "Flow Mode",
        "Smart Sync",
        "Auto Layout",
        "Fast Search",
        "Smart Guides",
    ];

    const testimonials = [
        { name: "John Doe", feedback: "Amazing service! Highly recommend it." },
        { name: "Jane Smith", feedback: "Helped streamline my workflow seamlessly." },
        { name: "Carlos Lopez", feedback: "A must-have tool for every developer." },
    ];

    const randomFact = "Did you know? Our platform reduces development time by 40% on average!";

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Our Services</h1>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc pl-5 space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="text-lg">
                            {feature}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">What Our Users Say</h2>
                <div className="space-y-4">
                    {testimonials.map((testimonial, index) => (
                        <blockquote
                            key={index}
                            className="border-l-4 border-blue-500 pl-4 italic"
                        >
                            <p>"{testimonial.feedback}"</p>
                            <cite className="block text-right text-sm font-bold">
                                - {testimonial.name}
                            </cite>
                        </blockquote>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Fun Fact</h2>
                <p className="text-lg">{randomFact}</p>
            </section>
        </div>
    );
}
