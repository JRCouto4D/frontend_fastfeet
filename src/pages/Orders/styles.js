import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;

  header {
    h1 {
      display: block;
      font-family: 'Roboto';
      font-size: 24px;
    }
  }
`;

export const BoxTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0 25px;

  > div {
    display: flex;
    align-items: center;

    > svg {
      padding-left: 10px;
      background: #fff;
      border-top: 1px solid #dddddd;
      border-left: 1px solid #dddddd;
      border-bottom: 1px solid #dddddd;
      width: 30px;
      height: 36px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    input {
      padding-left: 10px;
      margin-left: -5px;
      border-radius: 4px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      border-left: rgba(0, 0, 0, 0);
      border-top: 1px solid #dddddd;
      border-right: 1px solid #dddddd;
      border-bottom: 1px solid #dddddd;
      height: 36px;
      width: 220px;
      color: #999999;
      font-family: 'Roboto';
      font-size: 14px;

      &::placeholder {
        color: #999999;
      }
    }
  }

  button {
    background: #7d40e7;
    border-radius: 4px;
    width: 142px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    color: #fff;
    font-weight: bold;
  }

  svg {
    margin-right: 5px;
  }
`;
