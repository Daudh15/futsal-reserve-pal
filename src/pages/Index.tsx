
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import CourtCard from "@/components/CourtCard";

// Temporary mock data
const featuredCourts = [
  {
    id: "1",
    name: "Elite Futsal Arena",
    imageUrl: "https://images.unsplash.com/photo-1577223625816-7546c8dfec85?q=80&w=3280&auto=format&fit=crop",
    price: 60,
    rating: 4.8,
    location: "Downtown Sports Complex"
  },
  {
    id: "2",
    name: "Pro Futsal Center",
    imageUrl: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=2940&auto=format&fit=crop",
    price: 55,
    rating: 4.6,
    location: "Westside Recreation Center"
  },
  {
    id: "3",
    name: "Urban Futsal Hub",
    imageUrl: "https://images.unsplash.com/photo-1575361204480-aadea25e6f68?q=80&w=2971&auto=format&fit=crop",
    price: 50,
    rating: 4.7,
    location: "Eastside Sports Park"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section className="section-padding bg-surface-dark">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Courts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our premium selection of professional futsal courts,
              perfect for your next match or training session.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourts.map((court) => (
              <CourtCard key={court.id} {...court} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
