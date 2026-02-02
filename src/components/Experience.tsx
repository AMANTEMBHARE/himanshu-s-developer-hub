import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12 mx-auto" />

          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            
            <div className="pl-6">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Jr. Software Engineer
                  </h3>
                  <p className="text-primary font-medium">
                    Cravita Technologies India Pvt. Ltd.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Jul 2025 – Nov 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Remote</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Gained hands-on experience with cloud technologies and DevOps practices:
                </p>
                <ul className="space-y-3">
                  {[
                    "Explored AWS services including EC2, S3, VPC, IAM, CloudWatch, and CloudFormation",
                    "Built basic cloud architectures following AWS best practices",
                    "Worked on automated deployments and infrastructure as code",
                    "Completed hands-on labs for various AWS services and configurations",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/50">
                {["AWS", "EC2", "S3", "VPC", "IAM", "CloudFormation", "CloudWatch"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
