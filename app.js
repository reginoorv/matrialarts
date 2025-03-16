function App() {
    try {
        const [audience, setAudience] = React.useState('adults');
        
        const handleAudienceChange = (newAudience) => {
            setAudience(newAudience);
        };
        
        return (
            <div data-name="app-container">
                <Header />
                <main>
                    <HeroSection audience={audience} />
                    <BenefitsSection audience={audience} />
                    <TestimonialsSection audience={audience} />
                    <SignupForm audience={audience} onAudienceChange={handleAudienceChange} />
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return (
            <div className="p-8 text-center">
                <h1 className="text-2xl text-red-600 mb-4">Something went wrong</h1>
                <p>We're sorry, but there was an error loading the page. Please try refreshing.</p>
            </div>
        );
    }
}

// Error reporting function is already defined internally
function reportErrorToAnalytics(error) {
    console.error('Reporting error to analytics service:', error);
    // In a real app, this would send the error to an analytics service
}

// Render the app
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
