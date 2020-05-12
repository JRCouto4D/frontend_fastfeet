import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 900px;
  min-width: 900px;
  margin: 30px auto 0;
  height: 100vh;

  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    strong {
      font-size: 24px;
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
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  width: 100%;
  margin-top: 20px;
`;

export const BoxForm = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 15px;

  div.name {
    grid-row: 1/2;
    grid-column: 1/4;
  }

  div.street {
    grid-row: 2/3;
    grid-column: 1/3;
  }

  div.number {
    grid-row: 2/3;
    grid-column: 3/4;
  }

  div.neighborhood {
    grid-row: 3/4;
    grid-column: 1/3;
  }

  div.complement {
    grid-row: 3/4;
    grid-column: 3/4;
  }

  div.city {
    grid-row: 4/5;
    grid-column: 1/2;
  }

  div.state {
    grid-row: 4/5;
    grid-column: 2/3;
  }

  div.zipcode {
    grid-row: 4/5;
    grid-column: 3/4;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    display: block;
    margin-bottom: 5px;
    color: #444;
  }

  input {
    display: flex;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 45px;
    padding-left: 15px;
    font-size: 16px;
  }
`;
