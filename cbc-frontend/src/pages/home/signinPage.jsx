import { Link } from "react-router-dom";

export default function SigninPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-sm w-full text-center">
                <h1 className="text-3xl font-bold text-gray-700 mb-6">Sign In</h1>
                <form className="flex flex-col space-y-4">
                    <input 
                        type="text" 
                        placeholder="Enter your email" 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="password" 
                        placeholder="Enter your password" 
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                        className="bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>
                <p className="mt-4 text-gray-600">
                    Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
                </p>
                <Link to="/" className="mt-4 inline-block text-blue-600 hover:underline">Home</Link>
            </div>
        </div>
    );
}
