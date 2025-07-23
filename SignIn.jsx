
const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">Sign In</h2>
        
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox text-orange-500" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-orange-500 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Sign In
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?
            <a href="#" className="text-orange-500 hover:underline ml-1">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
