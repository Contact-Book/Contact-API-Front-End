import { useContext } from 'react';
import Card from '../../components/Card';
import Carrosel from '../../components/Carrosel';
import Header from '../../components/Header';
import { AppContext } from '../../context';
import { database_contacts } from '../../database';
import { DashComponent, Main } from './style';

const DashboardPage = (): JSX.Element => {
  const { cardState, handleEdit, handleRemove } = useContext(AppContext);

  return (
    <DashComponent bgUrl="/logo.jpeg">
      <Main>
        <Header />
        <Carrosel>
          {database_contacts?.map((contact) => {
            return (
              <Card id={contact.id}>
                {cardState === contact.id ? (
                  <>
                    <div className="details">
                      <h3 className="name">{contact.name}</h3>
                      <span className="email">{contact.email}</span>
                      <span className="number">{contact.phone_number}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="assets">
                      <span className="edit" onClick={handleEdit}>
                        Edit
                      </span>
                      <span className="delete" onClick={handleRemove}>
                        Delete
                      </span>
                    </div>

                    <div className="details">
                      <h3 className="name">{contact.name}</h3>
                      <span className="email">{contact.email}</span>
                      <span className="number">{contact.phone_number}</span>
                    </div>
                  </>
                )}
              </Card>
            );
          })}
        </Carrosel>
      </Main>
    </DashComponent>
  );
};

export default DashboardPage;
