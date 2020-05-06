import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  ul {
    width: 100%;
    display: grid;
    grid-gap: 15px;

    li.header {
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
