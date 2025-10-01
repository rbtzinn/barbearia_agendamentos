import Container from '@/components/Container';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShopBySlug } from '@/services/firestore';
import ShopPublicCard from '@/components/ShopPublicCard';

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
        <ShopPublicCard id="" name="Carregando..." location="" />
      </Container>
    );

  return (
    <Container>
      <ShopPublicCard id={shop.id} name={shop.name} location={shop.location} />
    </Container>
  );
}
