import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xdabedre", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <div className="bg-green-900 py-12 px-6">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-2">
          Contact Us
        </h2>
        <p className="text-center text-white text-sm mb-8">
          Get in touch for a free quote
        </p>

        {submitted ? (
          <div className="text-center text-white text-lg">
            <p>Thanks for getting in touch! Dan will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="rounded p-3 bg-green-800 text-white placeholder-green-300 border border-green-700 focus:outline-none focus:border-yellow-400"
            />
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              required
              className="rounded p-3 bg-green-800 text-white placeholder-green-300 border border-green-700 focus:outline-none focus:border-yellow-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              pattern="[0-9]{10,11}"
              title="Please enter a valid UK phone number"
              className="rounded p-3 bg-green-800 text-white placeholder-green-300 border border-green-700 focus:outline-none focus:border-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="rounded p-3 bg-green-800 text-white placeholder-green-300 border border-green-700 focus:outline-none focus:border-yellow-400"
            />
            <select
              name="service"
              required
              className="rounded p-3 bg-green-800 text-white border border-green-700 focus:outline-none focus:border-yellow-400"
            >
              <option value="">Select a Service</option>
              <option value="Lawn Mowing">Lawn Mowing</option>
              <option value="Weed Removal">Weed Removal</option>
              <option value="Weed Removal + Mow">Weed Removal + Mow</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Describe your job..."
              rows="4"
              className="rounded p-3 bg-green-800 text-white placeholder-green-300 border border-green-700 focus:outline-none focus:border-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-green-900 font-bold py-3 rounded hover:bg-yellow-300 transition-colors"
            >
              Send Enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
