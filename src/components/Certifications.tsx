import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    code: "AZ-900",
    year: "2024",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Oracle Cloud Infrastructure Developer Associate",
    code: "OCI Developer",
    year: "2025",
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Oracle Cloud Infrastructure DevOps Professional",
    code: "OCI DevOps",
    year: "2025",
    color: "from-red-500 to-orange-500",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12 mx-auto" />

          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color}`}>
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground">{cert.year}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">{cert.code}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
