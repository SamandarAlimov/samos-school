import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  MessageSquare, 
  BarChart3,
  Video,
  FileText,
  Shield,
  Smartphone,
  Globe,
  Zap,
  Award
} from "lucide-react";

const coreFeatures = [
  {
    icon: BookOpen,
    title: "Class Management",
    description: "Create and organize classes, subjects, and curriculum with ease. Assign teachers and students seamlessly.",
    color: "primary"
  },
  {
    icon: ClipboardCheck,
    title: "Digital Assignments",
    description: "Upload, submit, and grade assignments online. Automatic deadline tracking and progress monitoring.",
    color: "success"
  },
  {
    icon: Users,
    title: "Attendance System",
    description: "Digital attendance marking with QR codes, automated reports, and parent notifications.",
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Grade Analytics", 
    description: "Comprehensive grade tracking with automated calculations and detailed progress reports.",
    color: "success"
  },
  {
    icon: Video,
    title: "Live Classes",
    description: "Integrated video conferencing with screen sharing, whiteboard, and interactive features.",
    color: "primary"
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Direct messaging between teachers, students, and parents. School-wide announcements and notifications.",
    color: "success"
  }
];

const additionalFeatures = [
  {
    icon: Calendar,
    title: "Smart Timetables",
    description: "Automated scheduling with conflict detection and calendar integration."
  },
  {
    icon: FileText,
    title: "Digital Library",
    description: "Access to digital books and resources integrated with library.samos.uz."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Role-based access control with enterprise-grade security measures."
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Fully responsive design that works perfectly on all devices."
  },
  {
    icon: Globe,
    title: "Multi-language",
    description: "Support for English, Uzbek, Russian, and more languages."
  },
  {
    icon: Award,
    title: "Gamification",
    description: "Badges, points, and leaderboards to motivate student engagement."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for Modern Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive platform that brings together all essential tools for 
            effective teaching and learning in the digital age.
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className="hover:shadow-lg transition-all duration-300 border-border animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  feature.color === 'primary' ? 'bg-primary-light' : 'bg-success-light'
                }`}>
                  <feature.icon className={`w-6 h-6 ${
                    feature.color === 'primary' ? 'text-primary' : 'text-success'
                  }`} />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-to-br from-primary-light/50 to-success-light/50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Plus Many More Features
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with the latest technology and designed for scalability, 
              security, and an exceptional user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/50 animate-slide-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Callout */}
        <div className="text-center mt-16 p-8 bg-card border border-border rounded-2xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">Seamless Integration</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            SAMOS School integrates perfectly with other SAMOS services including 
            library.samos.uz, cloud.samos.uz, wallet.samos.uz, and AI.samos.uz for 
            a complete digital ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-3 py-1 bg-primary-light text-primary rounded-full">Library System</span>
            <span className="px-3 py-1 bg-success-light text-success rounded-full">Cloud Storage</span>
            <span className="px-3 py-1 bg-primary-light text-primary rounded-full">Payment Gateway</span>
            <span className="px-3 py-1 bg-success-light text-success rounded-full">AI Assistant</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Missing import
import { ClipboardCheck } from "lucide-react";