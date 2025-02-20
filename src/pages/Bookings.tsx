
import Navbar from "@/components/Navbar";

const Bookings = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-24 px-4">
        <h1 className="text-3xl font-bold mb-6">Book a Court</h1>
        <p>Select your preferred time and court to make a booking.</p>
      </div>
    </div>
  );
};

export default Bookings;
