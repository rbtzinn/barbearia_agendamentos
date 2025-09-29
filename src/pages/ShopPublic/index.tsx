import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShopBySlug } from '@/services/firestore';
import * as S from './styles';

export default function ShopPublic() {
  const { slug } = useParams();
  const [shop, setShop] = useState<any>(null);

  useEffect(() => {
    if (!slug) return;
    getShopBySlug(slug).then(setShop);
  }, [slug]);

  if (!shop)
    return (
      <Container>
        <Card>Carregando...</Card>
      </Container>
    );

  return (
    <Container>
      <Card>
        <h2>{shop.name}</h2>
        <S.LocationText>{shop.location}</S.LocationText>
        <Link to={`/book/${shop.id}`}>
          <Button>Agendar</Button>
        </Link>
      </Card>
    </Container>
  );
}
