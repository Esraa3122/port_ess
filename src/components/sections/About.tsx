import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Code2, Layers, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices"
  },
  {
    icon: Layers,
    title: "BLoC/Cubit",
    description: "Expert in state management patterns for complex apps"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing apps for speed and smooth user experience"
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Building intuitive interfaces that users love"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
            Crafting Mobile Experiences
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-card rounded-2xl p-7 space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-foreground font-medium">Flutter Developer</span> with expertise in 
                building cross-platform mobile applications. With a strong foundation in 
                <span className="text-primary"> clean architecture</span> and 
                <span className="text-primary"> state management</span> using BLoC/Cubit, 
                I create applications that are not only beautiful but also scalable and maintainable.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My approach combines technical excellence with a deep understanding of user needs, 
                resulting in apps that deliver exceptional experiences.
              </p>
              
              <Button variant="hero" size="default" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
          
          {/* Right: Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ y: -3 }}
                className="glass-card rounded-xl p-5 group cursor-default transition-all duration-200 hover:border-primary/20"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
