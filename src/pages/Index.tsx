import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Esraa Mosad | Flutter Developer - Mobile App Expert</title>
        <meta name="description" content="Esraa Mosad - Flutter Developer building scalable, user-friendly mobile apps with Flutter & Firebase. Expert in BLoC, clean architecture, and cross-platform development." />
        <meta name="keywords" content="Flutter Developer, Mobile App Developer, BLoC, Firebase, Cross-platform, Dart, Egypt" />
        <link rel="canonical" href="https://esraamosad.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Esraa Mosad | Flutter Developer" />
        <meta property="og:description" content="Building scalable, user-friendly mobile apps with Flutter & Firebase" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Esraa Mosad",
            "jobTitle": "Flutter Developer",
            "description": "Building scalable, user-friendly mobile apps with Flutter & Firebase",
            "url": "https://esraamosad.dev",
            "sameAs": [
              "https://github.com/esraamosad",
              "https://linkedin.com/in/esraamosad"
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
