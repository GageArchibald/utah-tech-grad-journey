import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Quote */}
        <blockquote className="mb-12">
          <p className="font-serif text-2xl md:text-3xl text-foreground italic leading-relaxed mb-4">
            "The future belongs to those who believe in the beauty of their dreams."
          </p>
          <cite className="font-sans text-sm text-muted-foreground not-italic">
            — Eleanor Roosevelt
          </cite>
        </blockquote>

        {/* CTA text */}
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Let's Connect
        </h2>
        <p className="font-sans text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Excited to start the next chapter. Whether it's collaboration, opportunities, 
          or just to say hello — I'd love to hear from you.
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <SocialButton icon={<Mail className="w-5 h-5" />} label="Email" href="mailto:" />
          <SocialButton icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" href="https://linkedin.com" />
          <SocialButton icon={<Github className="w-5 h-5" />} label="GitHub" href="https://github.com" />
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-px bg-border" />
          <div className="w-2 h-2 rounded-full bg-accent" />
          <div className="w-12 h-px bg-border" />
        </div>

        {/* University acknowledgment */}
        <p className="font-sans text-sm text-muted-foreground">
          Proud graduate of <span className="text-primary font-medium">Utah Tech University</span>
        </p>
      </div>
    </section>
  );
};

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const SocialButton = ({ icon, label, href }: SocialButtonProps) => {
  return (
    <Button 
      variant="outline" 
      size="lg"
      className="group gap-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      asChild
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
        <span className="font-sans">{label}</span>
        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </Button>
  );
};

export default CtaSection;
