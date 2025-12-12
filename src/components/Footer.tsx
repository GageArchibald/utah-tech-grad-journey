import { GraduationCap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-accent" />
            <span className="font-serif text-lg">Class of 2025</span>
          </div>

          {/* Copyright */}
          <p className="font-sans text-sm text-primary-foreground/70">
            © {currentYear} • Made with dedication at Utah Tech University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
