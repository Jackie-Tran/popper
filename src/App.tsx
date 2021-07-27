import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Container, Popcorn, Popper, Wrapper } from "./App.styled";
import { usePopper } from "./usePopper/usePopper";

function App() {
  const [popcorn, setPopcorn] = useState<any>();
  const [popper, setPopper] = useState<any>();
  const [arrow, setArrow] = useState<any>();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { styles } = usePopper(popcorn, popper, arrow, {
    placement: "bottom",
    offset: [0, 16],
  });

  useEffect(() => {
    if (wrapperRef.current) {
      //   wrapperRef.current.scrollLeft = wrapperRef.current.offsetWidth;
      //   wrapperRef.current.scrollTop = wrapperRef.current.offsetHeight;
    }
  }, []);

  return (
    <Container>
      <Wrapper ref={wrapperRef}>
        <Popcorn ref={setPopcorn}>Popcorn Content</Popcorn>
        <Popper ref={setPopper} style={styles.popper}>
          Tooltip Info
          <div ref={setArrow} style={styles.arrow} />
        </Popper>
      </Wrapper>
    </Container>
  );
}

export default App;
