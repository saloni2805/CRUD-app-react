import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-between min-h-[90vh] bg-cover bg-center p-6 relative"
      style={{
        backgroundImage:
          "url('https://www.figma.com/community/resource/acb63030-a130-4dc8-8e78-d388579a3327/thumbnail')",
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content-1 (Heading & Description) */}
      <div className="relative text-center text-white mt-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to CRUD App</h1>
        <p className="text-lg max-w-xl mx-auto">
          Manage your users efficiently with our simple and powerful CRUD
          application. Add, edit, delete, and view users with ease.
        </p>

        {/* Buttons */}
        <div className="mt-6 space-x-4">
          <Link to="/users" className="btn btn-primary text-lg">
            View Users
          </Link>
          <Link
            to="/add"
            className="btn btn-outline text-lg text-white border-white"
          >
            Add User
          </Link>
        </div>
      </div>

      {/* Content-3 (Moved to the Bottom) */}
      <div className="relative w-full flex flex-col items-center mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Easy to Use
            </h3>
            <p className="text-gray-600">
              Simple UI for managing users quickly.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fully Responsive
            </h3>
            <p className="text-gray-600">
              Works on all devices, including mobile.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast & Secure
            </h3>
            <p className="text-gray-600">
              Built with modern technologies like React & Node.js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
