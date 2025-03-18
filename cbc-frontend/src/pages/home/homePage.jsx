import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white text-center p-6">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg mb-6 max-w-md">
                Explore our features and enjoy seamless experiences.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-100 transition duration-300">
                Get Started
            </button>
            <br />
            <Link to="/login" className="mt-4 text-lg underline hover:text-gray-200">Login</Link>
            <Link to="/signin" className="mt-4 text-lg underline hover:text-gray-200">SignIn Page</Link>

        </div>
    );
}