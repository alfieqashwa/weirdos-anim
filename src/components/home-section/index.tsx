import { RoundedTagline } from "./rounded-tagline"
import { Tagline } from "./tagline"
import { WeirdosVideo } from "./weirdos-video"

// margin: 0px auto;
export const HomeSection = (): JSX.Element => {
  return (
    <section
      id="#home"
      className="relative min-h-[calc(100vh_-_5rem)] w-full bg-white"
    >
      <div className="bottom-8 m-auto flex min-h-[80vh] w-3/4 items-center justify-center ">
        <Tagline />
        <WeirdosVideo />
        <RoundedTagline />
      </div>
    </section>
  )
}
