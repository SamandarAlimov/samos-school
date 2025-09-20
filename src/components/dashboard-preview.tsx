import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  ClipboardCheck, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  GraduationCap,
  UserCheck
} from "lucide-react";

const userRoles = [
  {
    id: "student",
    title: "Student Dashboard",
    icon: GraduationCap,
    color: "primary",
    description: "View assignments, grades, and class schedule"
  },
  {
    id: "teacher", 
    title: "Teacher Dashboard",
    icon: UserCheck,
    color: "success",
    description: "Manage classes, assignments, and student progress"
  },
  {
    id: "parent",
    title: "Parent Portal",
    icon: User,
    color: "secondary",
    description: "Monitor child's progress and communicate with teachers"
  }
];

const studentData = {
  upcomingClasses: [
    { subject: "Mathematics", time: "09:00 AM", room: "Room 101" },
    { subject: "Physics", time: "11:00 AM", room: "Lab 201" },
    { subject: "English", time: "02:00 PM", room: "Room 305" }
  ],
  assignments: [
    { title: "Math Homework Ch.5", due: "Tomorrow", status: "pending" },
    { title: "Physics Lab Report", due: "Friday", status: "completed" },
    { title: "English Essay", due: "Next Week", status: "pending" }
  ],
  grades: { math: 85, physics: 92, english: 88, chemistry: 90 }
};

export function DashboardPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Personalized Dashboards for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Role-based interfaces designed for students, teachers, and parents with 
            the tools they need most.
          </p>
        </div>

        {/* Role Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {userRoles.map((role) => (
            <Button
              key={role.id}
              variant={role.id === "student" ? "default" : "outline"}
              className="flex items-center gap-2 px-6 py-3"
            >
              <role.icon className="w-5 h-5" />
              {role.title}
            </Button>
          ))}
        </div>

        {/* Student Dashboard Preview */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Today's Schedule */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Today's Classes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studentData.upcomingClasses.map((cls, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium text-foreground">{cls.subject}</div>
                    <div className="text-sm text-muted-foreground">{cls.room}</div>
                  </div>
                  <div className="text-sm font-medium text-primary">{cls.time}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Assignments */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5 text-success" />
                Assignments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studentData.assignments.map((assignment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {assignment.status === "completed" ? (
                      <CheckCircle className="w-5 h-5 text-success" />
                    ) : (
                      <Clock className="w-5 h-5 text-muted-foreground" />
                    )}
                    <div>
                      <div className="font-medium text-foreground">{assignment.title}</div>
                      <div className="text-sm text-muted-foreground">Due: {assignment.due}</div>
                    </div>
                  </div>
                  <Badge variant={assignment.status === "completed" ? "default" : "secondary"}>
                    {assignment.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Performance Overview */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(studentData.grades).map(([subject, grade]) => (
                <div key={subject} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium capitalize text-foreground">{subject}</span>
                    <span className="text-sm font-bold text-foreground">{grade}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2 transition-all duration-300"
                      style={{ width: `${grade}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span className="text-sm text-muted-foreground">Overall Average: </span>
                  <span className="text-sm font-bold text-success">88.75%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3"
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
}