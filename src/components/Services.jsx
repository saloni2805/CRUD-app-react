const Services = () => {
  const services = [
    {
      title: "User Management",
      description:
        "Easily add, edit, delete, and view users with a simple interface.",
      icon: "👤",
    },
    {
      title: "Fast & Secure",
      description:
        "Built using modern technologies like React, Tailwind, and Javascript.",
      icon: "⚡",
    },
    {
      title: "Fully Responsive",
      description: "Access the app from any device—desktop, tablet, or mobile.",
      icon: "📱",
    },
    {
      title: "Real-time Updates",
      description:
        "Instantly reflect changes in your user database with real-time sync.",
      icon: "🔄",
    },
    {
      title: "Simple UI",
      description:
        "A clean and intuitive interface for effortless user management.",
      icon: "🎨",
    },
    {
      title: "JSON Server (Handling Database)",
      description:
        "Use JSON Server to simulate a real API for CRUD operations.",
      icon: "🗄️",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center  bg-base-100 p-6">
      <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
      <p className="text-lg text-white max-w-2xl text-center mb-8">
        Our CRUD app provides a seamless experience for managing users
        efficiently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-500 shadow-md p-6 rounded-lg text-center"
          >
            <div className="text-5xl">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mt-4">
              {service.title}
            </h3>
            <p className="text-white mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
