function SignupForm({ audience, onAudienceChange }) {
    try {
        const [formData, setFormData] = React.useState({
            fullName: '',
            phone: '',
            email: '',
            interest: audience || 'adults'
        });
        
        const [formStatus, setFormStatus] = React.useState({
            submitted: false,
            error: null,
            loading: false
        });
        
        const handleChange = (e) => {
            const { name, value } = e.target;
            
            if (name === 'interest') {
                onAudienceChange(value);
            }
            
            setFormData({
                ...formData,
                [name]: value
            });
        };
        
        const handleSubmit = async (e) => {
            e.preventDefault();
            
            // Form validation
            if (!formData.fullName || !formData.phone || !formData.email) {
                setFormStatus({
                    ...formStatus,
                    error: 'Please fill out all fields'
                });
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                setFormStatus({
                    ...formStatus,
                    error: 'Please enter a valid email address'
                });
                return;
            }
            
            setFormStatus({
                submitted: false,
                error: null,
                loading: true
            });
            
            try {
                // Simulate form submission
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                setFormStatus({
                    submitted: true,
                    error: null,
                    loading: false
                });
                
                // Reset form
                setFormData({
                    fullName: '',
                    phone: '',
                    email: '',
                    interest: formData.interest
                });
                
            } catch (error) {
                setFormStatus({
                    submitted: false,
                    error: 'There was an error submitting your information. Please try again.',
                    loading: false
                });
                console.error('Form submission error:', error);
            }
        };
        
        return (
            <section data-name="signup-section" className="py-16 bg-blue-50" id="signup">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                        <div className="p-8 md:p-12">
                            <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Fill Out the Form and Start Your Journey Today!</h2>
                            
                            {formStatus.submitted ? (
                                <div data-name="success-message" className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
                                    <p className="font-bold">Thank you for signing up!</p>
                                    <p>We'll contact you shortly to schedule your free trial class.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    {formStatus.error && (
                                        <div data-name="error-message" className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
                                            <p>{formStatus.error}</p>
                                        </div>
                                    )}
                                    
                                    <div className="mb-6">
                                        <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="form-input w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                                            placeholder="Your Full Name"
                                            data-name="fullname-input"
                                            required
                                        />
                                    </div>
                                    
                                    <div className="mb-6">
                                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-input w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                                            placeholder="Your Phone Number"
                                            data-name="phone-input"
                                            required
                                        />
                                    </div>
                                    
                                    <div className="mb-6">
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-input w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
                                            placeholder="Your Email Address"
                                            data-name="email-input"
                                            required
                                        />
                                    </div>
                                    
                                    <div className="mb-8">
                                        <label className="block text-gray-700 font-medium mb-2">Interest</label>
                                        <div className="flex space-x-4">
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="interest"
                                                    value="adults"
                                                    checked={formData.interest === 'adults'}
                                                    onChange={handleChange}
                                                    className="form-radio h-5 w-5 text-blue-600"
                                                    data-name="adults-radio"
                                                />
                                                <span className="ml-2 text-gray-700">Teens/Adults (13+ years)</span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="interest"
                                                    value="kids"
                                                    checked={formData.interest === 'kids'}
                                                    onChange={handleChange}
                                                    className="form-radio h-5 w-5 text-blue-600"
                                                    data-name="kids-radio"
                                                />
                                                <span className="ml-2 text-gray-700">Kids (4-12 years)</span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        disabled={formStatus.loading}
                                        className={`cta-button w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition ${formStatus.loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                                        data-name="submit-button"
                                    >
                                        {formStatus.loading ? (
                                            <span className="flex items-center justify-center">
                                                <i className="fas fa-circle-notch fa-spin mr-2"></i>
                                                Processing...
                                            </span>
                                        ) : 'Submit and Claim Your Free Trial Class'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('SignupForm component error:', error);
        reportError(error);
        return null;
    }
}
