import About from '@/components/about'
import FAQ from '@/components/faq'
import Hero from '@/components/hero'
import SocialProof from '@/components/social-proof'
import Header from '@/components/header'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <div className="font-meriweather">
      <Header />
      <Hero />
      <About />
      <SocialProof />
      <FAQ />
      <Contact />
    </div>
  )
}
