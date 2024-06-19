import { useAnimatedName } from ".";

export const AnimatedName = () => {
  const { ref, text } = useAnimatedName();

  return (
    <h1 ref={ref} className='md:text-6xl sm:text-4xl text-3xl font-medium text-white'>
      {text}
    </h1>
  )
}
