import { CarouselSocialProof } from './carousel-lp'

export default function SocialProof() {
  return (
    <div
      id="feedbacks"
      className="h-screen flex flex-col justify-center gap-16 bg-vitoria-yellow text-center "
    >
      <h2 className="text-vitoria-text lg:text-4xl text-2xl w-3/4 mx-auto lg:w-full">
        O que dizem sobre o atendimento da Dra. Vitória
      </h2>

      <CarouselSocialProof />
    </div>
  )
}
