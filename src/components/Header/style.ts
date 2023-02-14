import styled from 'styled-components';

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 30px 10px 30px;

  width: 100%;

  background: transparent;

  border-bottom: 0.5px solid #fff;

  .web.title {
    font-size: 20px;
    font-weight: lighter;

    color: #fff;
  }

  .profile {
    display: flex;
    align-items: center;

    height: 50px;

    gap: 20px;

    .userName {
      color: #fff;
    }

    img {
      width: 40px;
      height: 40px;

      border-radius: 50%;
    }
  }

  .exit {
    font-size: 25px;
    color: #fff;

    :hover {
      transition: all 0.5s ease-in-out;
      transform: scale(1.1);
      color: #911e1e;
    }
  }
`;
