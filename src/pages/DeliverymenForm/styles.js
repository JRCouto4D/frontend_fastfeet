import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 900px;
  min-width: 900px;
  margin: 30px auto;

  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    strong {
      font-size: 26px;
      color: #444;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        border: none;
        border-radius: 4px;
        width: 112px;
        height: 36px;
        background: #7d40e7;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: bold;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.05, '#7d40e7')};
        }
      }

      .backButton {
        background: #cccccc;
        margin-right: 15px;

        &:hover {
          background: ${darken(0.05, '#cccccc')};
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  width: 100%;
  margin-top: 30px;

  div {
    width: 100%;
  }
`;

export const InputBlock = styled.div`
  width: 100%;

  strong {
    display: block;
    margin-bottom: 5px;
    color: #444;
  }

  input {
    display: flex;
    width: 100%;
    height: 45px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
  }

  & + div {
    margin-top: 20px;
  }
`;
