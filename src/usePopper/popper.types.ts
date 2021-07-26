export type Styles = {
  [key: string]: React.CSSProperties;
};

export type PopperState = {
  styles: Styles;
};

export type PopperPlacement = 'top' | 'right' | 'bottom' | 'left';

export type PopperStrategy =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky';

export type PopperOptions = {
  placement?: PopperPlacement;
  strategy?: PopperStrategy;
  // rest of the modifiers
};

export type UsePopperParams = {
  popcornElement: Element;
  popperElement: Element;
  options: PopperOptions;
};

export type PopperOffset = [number, number];
