import { Code, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
            The Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Four Years of Growth
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto" />
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <div className="space-y-6">
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              What started as curiosity about how technology works transformed into a 
              deep passion for creating solutions that make a difference.
            </p>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              From late-night coding sessions to breakthrough moments in the lab, 
              every challenge has shaped me into the developer I am today.
            </p>
            <p className="font-sans text-lg text-foreground leading-relaxed font-medium">
              This degree represents not just academic achievement, but the culmination 
              of countless hours of dedication, growth, and perseverance.
            </p>
          </div>

          {/* Right - Highlights */}
          <div className="space-y-6">
            <HighlightCard 
              icon={<Code className="w-6 h-6" />}
              title="Technical Excellence"
              description="Mastered modern programming languages, software development methodologies, and cutting-edge technologies."
            />
            <HighlightCard 
              icon={<Lightbulb className="w-6 h-6" />}
              title="Problem Solving"
              description="Developed analytical thinking skills to tackle complex challenges with innovative solutions."
            />
            <HighlightCard 
              icon={<Target className="w-6 h-6" />}
              title="Ready for Impact"
              description="Prepared to contribute meaningfully to the tech industry and create positive change."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HighlightCard = ({ icon, title, description }: HighlightCardProps) => {
  return (
    <div className="group flex gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="font-sans text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default AboutSection;
