export const WeirdosVideo = (): JSX.Element => (
  <div className="flex h-full w-1/2 flex-col items-center justify-center">
    <div className="w-100">
      <video
        width="640"
        height="240"
        src="/vid-cartoons.mp4"
        autoPlay
        loop
        muted
      />
    </div>
  </div>
)
