import styled from 'styled-components';

export const Container = styled.div`
  button {
    border: none;
    background: none;
    width: 100%;
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
    color: #999;
  }
`;

export const ActionList = styled.div`
  position: absolute;
  min-width: 150px;
  padding: 15px 0px;
  background: #fff;
  border-radius: 4px;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
`;

export const Badge = styled.div``;
export const ActionsList = styled.div``;
