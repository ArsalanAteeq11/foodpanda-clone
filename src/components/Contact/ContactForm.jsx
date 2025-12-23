import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 mx-auto">
            {/* Form Section */}
            <div className="flex-1 ">
              <h1 className="text-xl font-bold text-gray-900 mb-8">
                Contact form
              </h1>

              {submitted && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                  Message submitted successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleChange("firstName", e.target.value)
                        }
                        className="w-full h-10 px-3 border border-gray-300 focus:outline-none focus:border-gray-400"
                        required
                      />
                      <span className="text-xs text-blue-600 mt-1 block">
                        First
                      </span>
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleChange("lastName", e.target.value)
                        }
                        className="w-full h-10 px-3 border border-gray-300 focus:outline-none focus:border-gray-400"
                        required
                      />
                      <span className="text-xs text-blue-600 mt-1 block">
                        Last
                      </span>
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full h-10 px-3 border border-gray-300 focus:outline-none focus:border-gray-400"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Your message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="w-full h-32 px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-400 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-8 py-2 rounded-full text-sm transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Panda Image Section */}
            <div className=" flex-1">
              <img
                src="./images/contact.webp"
                alt="Cute Panda"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-6">
        <div className="text-center text-sm text-gray-600">
          <p>Got a question about your order?</p>
          <p>Need help with some of your app features?</p>
          <p>
            Contact{" "}
            <span className="text-blue-600 font-medium">Help Centre</span> via
            app menu.
          </p>
        </div>
      </div>
    </div>
  );
}
