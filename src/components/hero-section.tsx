import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  Play,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const features = [
  {
    icon: BookOpen,
    title: "Digital Learning",
    description: "Interactive lessons and assignments"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Connect teachers, students, and parents"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automated timetables and reminders"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track progress with detailed insights"
  }
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-soft opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary-light/50 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                SAMOS Global Technologies
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                The Future of
                <span className="block gradient-primary bg-clip-text text-transparent">
                  Digital Education
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Complete school management and e-learning platform that connects teachers, 
                students, and parents in one seamless digital ecosystem.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 border-border hover:bg-muted/50"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Schools</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-float">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Modern digital learning environment" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-success/20"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 glass-card rounded-xl p-4 animate-slide-in">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-success rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-success-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Live Chat</div>
                  <div className="text-xs text-muted-foreground">3 new messages</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 animate-slide-in" style={{animationDelay: "0.2s"}}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Progress</div>
                  <div className="text-xs text-muted-foreground">85% Complete</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}