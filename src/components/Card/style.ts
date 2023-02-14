import styled from 'styled-components';

interface IPageProps {
  scale: number | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseOut?: React.MouseEventHandler<HTMLLIElement> | undefined;
  active: boolean;
}

export const CardComponent = styled.li<IPageProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 360px;
  height: 335px;
  max-width: 600px;

  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKS8LHk5FZbfkH3gYuJHrHBzjYp3siI_0sKA&usqp=CAU');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-radius: 42px;

  margin-right: 60px;

  opacity: 50%;
  margin: 0 auto;
  cursor: pointer;

  background: ${({ active }) =>
    active &&
    `
   
    #07090a

  `};

  justify-content: ${({ active }) =>
    active &&
    `
   
   center

  `};

  :hover {
    transition: all 0.5s ease-in-out;
    transform: scale(${({ scale }) => scale});

    color: #edeff0;
  }

  .assets {
    display: flex;
    justify-content: space-between;

    width: 100%;

    padding: 0 20px 0 20px;

    margin-top: 20px;

    .edit {
      :hover {
        color: #8aadba;
      }
    }

    .delete {
      :hover {
        color: #911e1e;
      }
    }
  }

  .details {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border-radius: 42px;

    width: 100%;

    color: #07090a;

    margin-bottom: 30%;

    color: ${({ active }) =>
      active &&
      `
   
    #fff

  `};

    margin-bottom: ${({ active }) =>
      active &&
      `
   
   0

  `};

    .name {
      font-size: 2.5vw;
    }

    .email {
      font-size: 1vw;
    }

    :hover {
    }
  }

  .number {
    font-size: 2.5vw;
  }

  .modal {
    display: flex;

    width: 100%;
    height: 100%;

    background: rgb(219, 223, 224, 1);
  }
`;
