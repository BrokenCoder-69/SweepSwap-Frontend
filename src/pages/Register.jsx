import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        data,
        {
          withCredentials: true, // If using Sanctum with cookies
        }
      );

      console.log("Registration Success:", response.data);
      localStorage.setItem("token", response.data.token);
      alert("Registration successful");
      // Optionally redirect to dashboard or login page
    } catch (error) {
      if (error.response) {
        console.error("Registration Error:", error.response.data);
        alert(
          "Registration failed: " +
            JSON.stringify(
              error.response.data.errors || error.response.data.message
            )
        );
      } else {
        console.error("Unexpected Error:", error.message);
        alert("Registration failed: Unexpected error");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl p-10 w-full max-w-md text-white">
        <h2 className="text-3xl font-semibold text-center mb-6 text-purple-400">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
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
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.password && (
              <p className="text-red-400 text-sm">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-lg hover:brightness-110 transition-all duration-200 font-semibold"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm mt-6 text-gray-300">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
