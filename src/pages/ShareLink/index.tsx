import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/services/firebase';
import * as S from './styles';

export default function ShareLink() {
  const [params] = useSearchParams();
  const shopId = params.get('shopId')!;
  const [slug, setSlug] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    async function load() {
      const snap = await getDoc(doc(db, 'shops', shopId));
      setSlug((snap.data() as any)?.slug);
    }
    load();
  }, [shopId]);

  const url = `${window.location.origin}/s/${slug}`;

  async function handleCopy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Container>
      <Card>
        <h2>Link de agendamento</h2>
        <p>Compartilhe com seus clientes:</p>
        <S.ShareCode>{url}</S.ShareCode>

        <div style={{ marginTop: 12 }}>
          <Button onClick={handleCopy} variant="ghost">
            {copied ? 'Link copiado!' : 'Copiar link'}
          </Button>
        </div>
      </Card>
    </Container>
  );
}
