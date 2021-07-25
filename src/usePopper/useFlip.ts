import { useLayoutEffect, useState } from 'react';
import { PopperPlacement } from './popper.types';

export const useFlip = (
  popper: HTMLDivElement,
  initialPlacement: PopperPlacement
) => {
  const [placement, setPlacement] = useState<PopperPlacement>(initialPlacement);

  useLayoutEffect(() => {
    if (popper) {
      const handleParentScroll = (e: Event) => {
        if (popper.parentElement) {
          const parent = popper.parentElement;
          const bottomBound = popper.offsetTop + popper.offsetHeight;
          const topBound = popper.offsetTop;
          const leftBound = popper.offsetLeft;
          const rightBound = popper.offsetLeft + popper.offsetWidth; 
          if (
            placement === 'bottom' &&
            bottomBound > parent.scrollTop + parent.offsetHeight
          ) {
            setPlacement('top');
          } else if (placement === 'top' && topBound < parent.scrollTop) {
            setPlacement('bottom');
          } else if (placement === 'left' && leftBound < parent.scrollLeft) {
            setPlacement('right');
          } else if (
            placement === 'right' &&
            rightBound > parent.scrollLeft + parent.offsetWidth
          ) {
            setPlacement('left');
          }
        }
      };
      popper?.parentElement?.addEventListener('scroll', handleParentScroll);
      return () =>
        popper.parentElement?.removeEventListener('scroll', handleParentScroll);
    }
  });

  return placement;
};
