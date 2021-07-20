import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e48080;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 10px;
  overflow-y: scroll;
  position: relative;
`;

export const View = styled.div`
  background-color: white;
  width: 2000px;
  height: 2000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Popcorn = styled.div`
  width: 250px;
  height: 250px;
  background-color: #86eafc;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Popper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: fit-content;
  height: fit-content;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: white;
  filter: drop-shadow(0px 2px 8px rgba(13, 51, 32, 0.3));
  color: black;
`;

export const Button = styled.button`
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background-color: #ef3aa2;
    margin-top: 50px;
`;
