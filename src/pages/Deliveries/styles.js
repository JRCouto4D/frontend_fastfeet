import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;

  header {
    strong {
      font-size: 24px;
      color: #444;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;

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
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.06, '#7d40e7')};
        }
      }
    }
  }

  ul {
    width: 100%;
    display: grid;
    grid-gap: 15px;

    li.header {
      margin-top: 3px;
      background: #f5f5f5;
      display: grid;
      grid-template-columns: 100px 210px 230px 100px 130px 1fr auto;
    }

    li {
      display: grid;
      grid-template-columns: 100px 210px 230px 100px 130px 1fr auto;
      background: #fff;
      border-radius: 4px;
      justify-content: center;
      align-items: center;
      padding: 12px;

      div.avatar {
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          margin-right: 5px;
        }
      }

      div.actions {
        padding-right: 5px;
      }
    }
  }
`;
export const SearchInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 330px;
  background: #fff;

  svg {
    height: 38px;
    width: 38px;
    padding-left: 15px;
  }

  input {
    border: none;
    width: 100%;
    height: 36px;
    margin-left: 5px;
  }
`;

export const BoxActions = styled.div`
  padding: 0 10px;

  button {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 16px;
    padding: 10px 0;

    &:hover {
      text-decoration: underline;
    }

    span {
      margin-left: 10px;
    }
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }

  to{
    transform: rotate(360deg)
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 300px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    animation: ${rotate} 1s linear infinite;
  }
`;

export const Navigation = styled.div`
  display: flex;
  max-width: 80px;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  button {
    background: #7d40e7;
    padding: 5px;
    border: none;
    :disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    &:hover {
      background: ${darken(0.05, '#7d40e7')};
      :disabled {
        opacity: 0.3;
      }
    }
  }
`;
