import { Flame } from "lucide-react";

const MenuCard = () => {
  const sides = ["Yellow Rice", "Mac n Cheese", "Baked Beans", "Roll"];

  return (
    <section className="px-4 py-10 max-w-lg mx-auto">
      <h2 className="font-display text-4xl text-foreground text-center mb-6">
        <Flame className="inline-block text-secondary mr-2 -mt-1" size={32} />
        Sunday Menu
      </h2>
      <div className="bg-card border-2 border-secondary/30 rounded-xl p-6 shadow-[0_0_30px_hsl(16_100%_50%/0.15)]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-3xl text-foreground">
            3PC BBQ Rib Dinner
          </h3>
          <span className="font-display text-3xl text-highlight">$25</span>
        </div>
        <p className="text-muted-foreground font-body text-sm mb-4">
          Slow-smoked, fall-off-the-bone BBQ ribs served with all the fixins'
        </p>
        <div className="border-t border-border pt-4">
          <p className="font-body font-semibold text-secondary text-xs uppercase tracking-widest mb-3">
            Includes
          </p>
          <div className="grid grid-cols-2 gap-2">
            {sides.map((side) => (
              <div
                key={side}
                className="flex items-center gap-2 bg-muted/50 rounded-md px-3 py-2"
              >
                <span className="text-secondary text-sm">✦</span>
                <span className="font-body text-foreground text-sm">{side}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCard;
