function BenefitsSection({ audience }) {
    try {
        const isKids = audience === 'kids';
        
        const benefits = isKids 
            ? [
                { icon: "fa-brain", title: "Improve Focus & Discipline", description: "Our structured classes help children develop longer attention spans and self-discipline." },
                { icon: "fa-smile", title: "Build Confidence", description: "Watch your child's self-esteem grow as they master new skills and overcome challenges." },
                { icon: "fa-child", title: "Fun Yet Structured Classes", description: "We balance enjoyable activities with proper technique and respectful behavior." }
            ]
            : [
                { icon: "fa-dumbbell", title: "Optimize Physical Fitness", description: "Improve strength, flexibility, and cardiovascular health through comprehensive training." },
                { icon: "fa-shield-alt", title: "Professional Self-Defense Training", description: "Learn practical skills from certified instructors with real-world experience." },
                { icon: "fa-users", title: "Ego-Free & Supportive Community", description: "Train in a respectful environment where everyone helps each other improve." }
            ];
            
        return (
            <section data-name="benefits-section" className="py-16 bg-gray-50" id="about">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">Why Choose Us?</h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div 
                                key={index}
                                data-name={`benefit-item-${index}`}
                                className="benefit-item bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
                            >
                                <div className="text-blue-600 text-4xl mb-4">
                                    <i className={`fas ${benefit.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('BenefitsSection component error:', error);
        reportError(error);
        return null;
    }
}
