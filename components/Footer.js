function Footer() {
    try {
        const currentYear = new Date().getFullYear();
        
        return (
            <footer data-name="footer" className="bg-gray-800 text-white pt-12 pb-6" id="contact">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div data-name="footer-contact">
                            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                            <p className="mb-2">
                                <i className="fas fa-map-marker-alt mr-2 text-blue-400"></i>
                                123 Martial Arts Way, Fitness City, FC 12345
                            </p>
                            <p className="mb-2">
                                <i className="fas fa-phone mr-2 text-blue-400"></i>
                                (555) 123-4567
                            </p>
                            <p className="mb-4">
                                <i className="fas fa-envelope mr-2 text-blue-400"></i>
                                info@martialartsdojo.com
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition" aria-label="Facebook">
                                    <i className="fab fa-facebook-f text-xl"></i>
                                </a>
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition" aria-label="Instagram">
                                    <i className="fab fa-instagram text-xl"></i>
                                </a>
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition" aria-label="YouTube">
                                    <i className="fab fa-youtube text-xl"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div data-name="footer-hours" id="location">
                            <h3 className="text-xl font-bold mb-4">Hours & Location</h3>
                            <p className="mb-2"><span className="font-semibold">Monday-Friday:</span> 9:00 AM - 9:00 PM</p>
                            <p className="mb-2"><span className="font-semibold">Saturday:</span> 10:00 AM - 6:00 PM</p>
                            <p className="mb-2"><span className="font-semibold">Sunday:</span> 12:00 PM - 5:00 PM</p>
                            <p className="mt-4">
                                <a href="#" className="text-blue-400 hover:underline">
                                    <i className="fas fa-directions mr-2"></i>Get Directions
                                </a>
                            </p>
                        </div>
                        
                        <div data-name="footer-classes">
                            <h3 className="text-xl font-bold mb-4">Our Classes</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Karate</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Brazilian Jiu-Jitsu</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Kickboxing</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Self-Defense</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition">Kids Programs</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p data-name="copyright" className="text-sm text-gray-400 mb-4 md:mb-0">
                                &copy; {currentYear} Martial Arts Academy. All rights reserved.
                            </p>
                            <div data-name="footer-links" className="flex space-x-4 text-sm text-gray-400">
                                <a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a>
                                <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
