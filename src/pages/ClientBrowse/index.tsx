import { useState } from 'react';
import { listShopsByLocation, Shop } from '@/services/firestore';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import * as S from './styles';

export default function ClientBrowse() {
  const [term, setTerm] = useState('');
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch() {
    try {
      setLoading(true);
      setError(null);
      const results = await listShopsByLocation(term);
      setShops(results);
    } catch (e: any) {
      setError('Erro ao buscar barbearias');
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <h2>Barbearias</h2>
      <S.SearchBar>
        <S.SearchInput
          type="text"
          placeholder="Digite a cidade ou bairro"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </Button>
      </S.SearchBar>

      {loading && <p>Carregando...</p>}
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

      {!loading && shops.length === 0 && <p>Nenhuma barbearia encontrada.</p>}
      {shops.map((shop) => (
        <S.ShopCard key={shop.id}>
          <S.ShopCardContent>
            <h3>{shop.name}</h3>
            <p>{shop.location}</p>
            <Link to={`/s/${shop.slug}`}>
              <Button>Ver horários disponíveis</Button>
            </Link>
          </S.ShopCardContent>
        </S.ShopCard>
      ))}
    </Container>
  );
}
