import React, { useCallback, useEffect } from 'react';
import { PopperOffset } from './popper.types';
import { useFlip } from './useFlip';
import { usePreventOverflow } from './usePreventOverflow';

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
  offset?: PopperOffset;
  // rest of the modifiers
};

// type UsePopperParams = {
//   popcornElement: Element;
//   popperElement: Element;
//   options: PopperOptions;
// };

export const usePopper = (
  popcorn: HTMLDivElement,
  popper: HTMLDivElement,
  options: PopperOptions = {
    placement: 'bottom',
    offset: [0, 0],
  }
) => {
  const placement = useFlip(
    popper,
    options.placement ? options.placement : 'bottom'
  );
  const offset = usePreventOverflow(
    popcorn,
    popper,
    options.offset ? options.offset : [0, 0]
  );
  const calculatePosition = useCallback(
    (placement?: PopperPlacement) => {
      switch (placement) {
        case 'bottom':
          return {
            top: popcorn?.offsetTop + popcorn?.offsetHeight + offset[1],
            left:
              popcorn?.offsetLeft +
              popcorn?.offsetWidth / 2 -
              popper?.offsetWidth / 2 + offset[0],
          };
        case 'top':
          return {
            top: popcorn?.offsetTop - popper?.offsetHeight - offset[1],
            left:
              popcorn?.offsetLeft +
              popcorn?.offsetWidth / 2 -
              popper?.offsetWidth / 2 + offset[0],
          };
        case 'left':
          return {
            top:
              popcorn?.offsetTop +
              popcorn?.offsetHeight / 2 -
              popper?.offsetHeight / 2 + offset[0],
            left: popcorn?.offsetLeft - popper?.offsetWidth - offset[1],
          };
        case 'right':
          return {
            top:
              popcorn?.offsetTop +
              popcorn?.offsetHeight / 2 -
              popper?.offsetHeight / 2 + offset[0],
            left: popcorn?.offsetLeft + popcorn?.offsetWidth + offset[1],
          };
        default:
          return {
            top: popcorn?.offsetTop + popcorn?.offsetHeight + offset[1],
            left:
              popcorn?.offsetLeft +
              popcorn?.offsetWidth / 2 -
              popper?.offsetWidth / 2 + offset[0],
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
          ...calculatePosition(placement),
        },
      },
    });
  }, [placement, calculatePosition]);

  return state;
};
