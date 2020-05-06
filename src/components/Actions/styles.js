import styled from 'styled-components';
import { MdKeyboardArrowUp } from 'react-icons/md';

export const Container = styled.div`
  position: relative;
  width: 130px;
  margin: 0;
`;

export const Badge = styled.button`
  position: relative;
  left: calc(100% - 19px);
  border: none;
  background: none;
`;

export const KeyBoard = styled(MdKeyboardArrowUp)`
  position: absolute;
  width: 15px;
  height: 20px;
  top: calc(100% - 12px);
  left: calc(100% - 17px);
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

export const ActionsList = styled.div`
  div {
    position: absolute;
    top: calc(100% + 1px);
    left: calc(100% - 87px);
    width: 150px;
    padding: 15px 10px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    display: ${(props) => (props.visible ? 'block' : 'none')};

    button {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      padding: 8px 5px;
      align-items: center;
      color: #999;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      background: none;

      :hover {
        color: #444;
      }

      span {
        font-size: 16px;
        margin-left: 7px;
      }
    }
  }
`;
