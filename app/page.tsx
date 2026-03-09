import About from '@/components/about'
import FAQ from '@/components/faq'
import Hero from '@/components/hero'
import SocialProof from '@/components/social-proof'
import Header from '@/components/header'
import Contact from '@/components/contact'
import AnimatedSection from '@/components/animated-section'
import FixedCTAButton from '@/components/fixed-cta-button'

export default function Home() {
  return (
    <div className="font-meriweather bg-vitoria-text">
      <Header />
      <FixedCTAButton />

      <Hero />

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
