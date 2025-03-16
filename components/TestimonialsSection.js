function TestimonialsSection({ audience }) {
    try {
        const isKids = audience === 'kids';
        
        const testimonials = isKids 
            ? [
                {
                    name: "Sarah Johnson",
                    photo: "https://randomuser.me/api/portraits/women/44.jpg",
                    quote: "My son has transformed from shy to confident in just 3 months. His teachers have noticed improved focus in school too!"
                },
                {
                    name: "Michael Torres",
                    photo: "https://randomuser.me/api/portraits/men/32.jpg",
                    quote: "The instructors are amazing with children. My daughter looks forward to every class and is learning discipline while having fun."
                },
                {
                    name: "Jennifer Williams",
                    photo: "https://randomuser.me/api/portraits/women/63.jpg",
                    quote: "Best decision we made for our twins. They're more respectful at home and have made great friends in a safe environment."
                }
            ]
            : [
                {
                    name: "David Chen",
                    photo: "https://randomuser.me/api/portraits/men/54.jpg",
                    quote: "After six months of training, I'm in the best shape of my life and have skills I can use in the real world. The community here is incredible."
                },
                {
                    name: "Lisa Rodriguez",
                    photo: "https://randomuser.me/api/portraits/women/28.jpg",
                    quote: "I was nervous to start as a complete beginner, but the instructors made me feel welcome. Now I can't imagine my life without these classes."
                },
                {
                    name: "James Wilson",
                    photo: "https://randomuser.me/api/portraits/men/22.jpg",
                    quote: "The training is challenging but the supportive environment keeps me coming back. I've gained confidence both in and out of the dojo."
                }
            ];
            
        return (
            <section data-name="testimonials-section" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">Success Stories from Our Participants</h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index}
                                data-name={`testimonial-${index}`}
                                className="testimonial-card bg-gray-50 p-6 rounded-lg shadow-md"
                            >
                                <div className="flex items-center mb-4">
                                    <img 
                                        src={testimonial.photo} 
                                        alt={testimonial.name} 
                                        className="w-16 h-16 rounded-full mr-4 object-cover"
                                        loading="lazy"
                                    />
                                    <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                                <div className="mt-4 text-yellow-500">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('TestimonialsSection component error:', error);
        reportError(error);
        return null;
    }
}
