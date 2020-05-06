import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  min-width: 1200px;
  padding: 12px 10px 0;
  background: #fff;
  height: 64px;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.2);
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
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
  }
`;

export const Profile = styled.div`
  div {
    display: flex;
    flex-direction: column;

    strong {
      font-family: 'Roboto';
      display: block;
      font-size: 14px;
      font-weight: bold;
      color: #666666;
      margin-bottom: 5px;
    }

    > button {
      background: none;
      border: none;
      color: #de3b3b;
      font-size: 14px;
      font-weight: normal;

      &:hover {
        font-weight: bold;
      }
    }
  }
`;
