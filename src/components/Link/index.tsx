import { useNavigate } from 'react-router-dom';
import { Container } from './style';

interface ILinkProps {
  content: string;
  to: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Link = ({ content, to, className, type }: ILinkProps) => {
  const navigate = useNavigate();
  return (
    <Container type={type} className={className} onClick={() => navigate(to!)}>
      {content}
    </Container>
  );
};

export default Link;
