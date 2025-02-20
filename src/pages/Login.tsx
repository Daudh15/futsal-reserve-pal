
import Navbar from "@/components/Navbar";

const Login = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-24 px-4">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <p>Access your account to manage your bookings.</p>
      </div>
    </div>
  );
};

export default Login;
