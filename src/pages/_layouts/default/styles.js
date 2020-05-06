import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  widows: 100%;
  min-width: 1200px;
  height: 100%;
  background: #f5f5f5;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 1200px;
  margin: 35px auto 0;

  h1 {
    font-size: 24px;
    color: #444444;
  }

  header {
    width: 100%;
    max-width: 1100px;
    min-width: 1100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 35px 0 25px;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 1px solid #dddddd;
      border-radius: 4px;
      background: #fff;
      width: 330px;

      svg {
        height: 38px;
        width: 38px;
        padding-left: 15px;
      }

      input {
        width: 100%;
        border: none;
        margin-left: 5px;
        height: 36px;
        font-size: 14px;

        &::placeholder {
          color: #999999;
        }
      }
    }

    button {
      background: #7d40e7;
      width: 142px;
      height: 36px;
      color: #fff;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: ${darken(0.05, '#7d40e7')};
      }
    }
  }

  table {
    width: 100%;
    min-width: 1100px;
    display: grid;
    border-collapse: collapse;
    grid-gap: 15px;

    tr {
      background: #fff;
      border-radius: 5px;
      align-items: center;
    }

    th {
      padding: 10px;
      background: #f5f5f5;
      text-align: left;
    }

    td {
      padding: 10px;
    }
  }
`;
