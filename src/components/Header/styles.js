import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 20px 10px;
  background: #fff;
  height: 64px;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 135px;
    height: 26px;
    margin-right: 25px;
  }

  nav {
    padding: 5px 25px;
    border-left: 1px solid #dddddd;

    a {
      margin-right: 25px;
      font-family: 'Roboto';
      font-size: 15px;
      color: #999999;
      font-weight: bold;

      &:hover {
        color: ${darken(0.3, '#999')};
      }
    }
  }
`;

export const Profile = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: bold;
    color: #666666;
    margin-bottom: 5px;
  }

  > button {
    background: none;
    border: none;
    color: #de3b3b;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: normal;

    &:hover {
      font-weight: bold;
    }
  }
`;
