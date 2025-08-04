import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        data,
        {
          withCredentials: true, // only if using Sanctum with cookies
        }
      );

      console.log("Login Success:", response.data);
      // Optionally store the token in localStorage
      localStorage.setItem("token", response.data.token);
      alert("Login successful");
      // Navigate to dashboard or another page
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      alert(
        "Login failed: " + (error.response?.data?.message || "Unknown error")
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-10 w-full max-w-md text-white">
        <h2 className="text-3xl font-semibold text-center mb-6 text-cyan-400">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
            />
            {errors.password && (
              <p className="text-red-400 text-sm">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:brightness-110 transition-all duration-200 font-semibold"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm mt-6 text-gray-300">
          Don't have an account?{" "}
          <a href="/register" className="text-cyan-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
