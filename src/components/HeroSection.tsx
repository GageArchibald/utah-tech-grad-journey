import { GraduationCap, Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-crimson-dark to-primary">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold-light blur-3xl" />
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Cap icon */}
        <div className="animate-fade-up opacity-0 mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30">
            <GraduationCap className="w-10 h-10 text-accent animate-shimmer" />
          </div>
        </div>

        {/* Pre-heading */}
        <p className="animate-fade-up opacity-0 animation-delay-200 text-accent font-sans text-sm tracking-[0.3em] uppercase mb-4">
          Class of 2025
        </p>

        {/* Main heading */}
        <h1 className="animate-fade-up opacity-0 animation-delay-400 font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground leading-tight mb-6">
          I Did It!
        </h1>

        {/* Subheading */}
        <p className="animate-fade-up opacity-0 animation-delay-600 font-serif text-2xl md:text-3xl text-primary-foreground/90 mb-8">
          Bachelor of Science in Computer Science
        </p>

        {/* University & details */}
        <div className="animate-fade-up opacity-0 animation-delay-800 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-primary-foreground/80">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="font-sans text-sm tracking-wide">Utah Tech University</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-accent" />
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="font-sans text-sm tracking-wide">December 2025</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: "1.2s" }}>
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-primary-foreground/50 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
