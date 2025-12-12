import { CheckCircle2, Trophy, Rocket, Star } from "lucide-react";

const AchievementsSection = () => {
  const milestones = [
    { year: "Year 1", title: "Survived Freshman Year", emoji: "😬", description: "Figured out what computer science actually is" },
    { year: "Year 2", title: "Started Getting It", emoji: "🤔", description: "Code started making sense (sometimes)" },
    { year: "Year 3", title: "Built Cool Stuff", emoji: "💪", description: "Actual projects that actually worked!" },
    { year: "Year 4", title: "Crossed the Finish Line!", emoji: "🏆", description: "I'm officially a computer scientist" },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-5xl mb-4 block">🏅</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Level Up <span className="text-primary">Complete!</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            From confused freshman to certified tech wizard ✨
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 md:gap-6 bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Year badge */}
              <div className="flex-shrink-0 w-20 md:w-24 h-20 md:h-24 rounded-2xl bg-gradient-to-br from-primary to-coral-light flex flex-col items-center justify-center text-primary-foreground">
                <span className="text-2xl md:text-3xl">{milestone.emoji}</span>
                <span className="text-xs font-semibold mt-1">{milestone.year}</span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {milestone.title}
                </h3>
                <p className="font-sans text-muted-foreground">{milestone.description}</p>
              </div>

              {/* Checkmark */}
              <div className="flex-shrink-0 pt-2">
                <CheckCircle2 className="w-6 h-6 text-teal" />
              </div>
            </div>
          ))}
        </div>

        {/* Final achievement unlocked */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-gold via-accent to-gold-light rounded-2xl p-8 md:p-10">
            <Trophy className="w-12 h-12 mx-auto text-accent-foreground mb-4" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground mb-2">
              🎮 Achievement Unlocked!
            </h3>
            <p className="font-sans text-accent-foreground/80">
              Bachelor's Degree • Computer Science • Utah Tech University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
