import { SSL_OP_EPHEMERAL_RSA } from 'constants';
import React, { useCallback, useEffect, useLayoutEffect, useMemo } from 'react';

type Styles = {
  [key: string]: React.CSSProperties;
};

type PopperState = {
  styles: Styles;
};

type PopperPlacement = 'top' | 'right' | 'bottom' | 'left';

type PopperStrategy = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

type PopperOptions = {
  placement?: PopperPlacement;
  strategy?: PopperStrategy;
  // rest of the modifiers
};

type UsePopperParams = {
  popcornElement: Element;
  popperElement: Element;
  options: PopperOptions;
};

export const usePopper = (
  popcorn: HTMLDivElement,
  popper: HTMLDivElement,
  parent: HTMLDivElement,
  options: PopperOptions = {
    placement: 'bottom',
  }
) => {
  const calculatePosition = useCallback(
    (placement?: PopperPlacement) => {
      switch (placement) {
        case 'bottom':
          return {
            top: popcorn?.offsetTop + popcorn?.offsetHeight + 16, // offset,
            left:
              popcorn?.offsetLeft +
              popcorn?.offsetWidth / 2 -
              popper?.offsetWidth / 2,
          };
        case 'top':
          return {
            top: popcorn?.offsetTop - popper?.offsetHeight - 16,
            left:
              popcorn?.offsetLeft +
              popcorn?.offsetWidth / 2 -
              popper?.offsetWidth / 2,
          };
        case 'left':
          return {
            top:
              popcorn?.offsetTop +
              popcorn?.offsetHeight / 2 -
              popper?.offsetHeight / 2,
            left: popcorn?.offsetLeft - popper?.offsetWidth - 16,
          };
        case 'right':
          return {
            top:
              popcorn?.offsetTop +
              popcorn?.offsetHeight / 2 -
              popper?.offsetHeight / 2,
            left: popcorn?.offsetLeft + popcorn?.offsetWidth + 16,
          };
        default:
          return {
            top: popcorn?.offsetTop + popcorn?.offsetHeight + 16, // offset,
            left:
              popcorn?.offsetLeft +
              popcorn?.offsetWidth / 2 -
              popper?.offsetWidth / 2,
          };
      }
    },
    [popcorn, popper]
  );

  const [state, setState] = React.useState<PopperState>({
    styles: {
      popper: {
        position: 'absolute',
        ...calculatePosition(options?.placement),
      },
    },
  });

  useEffect(() => {
    setState({
      styles: {
        popper: {
          position: 'absolute',
          ...calculatePosition(options?.placement),
        },
      },
    });
  }, [options.placement, calculatePosition]);

  // flipping
  useLayoutEffect(() => {
    if (popcorn && popcorn.parentElement) {
      const handleParentScroll = (e: Event) => {
        if (popcorn.parentElement) {
          const parent = popcorn.parentElement;
          const bottomBound = popper.offsetTop + popper.offsetHeight;
          const topBound = popper.offsetTop;
          const leftBound = popper.offsetLeft;
          const rightBound = popper.offsetLeft + popper.offsetWidth;
          if (options.placement === 'bottom' && bottomBound > parent.scrollTop + parent.offsetHeight) {
            console.log('switch placement to top');
          } else if (options.placement === 'top' && topBound < parent.scrollTop) {
            console.log('switch placement to bottom');
          } else if (options.placement === 'left' && leftBound < parent.scrollLeft) {
              console.log('switch placement to right');
          } else if (options.placement === 'right' && rightBound > parent.scrollLeft + parent.offsetWidth) {
              console.log('switch placement to left');
          }
        }
      };
      popcorn.parentElement.addEventListener('scroll', handleParentScroll);
      return () => {
        if (popcorn.parentElement)
          return popcorn.parentElement.removeEventListener(
            'scroll',
            handleParentScroll
          );
      };
    }
  });

  return state;
};
