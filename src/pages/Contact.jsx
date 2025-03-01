import React from "react";

const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData(event.target); // Get form data
    const formInputData = Object.fromEntries(formData.entries()); // Convert to object
    console.log(formInputData); // Log the form data
  };

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Contact Us
        </h2>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="username" className="block text-lg font-medium text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                autoComplete="off"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-purple-600 focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="off"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-purple-600 focus:outline-none"
              />
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message" className="block text-lg font-medium text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                autoComplete="off"
                placeholder="Enter your message"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-purple-600 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;