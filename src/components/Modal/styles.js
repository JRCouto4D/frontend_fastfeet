import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;

  button {
    border: none;
    background: none;
    position: absolute;
    right: 15px;
    top: 15px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 450px;
    background: #fff;
    border-radius: 4px;
    padding: 30px 20px;

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
  }
`;
