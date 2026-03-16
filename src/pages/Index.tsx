import woodTexture from "@/assets/wood-texture.jpg";
import HeroSection from "@/components/HeroSection";
import MenuCard from "@/components/MenuCard";
import DrinkStation from "@/components/DrinkStation";
import OrderDetails from "@/components/OrderDetails";
import PreOrderForm from "@/components/PreOrderForm";
import PaymentInfo from "@/components/PaymentInfo";

const Index = () => {
  return (
    <div
      className="min-h-screen bg-background"
      style={{ backgroundImage: `url(${woodTexture})`, backgroundSize: "400px", backgroundRepeat: "repeat" }}
    >
      <div className="bg-background/80 min-h-screen">
        <HeroSection />
        <MenuCard />
        <DrinkStation />
        <OrderDetails />
        <PreOrderForm />
        <PaymentInfo />
      </div>
    </div>
  );
};

export default Index;
