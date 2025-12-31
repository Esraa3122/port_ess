import { motion } from 'framer-motion';
import { Smartphone, Globe, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-primary to-primary/60",
    skills: ["Flutter", "Dart", "BLoC/Cubit", "Provider", "GetX", "Android SDK", "iOS Development"]
  },
  {
    title: "Frontend Development",
    icon: Globe,
    color: "from-accent to-accent/60",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Responsive Design"]
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "from-green-500 to-green-500/60",
    skills: ["Firebase", "REST APIs", "SQLite", "Hive", "Cloud Firestore", "Authentication"]
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    color: "from-orange-500 to-orange-500/60",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Figma", "Postman", "CI/CD"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            A comprehensive toolkit for building exceptional mobile and web experiences
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
              whileHover={{ y: -3 }}
              className="glass-card rounded-2xl p-6 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.05 + skillIndex * 0.03 }}
                    className="px-3 py-1.5 bg-secondary/50 rounded-lg text-sm font-medium text-foreground/80 
                             border border-border/50 hover:border-primary/20 hover:bg-primary/5 
                             transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
