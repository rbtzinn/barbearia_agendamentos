import { useEffect, useState } from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { getShopByOwner } from '@/services/firestore';
import { useAuthStore } from '@/stores/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/services/firebase';
import InputMask from 'react-input-mask';
import ConfirmDialog from '@/components/ConfirmDialog';
import * as S from './styles';

export default function BarberProfile() {
  const { user } = useAuthStore();
  const [shop, setShop] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [dialogMessage, setDialogMessage] = useState<string | null>(null);
  const [dialogError, setDialogError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      if (!user) return;
      const shops = await getShopByOwner(user.uid);
      if (shops[0]) setShop(shops[0]);
    }
    load();
  }, [user]);

  function isPhoneValid(phone: string) {
    // regex que valida (99) 99999-9999 exatamente
    return /^\(\d{2}\)\s\d{5}-\d{4}$/.test(phone);
  }

  async function handleSave() {
    if (!shop?.id) return;

    // validação do telefone
    if (shop.whatsapp && !isPhoneValid(shop.whatsapp)) {
      setDialogError('Informe um número de WhatsApp válido no formato (99) 99999-9999.');
      return;
    }

    setLoading(true);
    try {
      const ref = doc(db, 'shops', shop.id);
      await updateDoc(ref, {
        name: shop.name,
        location: shop.location,
        instagram: shop.instagram || '',
        whatsapp: shop.whatsapp || '',
      });
      setDialogMessage('Dados da barbearia atualizados!');
    } catch (e: any) {
      setDialogError('Erro ao salvar: ' + e.message);
    } finally {
      setLoading(false);
    }
  }

  if (!shop) {
    return (
      <Container>
        <Card>
          <p>Nenhuma barbearia cadastrada.</p>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Card>
        <h2>Minha Barbearia</h2>
        <S.FormGrid>
          <label>
            Nome
            <input
              value={shop.name}
              onChange={(e) => setShop({ ...shop, name: e.target.value })}
            />
          </label>
          <label>
            Localização
            <input
              value={shop.location}
              onChange={(e) => setShop({ ...shop, location: e.target.value })}
            />
          </label>
          <label>
            Instagram
            <input
              placeholder="@suaBarbearia"
              value={shop.instagram || ''}
              onChange={(e) => setShop({ ...shop, instagram: e.target.value })}
            />
          </label>
          <label>
            WhatsApp
            <InputMask
              mask="(99) 99999-9999"
              placeholder="(99) 99999-9999"
              value={shop.whatsapp || ''}
              onChange={(e) => setShop({ ...shop, whatsapp: e.target.value })}
            >
              {(inputProps: any) => <input {...inputProps} type="text" />}
            </InputMask>
          </label>
        </S.FormGrid>

        <Button onClick={handleSave} loading={loading} disabled={loading}>
          Salvar
        </Button>
      </Card>

      {/* Dialog de sucesso */}
      {dialogMessage && (
        <ConfirmDialog
          title="Sucesso"
          message={dialogMessage}
          onCancel={() => setDialogMessage(null)}
          onConfirm={() => setDialogMessage(null)}
          confirmLabel="OK"
          simple
        />
      )}

      {/* Dialog de erro */}
      {dialogError && (
        <ConfirmDialog
          title="Erro"
          message={dialogError}
          onCancel={() => setDialogError(null)}
          onConfirm={() => setDialogError(null)}
          confirmLabel="Fechar"
          simple
        />
      )}
    </Container>
  );
}
