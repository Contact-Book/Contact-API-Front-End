import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  background: rgb(219, 223, 224, 0.2);

  .toast-modal {
    .toast-header {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const DeleteComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  top: 0;
  left: 0;
  width: 40%;
  height: 30%;

  background: rgb(219, 223, 224, 1);
  border-radius: 10px;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 0.5px solid #fff;

    height: 60%;
  }

  .confirm {
    border: none;

    margin: 20px;

    color: #911e1e;

    background: transparent;

    :hover {
      transition: all 0.5s ease-in-out;
      transform: scale(1.1);
    }
  }

  .delete {
    margin-top: 10px;
    margin-left: 80%;

    color: #4b5e65;

    border: none;
    background: transparent;

    :hover {
      transition: all 0.5s ease-in-out;
      color: #911e1e;
    }
  }
`;

export const EditComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  top: 0;
  left: 0;
  width: 40%;
  height: 75%;
  max-height: 400px;

  background: rgb(219, 223, 224, 1);
  border-radius: 10px;

  .delete {
    margin-top: 10px;
    margin-left: 80%;

    color: #4b5e65;

    border: none;
    background: transparent;

    :hover {
      transition: all 0.5s ease-in-out;
      color: #911e1e;
    }
  }

  h4 {
    color: #4b5e65;
  }

  form {
    width: 100%;
    height: 100%;

    border: none;

    padding: 0;
  }
`;
