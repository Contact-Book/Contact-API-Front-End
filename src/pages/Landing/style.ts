import styled from 'styled-components';

interface IPageProps {
  bgUrl: string;
}

export const LandingComponent = styled.main<IPageProps>`
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

  .link {
    background: transparent;

    border: none;

    font-size: 25px;

    color: #8aadba;

    :hover {
      transition: all 0.5s ease-in-out;
      transform: scale(1.05);
      color: #edeff0;
    }
  }

  .subtitle {
    display: flex;
    align-items: center;

    color: #a5afb2;

    margin-bottom: 60px;
  }
`;
