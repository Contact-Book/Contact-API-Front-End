import styled from 'styled-components';

export const FormComponent = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  gap: 15px;

  width: 50%;
  height: 50%;

  background-color: rgb(219, 223, 224, 0.5);

  border: 0.5px solid #354247;
  border-radius: 10px;

  padding: 60px 0 30px 0;

  .link {
    height: 30px;

    background: transparent;

    border: none;

    font-size: 25px;

    color: #4b5e65;

    :hover {
      transition: all 0.5s ease-in-out;
      transform: scale(1.05);
      color: #edeff0;
    }
  }

  .handleChangePage {
    background: transparent;

    border: none;

    height: 30px;

    font-size: 15px;

    color: #4b5e65;

    :hover {
      transition: all 0.5s ease-in-out;
      transform: scale(1.05);
      color: #edeff0;
    }
  }

  label {
    display: none;
  }
`;
