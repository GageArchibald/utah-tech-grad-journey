const Footer = () => {
  return (
    <footer className="py-8 bg-foreground text-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Fun graduation message */}
          <p className="text-3xl">🎓</p>
          <p className="font-display text-xl font-semibold">
            Class of 2025 • Utah Tech University
          </p>
          <p className="font-sans text-sm text-background/60">
            Made with ❤️ (and way too much caffeine ☕)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
