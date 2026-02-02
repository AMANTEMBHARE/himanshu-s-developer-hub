const skillGroups = [
  {
    title: "Programming",
    skills: ["Java", "SQL", "PL/SQL"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "REST APIs", "Microservices"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "Oracle"],
  },
  {
    title: "Cloud Platforms",
    skills: ["AWS (EC2, S3, VPC, IAM, ELB, EFS, CloudWatch)", "Oracle Cloud Infrastructure (OCI)", "Microsoft Azure (AZ-900)"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Jenkins", "Kubernetes", "CI/CD", "Git & GitHub", "Linux", "IntelliJ IDEA", "Postman", "JUnit", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12 mx-auto" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
