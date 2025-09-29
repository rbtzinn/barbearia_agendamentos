# BarberBook (React + Vite + TS + styled-components + Firebase)

## Como rodar

1. Crie um projeto no Firebase e habilite **Authentication** (Google e/ou Anônimo, se quiser).
2. Crie o **Firestore** (modo produção) e as coleções serão criadas automaticamente:
   - `shops` (docs com { id, ownerId, name, location, slug, createdAt })
   - `schedules` (doc por shopId com { weekly })
   - `shops/{shopId}/bookings` (subcoleção com `{date_time}` como id)
3. Copie `.env.example` para `.env` e preencha os valores.
4. `npm i`
5. `npm run dev`

## Fluxo

- **Barbeiro**
  1. Login `/barber/login`
  2. Cadastra barbearia `/barber/setup`
  3. Configura horários `/barber/schedule`
  4. Recebe link público `/barber/share` (ex.: `/s/{slug}`)
  5. Vê agendamentos no **Dashboard** `/barber/dashboard`
- **Cliente**
  1. Identifica-se `/client/login` (nome + telefone)
  2. Lista barbearias `/client`
  3. Escolhe barbearia e data `/book/:shopId`
  4. Seleciona horário disponível → cria booking e bloqueia o horário

## Regras básicas de segurança (sugestão)

No Firestore Rules (exemplo simplificado, ajuste para produção):

```rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /shops/{shopId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == request.resource.data.ownerId;
      match /bookings/{bookingId} {
        allow read: if true;
        allow create: if true; // endureça conforme necessário
      }
    }
    match /schedules/{shopId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

**Obs.:** endureça as regras de `bookings` para evitar abuso (ex.: apenas criar, sem atualizar/excluir).

## Estilo

- Tema escuro com superfícies suaves e cantos arredondados.
- `styled-components` em cada componente/página quando necessário.
