import { Clock, Truck } from "lucide-react";

const OrderDetails = () => {
  return (
    <section className="px-4 py-10 max-w-lg mx-auto">
      <h2 className="font-display text-4xl text-foreground text-center mb-6">
        Order Details
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-xl p-5 text-center">
          <Clock className="mx-auto text-secondary mb-2" size={28} />
          <p className="font-display text-xl text-foreground">Pickups</p>
          <p className="font-body text-highlight font-bold text-lg mt-1">3:30 PM</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 text-center">
          <Truck className="mx-auto text-secondary mb-2" size={28} />
          <p className="font-display text-xl text-foreground">Deliveries</p>
          <p className="font-body text-highlight font-bold text-lg mt-1">After 4:30 PM</p>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
