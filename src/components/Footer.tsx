import { Github, Linkedin, Mail, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <a href="#" className="text-2xl font-bold gradient-text mb-4">
              HR
            </a>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Building scalable backend systems with Java, Cloud & DevOps
            </p>

            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:himanshuraghorteatwork@gmail.com"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Code2 className="h-5 w-5" />
              </a>
            </div>

            <div className="w-full h-px bg-border/50 mb-6" />

            <p className="text-sm text-muted-foreground">
              © {currentYear} Himanshu Raghorte. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
