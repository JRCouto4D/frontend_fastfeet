import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;

  strong {
    font-size: 24px;
    color: #444;
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

export const TableProblems = styled.ul`
  list-style: none;
  width: 100%;
  display: grid;
  grid-gap: 16px;
  margin: 20px 0 0;

  li.header {
    display: grid;
    grid-template-columns: 200px 1fr auto;
    background: #f5f5f5;

    strong {
      font-size: 16px;
      color: #444;
    }

    strong:first-child {
      padding-left: 10px;
    }
  }

  li {
    display: grid;
    grid-template-columns: 200px 1fr auto;
    background: #fff;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 5px;

    strong {
      font-size: 16px;
      color: #666;
    }

    span:first-child {
      padding-left: 10px;
    }

    div.actions {
      div {
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
