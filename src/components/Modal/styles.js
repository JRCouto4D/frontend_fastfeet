import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);

  button {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background: none;
  }
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 29px;
  width: 450px;

  strong {
    font-size: 14px;
    color: #444444;
  }

  p {
    font-size: 16px;
    color: #666666;
    margin-top: 10px;
  }

  hr {
    margin: 10px 0;
    opacity: 0.2;
  }

  img {
    width: 234px;
    margin: 15px auto 5px;
  }

  div.assign {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
