import { Award, BookOpen, Users, Rocket } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      stat: "B.S.",
      label: "Computer Science",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      stat: "4",
      label: "Years of Study",
    },
    {
      icon: <Users className="w-8 h-8" />,
      stat: "10+",
      label: "Projects Completed",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      stat: "∞",
      label: "Possibilities Ahead",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
            By The Numbers
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            Milestones Achieved
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-xl p-8 text-center border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                {achievement.icon}
              </div>
              
              {/* Stat */}
              <div className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
                {achievement.stat}
              </div>
              
              {/* Label */}
              <p className="font-sans text-sm text-muted-foreground tracking-wide">
                {achievement.label}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 rotate-45 translate-x-8 -translate-y-8 group-hover:bg-accent/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
