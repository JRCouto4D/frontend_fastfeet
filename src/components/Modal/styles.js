import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    position: absolute;
    left: calc(100% - 80px);
    top: calc(0% + 20px);
    border: none;
    background: none;
  }
`;

export const Content = styled.div`
  width: 450px;
  min-width: 450px;
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  h1 {
    font-size: 20px;
    display: block;
    margin-bottom: 20px;
  }

  > strong {
    display: block;
    margin-bottom: 10px;
    color: #444444;
  }

  p {
    color: #666;
    font-size: 16px;
    line-height: 28px;
  }

  hr {
    margin: 15px 0;
    opacity: 0.3;
  }

  div {
  }
`;

export const InfoDelivery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const BoxSignature = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: relative;
    width: 390px;
    height: 200px;
  }
`;
