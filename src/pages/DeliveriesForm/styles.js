import styled from 'styled-components';
import { darken } from 'polished';
import Async from 'react-select/async';

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
  margin-top: 20px;
  background: #fff;
  border-radius: 4px;
  padding: 15px 25px;
`;

export const BoxSelect = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
`;

export const Select = styled(Async).attrs({
  styles: {
    option: (provided, state) => ({
      ...provided,
      color: state.isFocused ? '#fff' : '#444',
      background: state.isFocused ? '#7d40e7' : '#fff',
      padding: 15,
    }),
    control: () => ({
      border: '1px solid #DDDDDD',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      height: '45px',
    }),
  },
})``;

export const InputBlock = styled.div`
  width: 100%;

  strong {
    color: #444;
    display: block;
    margin-bottom: 10px;
  }

  input {
    display: flex;
    width: 100%;
    height: 45px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
  }
`;
