export const WeirdosVideo = (): JSX.Element => (
  <div className='w-1/2 h-full flex flex-col justify-center items-center'>
    <div className='w-100'>
      <video
        width='640'
        height='240'
        src='/vid-cartoons.mp4'
        autoPlay
        loop
        muted
      />
    </div>
  </div>
);
