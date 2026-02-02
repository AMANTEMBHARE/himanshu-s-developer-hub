import { Github, Linkedin, Download, Code2 } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border/50 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Open to opportunities
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Hi, I'm{" "}
            <span className="gradient-text">Himanshu Raghorte</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90 mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Backend & Cloud Engineer
          </h2>

          <p className="text-lg sm:text-xl text-primary font-medium mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Java • Spring Boot • Microservices • AWS
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Final-year engineering student with strong backend, cloud, and DevOps foundations.
            Certified in AWS, Azure, and Oracle Cloud, passionate about building scalable systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 glow-effect"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-border hover:bg-secondary hover:border-primary/50"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-border hover:bg-secondary hover:border-primary/50"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-border hover:bg-secondary hover:border-primary/50"
              asChild
            >
              <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
                <Code2 className="h-4 w-4" />
                LeetCode
              </a>
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">3+</span>
              <span>Cloud Certs</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">2+</span>
              <span>Projects</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">1</span>
              <span>Hackathon Win</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
