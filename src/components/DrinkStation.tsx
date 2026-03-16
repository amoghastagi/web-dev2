import { GlassWater } from "lucide-react";

const drinks = [
  { name: "Strawberry", emoji: "🍓" },
  { name: "Blue Raspberry", emoji: "💙" },
  { name: "Regular", emoji: "🍋" },
];

const DrinkStation = () => {
  return (
    <section className="px-4 py-10 max-w-lg mx-auto">
      <h2 className="font-display text-4xl text-foreground text-center mb-6">
        <GlassWater className="inline-block text-highlight mr-2 -mt-1" size={32} />
        Drink Station
      </h2>
      <div className="bg-card border-2 border-highlight/20 rounded-xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display text-2xl text-foreground">
            Flavored Lemonades
          </h3>
          <span className="font-display text-2xl text-highlight">16oz — $5</span>
        </div>
        <div className="flex flex-col gap-3">
          {drinks.map((drink) => (
            <div
              key={drink.name}
              className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-3"
            >
              <span className="text-xl">{drink.emoji}</span>
              <span className="font-body font-medium text-foreground">
                {drink.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DrinkStation;
