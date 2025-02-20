
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";

const CourtDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-24 px-4">
        <h1 className="text-3xl font-bold mb-6">Court Details</h1>
        <p>Viewing details for court ID: {id}</p>
      </div>
    </div>
  );
};

export default CourtDetails;
