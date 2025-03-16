function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };
        
        return (
            <header data-name="header" className="bg-white shadow-md py-4 sticky top-0 z-50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div data-name="logo" className="flex items-center">
                        <i className="fas fa-fist-raised text-blue-700 text-3xl mr-2"></i>
                        <span className="text-xl font-bold text-blue-800">Martial Arts Academy</span>
                    </div>
                    
                    <div data-name="mobile-menu-button" className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                    
                    <nav data-name="desktop-nav" className="hidden md:flex items-center space-x-6">
                        <a href="#about" className="text-gray-700 hover:text-blue-700 transition">About Us</a>
                        <a href="#location" className="text-gray-700 hover:text-blue-700 transition">Location</a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-700 transition">Contact</a>
                        <a href="#signup" className="cta-button bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-medium">
                            Free Trial Class
                        </a>
                    </nav>
                </div>
                
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div data-name="mobile-nav" className="md:hidden bg-white border-t border-gray-200 py-3">
                        <div className="container mx-auto px-4 flex flex-col space-y-3">
                            <a href="#about" className="text-gray-700 hover:text-blue-700 transition py-2">About Us</a>
                            <a href="#location" className="text-gray-700 hover:text-blue-700 transition py-2">Location</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-700 transition py-2">Contact</a>
                            <a href="#signup" className="cta-button bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-medium text-center">
                                Free Trial Class
                            </a>
                        </div>
                    </div>
                )}
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
