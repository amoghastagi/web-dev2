import heroImage from "@/assets/hero-ribs.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      <img
        src={heroImage}
        alt="BBQ ribs on a smoky grill"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative z-10 w-full px-4 pb-8 pt-20 max-w-lg mx-auto text-center">
        <p className="text-secondary font-body font-bold text-sm tracking-widest uppercase mb-2">
          🔥 Nique EATz Presents 🔥
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-foreground -rotate-2 mb-4">
          Columbia's Favorite<br />
          <span className="text-secondary">Soul Food</span>{" "}
          <span className="text-highlight">Sundayz</span>
        </h1>
        <p className="font-body text-muted-foreground text-base sm:text-lg max-w-md mx-auto">
          3PC BBQ Rib Dinners, Flavored Lemonades, and the Best Sides in SC.{" "}
          <span className="text-highlight font-semibold">Pre-Order highly suggested!</span>
        </p>
        <a
          href="#order"
          className="inline-block mt-6 px-8 py-4 bg-primary text-primary-foreground font-display text-2xl tracking-wider rounded-lg animate-pulse-glow hover:scale-105 transition-transform"
        >
          🍖 Secure Your Plate
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
