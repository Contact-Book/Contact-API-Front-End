import styled from 'styled-components';

export const CarroselComponent = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: transparent;

  .contacts {
    display: inline-grid;
    justify-content: flex-start;
    align-items: center;

    grid-template-columns: repeat(11);

    padding: 20px;

    min-width: 100%;
    overflow-x: auto;
    gap: 35px;

    ::-webkit-scrollbar {
      width: 0 !important;
    }
  }

  .contacts > * {
    grid-row: 1 / -1;
  }
`;
