import { Heart, PartyPopper } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        {/* Big thank you */}
        <div className="mb-12">
          <span className="text-6xl md:text-7xl block mb-6">🥳</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Couldn't Have Done It <span className="text-primary">Without You!</span>
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            To my family, friends, professors, and everyone who believed in me 
            (even when I didn't believe in myself)...
          </p>
        </div>

        {/* Heart animation */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
          <Heart className="w-10 h-10 text-primary fill-primary animate-pulse animation-delay-100" />
          <Heart className="w-12 h-12 text-primary fill-primary animate-pulse animation-delay-200" />
          <Heart className="w-10 h-10 text-primary fill-primary animate-pulse animation-delay-300" />
          <Heart className="w-8 h-8 text-primary fill-primary animate-pulse animation-delay-400" />
        </div>

        {/* Fun fact cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <div className="bg-mint/30 rounded-2xl p-6 border-2 border-mint">
            <span className="text-3xl block mb-2">🚀</span>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">What's Next?</h3>
            <p className="font-sans text-muted-foreground">Time to take over the tech world! (Or at least land a job 😅)</p>
          </div>
          <div className="bg-lavender/30 rounded-2xl p-6 border-2 border-lavender">
            <span className="text-3xl block mb-2">🎊</span>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">Celebration Mode</h3>
            <p className="font-sans text-muted-foreground">Party planning in progress! You're all invited 🎉</p>
          </div>
        </div>

        {/* Final message */}
        <div className="bg-gradient-to-r from-primary via-coral to-coral-light rounded-3xl p-8 md:p-12 text-primary-foreground">
          <PartyPopper className="w-10 h-10 mx-auto mb-4" />
          <p className="font-display text-2xl md:text-3xl font-bold mb-4">
            Thanks for being part of my journey!
          </p>
          <p className="font-sans text-primary-foreground/80 text-lg">
            Love you all! ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
