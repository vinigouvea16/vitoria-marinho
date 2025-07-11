import { CarouselSocialProof } from './carousel-lp'

export default function SocialProof() {
  return (
    <div
      id="feedbacks"
      className="h-screen flex flex-col justify-center gap-16 bg-vitoria-yellow text-center "
    >
      <h2 className="text-vitoria-text lg:text-4xl text-2xl w-2/3 mx-auto lg:w-full">
        O que dizem sobre o atendimento da Dr. Vitória
      </h2>

      <CarouselSocialProof />
    </div>
  )
}
