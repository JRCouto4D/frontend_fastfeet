import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  width: 500px;
  max-width: 360px;
  border-radius: 4px;
  text-align: center;
  padding: 30px 30px;

  img {
    margin: 30px auto;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: left;

    strong {
      font-size: 14px;
      font-family: 'Roboto';
      margin-bottom: 5px;
      color: #444444;
    }

    input {
      height: 45px;
      padding: 0 5px;
      border: 1px solid #dddddd;
      border-radius: 4px;
      margin-bottom: 15px;
      font-family: 'Roboto';
      font-size: 16px;
      color: #333;
    }

    button {
      height: 45px;
      text-align: center;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      background: #7d40e7;
      border: none;
      border-radius: 4px;
      margin-bottom: 30px;
    }

    span {
      color: #f64c75;
      font-weight: bold;
      align-self: flex-start;
      margin: -10px 0 10px;
    }
  }
`;
