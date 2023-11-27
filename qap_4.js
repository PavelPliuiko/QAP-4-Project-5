const MotelCustomer = {
    name: 'John Doe',
    birthDate: new Date("1990-01-01"),
    gender: 'Male',
    roomPreferreces: ['King bad', 'Non-smoking'],
    paymentMethod: 'Cash',
    mailingAdress: {
        street: '3 McNeily St.',
        city: "St. John's",
        province: 'NL',
        postalCode: 'A1B 1Y7'
    },
    phoneNumber: '+1 709 853 45 41',
    checkIn: new Date('2023-11-21'),
    checkOut: new Date('2023-11-25'),
    calculateAge() {
        return Math.abs(new Date(Date.now() - this.birthDate.getTime()).getUTCFullYear() - 1970)
    },
    calculateStayDuration() {
        return Math.round(this.checkOut - this.checkIn / (24 * 60 * 60 * 1000))
    },
    describeCustomer() {
        return `
            ${this.name} is a ${this.calculateAge()} years old ${this.gender.toLowerCase()} customer.
            They have room preferences for ${this.roomPreferences.join(', ')}, and their preferred payment method is ${this.paymentMethod}.
            They can be contacted at ${this.phoneNumber} and their mailing address is ${JSON.stringify(this.mailingAddress)}.
            They are checking in on ${this.checkInDate} and checking out on ${this.checkOutDate}, with a total stay duration of ${this.calculateStayDuration()} days.
        `;
    }
}