import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 1200px;
  margin: 0 auto auto;
  padding-top: 25px;

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
    margin: 15px 0 15px;

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
`;

export const Content = styled.div`
  ul {
    width: 100%;
    display: grid;
    grid-gap: 14px;
    padding-bottom: 30px;

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
        position: relative;
        display: flex;
        padding-right: 12px;
      }
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
