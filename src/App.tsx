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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { styles } = usePopper(popcorn, popper, {
    placement: 'bottom',
  });

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft = wrapperRef.current.offsetWidth / 2;
      wrapperRef.current.scrollTop = wrapperRef.current.offsetHeight / 2;
    }
  }, []);
  
  return (
    <Container>
      <Wrapper ref={wrapperRef}>
        <View>
          <Popcorn ref={setPopcorn}>Popcorn Content</Popcorn>
          <Popper ref={setPopper} style={styles.popper}>
            Tooltip Info
          </Popper>
        </View>
      </Wrapper>
    </Container>
  );
}

export default App;
