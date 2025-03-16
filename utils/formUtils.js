function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhone(phone) {
    // Basic phone validation - can be enhanced for specific formats
    const regex = /^[0-9\-\+\(\)\s]{7,20}$/;
    return regex.test(phone);
}

function formatPhoneNumber(phoneNumberString) {
    try {
        const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return phoneNumberString;
    } catch (error) {
        console.error('Error formatting phone number:', error);
        return phoneNumberString;
    }
}
