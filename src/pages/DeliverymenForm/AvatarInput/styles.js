import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
      background: #ddd;
    }

    input {
      display: none;
    }
  }
`;
