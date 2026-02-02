import { Trophy, Users, Heart, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Winner – RSOC Hackathon 2025",
    description: "GHRCEMN Nagpur",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Award,
    title: "IEEE Technical Head & Webmaster",
    description: "2025",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Marketing Team Lead",
    description: "College Technical Fest",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "NSS Volunteer",
    description: "Community service initiatives",
    color: "from-red-500 to-pink-500",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12 mx-auto" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="glass-card p-6 text-center hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
