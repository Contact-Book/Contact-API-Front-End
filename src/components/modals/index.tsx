import React, { useContext } from 'react';
import { AppContext } from '../../context';
import Form from '../Form';
import Input from '../Input';

import { Container, DeleteComponent, EditComponent } from './style';

const ToastModal = () => {
  const { handleClose, handleDelete, edit, register } = useContext(AppContext);
  return (
    <Container>
      {edit ? (
        <EditComponent>
          <button className="delete" onClick={handleClose}>
            X
          </button>
          <h4>Edit Contact</h4>
          <Form>
            <Input
              inputFor={'Name'}
              placeExemplo={'Name'}
              description={'Name'}
              inputType={'text'}
              object={'Name'}
              register={register}
            ></Input>
            <Input
              inputFor={'Email'}
              placeExemplo={'Email'}
              description={'Email'}
              inputType={'text'}
              object={'Email'}
              register={register}
            ></Input>
            <Input
              inputFor={'Phone Number'}
              placeExemplo={'+xx (xx) xxxx-xxxx'}
              description={'Phone Number'}
              inputType={'text'}
              object={'phoneNumber'}
              register={register}
            ></Input>
            <button className="link" type="submit">{`${'Edit'} ${'>'}`}</button>
          </Form>
        </EditComponent>
      ) : (
        <DeleteComponent>
          <button className="delete" onClick={handleClose}>
            X
          </button>
          <div className="container">
            <span className="message">
              Are you sure you want to delete this contact?
            </span>
          </div>
          <button className="confirm" onClick={handleDelete}>
            confirm
          </button>
        </DeleteComponent>
      )}
    </Container>
  );
};

export default ToastModal;
