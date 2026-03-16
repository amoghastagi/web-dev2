import { useState } from "react";
import { toast } from "sonner";

const drinkOptions = [
  "No Drink",
  "Strawberry Lemonade",
  "Blue Raspberry Lemonade",
  "Regular Lemonade",
];

const PreOrderForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    plates: "1",
    drink: "",
    preference: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.drink || !form.preference) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("🔥 Order submitted! We'll confirm via text shortly.");
    setForm({ name: "", phone: "", plates: "1", drink: "", preference: "" });
  };

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section id="order" className="px-4 py-10 max-w-lg mx-auto">
      <h2 className="font-display text-4xl text-foreground text-center mb-2">
        🍖 Secure Your Plate
      </h2>
      <p className="text-muted-foreground font-body text-center text-sm mb-6">
        Pre-order now — plates go fast!
      </p>
      <form onSubmit={handleSubmit} className="bg-card border-2 border-primary/40 rounded-xl p-6 space-y-4">
        <div>
          <label className="font-body text-sm text-muted-foreground mb-1 block">Full Name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="font-body text-sm text-muted-foreground mb-1 block">Phone Number</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="(803) 555-1234"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">Number of Plates</label>
            <select
              value={form.plates}
              onChange={(e) => update("plates", e.target.value)}
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground mb-1 block">Drink Choice</label>
            <select
              value={form.drink}
              onChange={(e) => update("drink", e.target.value)}
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select...</option>
              {drinkOptions.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="font-body text-sm text-muted-foreground mb-2 block">Pickup or Delivery?</label>
          <div className="grid grid-cols-2 gap-3">
            {["Pickup", "Delivery"].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => update("preference", opt)}
                className={`py-3 rounded-lg font-display text-xl tracking-wider transition-all ${
                  form.preference === opt
                    ? "bg-primary text-primary-foreground scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {opt === "Pickup" ? "🏃" : "🚗"} {opt}
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-primary text-primary-foreground font-display text-2xl tracking-wider rounded-lg animate-pulse-glow hover:scale-[1.02] transition-transform mt-2"
        >
          🔥 Order Now
        </button>
      </form>
    </section>
  );
};

export default PreOrderForm;
