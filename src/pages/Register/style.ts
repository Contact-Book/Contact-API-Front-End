import styled from 'styled-components';

interface IPageProps {
  bgUrl: string;
}

export const RegisterComponent = styled.main<IPageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 70px;

  width: 100vw;
  height: 100vh;

  background-image: url(${({ bgUrl }) => bgUrl});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .page.title {
    font-size: 50px;
    font-weight: lighter;

    color: rgb(219, 223, 224, 0.5);
  }
`;
