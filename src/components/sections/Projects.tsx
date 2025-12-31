import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import topamineImg from '@/assets/project-topamine.png';
import ecommerceImg from '@/assets/project-ecommerce.png';
import lifedropImg from '@/assets/project-lifedrop.png';

const projects = [
  {
    title: "Topamine",
    subtitle: "Educational Platform",
    description: "A comprehensive learning management system with interactive courses, progress tracking, and real-time assessments.",
    image: topamineImg,
    tags: ["Flutter", "Firebase", "BLoC", "Clean Architecture"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce App",
    subtitle: "Shopping Experience",
    description: "Full-featured e-commerce application with product catalog, cart management, secure payments, and order tracking.",
    image: ecommerceImg,
    tags: ["Flutter", "REST API", "Provider", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Life Drop",
    subtitle: "Healthcare App",
    description: "Blood donation platform connecting donors with recipients. Features real-time notifications and location-based matching.",
    image: lifedropImg,
    tags: ["Flutter", "Firebase", "Maps API", "Push Notifications"],
    github: "#",
    demo: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            A selection of my best work showcasing expertise in Flutter development
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Phone mockup with real image */}
                <div className="relative h-52 flex items-center justify-center p-5 bg-gradient-to-b from-secondary/30 to-transparent overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-24 h-48 rounded-2xl overflow-hidden shadow-xl border border-border/50"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-background/60" />
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">{project.subtitle}</span>
                  <h3 className="font-display font-bold text-lg mt-1 mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-xs bg-secondary/50 rounded text-muted-foreground border border-border/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 h-9" asChild>
                      <a href={project.github}>
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                    </Button>
                    <Button variant="default" size="sm" className="flex-1 h-9" asChild>
                      <a href={project.demo}>
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
