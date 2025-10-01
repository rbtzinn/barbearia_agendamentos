// components/ShopPublicCard/index.tsx
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import * as S from './styles';

type ShopPublicCardProps = {
  id: string;
  name: string;
  location: string;
};

export default function ShopPublicCard({ id, name, location }: ShopPublicCardProps) {
  return (
    <Card>
      <S.Title>{name}</S.Title>
      <S.Location>{location}</S.Location>
      <Link to={`/book/${id}`}>
        <Button>Agendar</Button>
      </Link>
    </Card>
  );
}
