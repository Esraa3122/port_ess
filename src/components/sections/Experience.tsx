import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    type: 'work',
    title: "Flutter Developer",
    company: "Freelance / Contract",
    period: "2022 - Present",
    description: "Developing cross-platform mobile applications for various clients. Implementing clean architecture and state management with BLoC/Cubit.",
    highlights: ["Mobile App Development", "Client Communication", "Project Management"]
  },
  {
    type: 'work',
    title: "Mobile Developer Intern",
    company: "Tech Company",
    period: "2021 - 2022",
    description: "Gained hands-on experience in Flutter development. Collaborated with senior developers on mobile applications.",
    highlights: ["Flutter Basics", "Team Collaboration", "Code Reviews"]
  },
  {
    type: 'education',
    title: "Bachelor's Degree",
    company: "Computer Science / IT",
    period: "2018 - 2022",
    description: "Studied computer science fundamentals, software engineering, and mobile development.",
    highlights: ["Data Structures", "Algorithms", "Software Engineering"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Journey</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
            Experience & Education
          </h2>
        </motion.div>
        
        <div className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />
          
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative flex items-start gap-6 mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Icon */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10" />
              
              {/* Content card */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className={`ml-14 md:ml-0 md:w-[calc(50%-1.5rem)] glass-card rounded-xl p-5 ${
                  index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                }`}
              >
                <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    item.type === 'work' ? 'bg-primary/15' : 'bg-accent/15'
                  }`}>
                    {item.type === 'work' ? (
                      <Briefcase className="w-4 h-4 text-primary" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-accent" />
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {item.period}
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-lg">{item.title}</h3>
                <p className="text-primary font-medium text-sm mb-2">{item.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.description}</p>
                
                <div className={`flex flex-wrap gap-1.5 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {item.highlights.map(highlight => (
                    <span key={highlight} className="px-2 py-0.5 text-xs bg-secondary/50 rounded text-muted-foreground border border-border/30">
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
