
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";

const Bookings = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("1");
  const [courtId, setCourtId] = useState("");

  const availableTimes = [
    "09:00", "10:00", "11:00", "12:00", "13:00",
    "14:00", "15:00", "16:00", "17:00", "18:00",
    "19:00", "20:00", "21:00", "22:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement booking logic when backend is connected
    console.log("Booking attempt:", { date, time, duration, courtId });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Book a Court</h1>
          <div className="glass p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="block text-sm font-medium">
                    Select Date
                  </label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="block text-sm font-medium">
                      Select Time
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full h-10 px-3 rounded-md border bg-background"
                      required
                    >
                      <option value="">Select a time slot</option>
                      {availableTimes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-medium">
                      Duration (hours)
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full h-10 px-3 rounded-md border bg-background"
                      required
                    >
                      {[1, 2, 3].map((h) => (
                        <option key={h} value={h}>
                          {h} hour{h > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-medium">
                      Select Court
                    </label>
                    <select
                      value={courtId}
                      onChange={(e) => setCourtId(e.target.value)}
                      className="w-full h-10 px-3 rounded-md border bg-background"
                      required
                    >
                      <option value="">Select a court</option>
                      <option value="1">Elite Futsal Arena</option>
                      <option value="2">Pro Futsal Center</option>
                      <option value="3">Urban Futsal Hub</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-colors"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
