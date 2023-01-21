export function useAnimate(delayIndex: number, duration: number) {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: duration,
        delay: 0.2 * delayIndex,
      },
    },
  };

  return cardVariants;
}
