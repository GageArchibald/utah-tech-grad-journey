import { GraduationCap, PartyPopper, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-coral via-primary to-coral-light">
      {/* Fun background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gold/30 blur-2xl animate-float" />
        <div className="absolute top-1/3 right-20 w-48 h-48 rounded-full bg-lavender/30 blur-3xl animate-float animation-delay-300" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-mint/30 blur-2xl animate-float animation-delay-600" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-teal/30 blur-xl animate-float animation-delay-400" />
      </div>

      {/* Emoji decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute text-4xl top-[15%] left-[10%] animate-bounce-in animation-delay-500 opacity-0">🎉</span>
        <span className="absolute text-5xl top-[20%] right-[15%] animate-bounce-in animation-delay-600 opacity-0">🎓</span>
        <span className="absolute text-3xl bottom-[25%] left-[15%] animate-bounce-in animation-delay-700 opacity-0">⭐</span>
        <span className="absolute text-4xl bottom-[30%] right-[10%] animate-bounce-in animation-delay-800 opacity-0">🥳</span>
        <span className="absolute text-3xl top-[40%] left-[5%] animate-bounce-in animation-delay-400 opacity-0">✨</span>
        <span className="absolute text-3xl top-[50%] right-[5%] animate-bounce-in animation-delay-500 opacity-0">🎊</span>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Fun badge */}
        <div className="animate-bounce-in opacity-0 mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30">
            <PartyPopper className="w-5 h-5 text-accent" />
            <span className="text-primary-foreground font-semibold tracking-wide">Class of 2025</span>
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
        </div>

        {/* Main heading - bigger and bolder */}
        <h1 className="animate-bounce-in opacity-0 animation-delay-200 font-display text-6xl md:text-8xl lg:text-9xl font-extrabold text-primary-foreground leading-none mb-4">
          I DID IT!
        </h1>

        {/* Cap emoji wiggle */}
        <div className="animate-bounce-in opacity-0 animation-delay-300 text-7xl md:text-8xl my-6">
          <span className="inline-block animate-wiggle">🎓</span>
        </div>

        {/* Subheading */}
        <p className="animate-fade-up opacity-0 animation-delay-400 font-sans text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
          Bachelor of Science in Computer Science
        </p>

        {/* University */}
        <p className="animate-fade-up opacity-0 animation-delay-500 font-sans text-lg text-primary-foreground/80 mb-8">
          Utah Tech University 🏛️
        </p>

        {/* Fun CTA */}
        <div className="animate-fade-up opacity-0 animation-delay-600">
          <a 
            href="#celebrate" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Let's Celebrate!</span>
            <PartyPopper className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animation-delay-800">
          <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
            <span className="text-sm font-medium">Scroll for more fun</span>
            <div className="text-2xl animate-bounce">👇</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
