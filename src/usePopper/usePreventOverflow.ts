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
        // if (popper.parentElement) {
        //   const parent = popper.parentElement;
        //   console.log(parent.scrollLeft-popper.offsetLeft, popcorn.offsetLeft / 2)
        //   if (parent.scrollLeft > popper.offsetLeft) {
        //     setOffset([
        //       Math.min(offset[0] + popcorn.offsetLeft / 2, offset[0] + parent.scrollLeft - popper.offsetLeft),
        //       offset[1],
        //     ]);
        //   }
        // }
      };
      popper?.parentElement?.addEventListener('scroll', handleParentScroll);
      return () =>
        popper.parentElement?.removeEventListener('scroll', handleParentScroll);
    }
  });

  return offset;
};
