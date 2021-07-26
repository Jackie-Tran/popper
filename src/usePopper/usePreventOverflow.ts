import { useLayoutEffect, useState } from 'react';
import { PopperOffset } from './popper.types';

export const usePreventOverflow = (
  popcorn: HTMLDivElement,
  popper: HTMLDivElement,
  initialOffset: [number, number]
) => {
  const [offset, setOffset] = useState<PopperOffset>(initialOffset);

  useLayoutEffect(() => {
    if (popcorn && popper) {
      const handleParentScroll = (e: Event) => {
        
      };
      popper?.parentElement?.addEventListener('scroll', handleParentScroll);
      return () =>
        popper.parentElement?.removeEventListener('scroll', handleParentScroll);
    }
  });

  return offset;
};
