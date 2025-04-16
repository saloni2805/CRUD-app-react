import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] bg-base-100 ">
      <div className="bg-base-300 shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-5xl font-extrabold text-center text-white mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="textarea textarea-bordered w-full"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>

        <div className="mt-6 flex flex-col items-start justify-center gap-2">
          <p className="text-white">
            <strong>Email:</strong> support@crudapp.com
          </p>
          <p className="text-white">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="text-white">
            <strong>Address:</strong> 123 CRUD Street, Tech City
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
