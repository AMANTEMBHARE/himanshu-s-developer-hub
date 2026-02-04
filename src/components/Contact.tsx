import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      "service_7envuyw",
      "template_m3s7a1i",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "wi0tI8J4oboq4FRwR"
    )
    .then(
      () => {
        toast({
          title: "Message sent!",
          description: "Your message has been delivered successfully.",
        });

        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        toast({
          title: "Failed!",
          description: "Something went wrong. Try again later.",
          variant: "destructive",
        });

        console.error(error);
      }
    );
};


  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "himanshuraghorteatwork@gmail.com",
      href: "mailto:himanshuraghorteatwork@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/himanshuraghorte/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/himanshuraghorteatwork",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-6 mx-auto" />
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <div
                  key={link.label}
                  className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <link.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{link.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    required
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
