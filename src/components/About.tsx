import { MapPin, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />

          <div className="glass-card p-8 sm:p-10">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm a <span className="text-foreground font-medium">final-year engineering student</span> with a 
              strong passion for <span className="text-foreground font-medium">backend development</span> and 
              <span className="text-foreground font-medium"> cloud technologies</span>. My expertise lies in 
              building robust applications using <span className="text-primary font-medium">Java</span> and 
              <span className="text-primary font-medium"> Spring Boot</span>, creating RESTful APIs, and 
              implementing microservices architecture.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I have hands-on experience with SQL databases including MySQL and Oracle, and I'm well-versed 
              in cloud platforms like <span className="text-primary font-medium">AWS</span>, 
              <span className="text-primary font-medium"> Azure</span>, and 
              <span className="text-primary font-medium"> Oracle Cloud Infrastructure</span>. My DevOps 
              toolkit includes Docker, Jenkins, Kubernetes, and CI/CD pipelines.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              I'm deeply interested in <span className="text-foreground font-medium">system design</span> and 
              building <span className="text-foreground font-medium">scalable backend systems</span>. I enjoy 
              solving complex problems and continuously learning new technologies to stay at the forefront 
              of the ever-evolving tech landscape.
            </p>

            <div className="flex flex-wrap gap-6 pt-6 border-t border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:himanshuraghorteatwork@gmail.com" 
                  className="hover:text-foreground transition-colors"
                >
                  himanshuraghorteatwork@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91-9545629727</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
