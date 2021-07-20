import React, { useCallback, useEffect, useLayoutEffect, useMemo } from "react";

type Styles = {
  [key: string]: React.CSSProperties;
};

type PopperState = {
  styles: Styles;
};

type PopperPlacement = "top" | "right" | "bottom" | "left";

type PopperStrategy = "static" | "relative" | "absolute" | "fixed" | "sticky";

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
  options: PopperOptions = {
    placement: "bottom",
  }
) => {
  const [popcornRect, setPopcornRect] = React.useState<DOMRect>();

  const [state, setState] = React.useState<PopperState>({
    styles: {
      popper: {
        position: "absolute",
      },
    },
  });

  const calculatePosition = useCallback(
    (placement?: PopperPlacement) => {
      switch (placement) {
        case "bottom":
          return {
            top: popcorn?.offsetTop + popcorn?.offsetHeight + 16, // offset,
            left:
              popcorn?.offsetLeft +
              popcorn?.offsetWidth / 2 -
              popper?.offsetWidth / 2,
          };
        case "top":
          return {
            top: popcorn?.offsetTop - popper?.offsetHeight - 16,
            left:
              popcorn?.offsetLeft +
              popcorn?.offsetWidth / 2 -
              popper?.offsetWidth / 2,
          };
        case "left":
          return {
            top:
              popcorn?.offsetTop +
              popcorn?.offsetHeight / 2 -
              popper?.offsetHeight / 2,
            left: popcorn?.offsetLeft - popper?.offsetWidth - 16,
          };
        case "right":
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

  useEffect(() => {
    setState({
      styles: {
        popper: {
          position: "absolute",
          ...calculatePosition(options?.placement),
        },
      },
    });
  }, [options.placement, calculatePosition]);

  return state;
};
