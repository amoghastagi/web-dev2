import { Smartphone, DollarSign } from "lucide-react";

const PaymentInfo = () => {
  return (
    <section className="px-4 py-10 pb-28 max-w-lg mx-auto text-center">
      <h2 className="font-display text-3xl text-foreground mb-4">Payment Accepted</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3">
          <Smartphone className="text-foreground" size={20} />
          <span className="font-body font-semibold text-foreground">Apple Pay</span>
        </div>
        <div className="flex items-center gap-2 bg-card border border-border rounded-full px-6 py-3">
          <DollarSign className="text-highlight" size={20} />
          <span className="font-body font-semibold text-highlight">$Niqueeeatz</span>
        </div>
      </div>
      <p className="text-muted-foreground font-body text-sm mt-4">
        Pay via Apple Pay or CashApp when you pick up or upon delivery
      </p>
    </section>
  );
};

export default PaymentInfo;
