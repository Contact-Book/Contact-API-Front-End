import styled from 'styled-components';

interface IPageProps {
  bgUrl: string;
}

export const DashComponent = styled.div<IPageProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  gap: 70px;

  width: 100vw;
  height: 100vh;

  background-image: url(${({ bgUrl }) => bgUrl});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  position: absolute;

  width: 100%;
  height: 100%;

  /* background: rgb(219, 223, 224, 0.1); */
`;
