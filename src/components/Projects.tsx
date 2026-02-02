import { Folder, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Institute Management System",
    description: "Built a console-based student management system using Java and OOP principles. Implemented complete CRUD operations with CSV-based persistent storage. Designed with modular, scalable OOP architecture for easy maintenance and future enhancements.",
    tech: ["Java", "OOPs", "File Handling", "CSV Storage"],
    highlights: [
      "Complete CRUD operations",
      "Persistent storage with CSV",
      "Modular OOP architecture",
    ],
  },
  {
    title: "Counsellor Portal",
    description: "Developed a role-based counselling management system using Spring Boot MVC. Implemented authentication, dashboards, session handling, and RESTful APIs. Integrated MySQL using JPA/Hibernate for persistent data management.",
    tech: ["Java", "Spring Boot", "REST APIs", "MySQL", "JPA/Hibernate"],
    highlights: [
      "Role-based authentication",
      "RESTful API design",
      "JPA/Hibernate integration",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12 mx-auto" />

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card p-8 hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Folder className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
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

export default Projects;
