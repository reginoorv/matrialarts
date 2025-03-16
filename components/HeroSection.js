function HeroSection({ audience }) {
    try {
        const isKids = audience === 'kids';
        
        const headline = isKids 
            ? "Build Your Child's Discipline & Confidence in a Fun Environment!"
            : "Boost Your Confidence, Health, & Self-Defense Skills!";
            
        const subheadline = isKids
            ? "Our kid-friendly classes provide a safe, supportive environment where children can grow and thrive - no pressure, just fun learning!"
            : "Join our supportive community and learn valuable skills in a pressure-free, enjoyable atmosphere designed for all experience levels.";
            
        const imageUrl = isKids
            ? "https://images.unsplash.com/photo-1544717305-996b815c338c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            : "https://images.unsplash.com/photo-1555597673-b21d5c3c8c9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";
            
        return (
            <section data-name="hero-section" className="hero-gradient text-white">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="flex flex-col md:flex-row items-center">
                        <div data-name="hero-content" className="hero-content md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{headline}</h1>
                            <p className="text-lg md:text-xl mb-8 text-gray-100">{subheadline}</p>
                            <a 
                                href="#signup" 
                                data-name="hero-cta"
                                className="cta-button inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg"
                            >
                                Claim Your Free Trial Class
                            </a>
                        </div>
                        <div data-name="hero-image" className="md:w-1/2">
                            <img 
                                src={imageUrl} 
                                alt={isKids ? "Kids practicing martial arts" : "Adults in martial arts class"} 
                                className="rounded-lg shadow-xl w-full h-auto object-cover"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('HeroSection component error:', error);
        reportError(error);
        return null;
    }
}
