import About from '@/components/about'
import FAQ from '@/components/faq'
import Hero from '@/components/hero'
import SocialProof from '@/components/social-proof'
import Header from '@/components/header'
import Contact from '@/components/contact'
import AnimatedSection from '@/components/animated-section'

export default function Home() {
  return (
    <div className="font-meriweather bg-vitoria-text">
      <Header />

      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <SocialProof />
      </AnimatedSection>

      <AnimatedSection>
        <FAQ />
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </div>
  )
}
