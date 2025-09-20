import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/hero-section";
import { DashboardPreview } from "@/components/dashboard-preview";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <DashboardPreview />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
