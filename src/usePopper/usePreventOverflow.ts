import { useLayoutEffect, useState } from "react";
import { PopperOffset } from "./popper.types";

export const usePreventOverflow = (
  popcorn: HTMLDivElement,
  popper: HTMLDivElement,
  initialOffset: [number, number]
) => {
  const [offset, setOffset] = useState<PopperOffset>(initialOffset);

  useLayoutEffect(() => {
    if (popcorn && popper) {
      const handleParentScroll = (e: Event) => {
        if (popper.parentElement) {
          const parent = popper.parentElement;
          const xBounds = parent.offsetWidth/2;
          // const yBounds = parent.offsetHeight/2;
          if (parent.scrollLeft > popper.offsetLeft) {
            const newSkid = parent.scrollLeft - popper.offsetLeft;
            console.log(xBounds, newSkid)
            setOffset([
              Math.min(newSkid, xBounds),
              offset[1],
            ]);
          }
        }
      };
      popper?.parentElement?.addEventListener("scroll", handleParentScroll);
      return () =>
        popper.parentElement?.removeEventListener("scroll", handleParentScroll);
    }
  });

  return offset;
};
