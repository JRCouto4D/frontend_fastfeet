import styled from 'styled-components';
import SelectInput from 'react-select';

export const Container = styled.div`
  width: 900px;
  max-width: 900px;
  margin: auto;

  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    h1 {
      font-size: 26px;
      color: #444444;
      display: block;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      button {
        width: 112px;
        height: 36px;
        border: none;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #7d40e7;
        color: #fff;
        font-weight: bold;
      }

      button.leftButton {
        background: #cccccc;
        margin-right: 15px;
      }
    }
  }
`;

export const Content = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 4px;
  margin-top: 25px;
`;

export const BoxSelect = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
`;

export const InputBlock = styled.div`
  strong {
    color: #444444;
    display: block;
    margin-bottom: 10px;
  }

  #product {
    display: flex;
    width: 100%;
    height: 45px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
  }
`;

export const Select = styled(SelectInput).attrs({
  styles: {
    control: () => ({
      display: 'flex',
      border: '1px solid #DDDDDD',
      borderRadius: '4px',
      color: '#999999',
      height: '45px',
    }),

    option: (provided, state) => ({
      ...provided,
      background: state.isFocused ? '#7d40e7' : '#fff',
      color: state.isFocused ? '#fff' : '#999',
    }),
  },
})``;
