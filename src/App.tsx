import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import {
  Button,
  Container,
  Popcorn,
  Popper,
  View,
  Wrapper,
} from './App.styled';
import { usePopper } from './usePopper/usePopper';

function App() {
  const [popcorn, setPopcorn] = useState<any>();
  const [popper, setPopper] = useState<any>();
  const [parent, setParent] = useState<any>();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { styles } = usePopper(popcorn, popper, {
    placement: 'bottom',
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
        </Popper>
      </Wrapper>
    </Container>
  );
}

export default App;
