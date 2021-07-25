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
  position: relative;
  width: 600px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: scroll;
  overscroll-behavior: contain;
  border: 2px dashed #ff6b81;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  ::after {
      content: '';
      display: block;
      position: absolute;
      width: 2000px;
      height: 2000px;
  }
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
  margin-left: auto;
  margin-top: auto;
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
