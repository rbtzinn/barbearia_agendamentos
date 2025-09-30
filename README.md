# 💈 BarberBook

Sistema de agendamento online para barbearias, desenvolvido em **React + Vite + TypeScript** com **Firebase** (Auth + Firestore).  
Permite que barbeiros cadastrem suas barbearias e clientes agendem horários de forma simples e prática.

---

## ✨ Funcionalidades

### 👤 Cliente
- Cadastro/Login com e-mail e senha
- Recuperação de senha
- Buscar barbearias por localização
- Visualizar informações da barbearia (nome, endereço, Instagram, WhatsApp)
- Agendar horários disponíveis
- Cancelar ou reagendar horários
- Histórico de agendamentos concluídos/cancelados

### 💈 Barbeiro
- Cadastro/Login com e-mail e senha
- Cadastro de barbearia (nome, localização, telefone, Instagram)
- Configuração de horários disponíveis (início, fim e intervalo)
- Painel para visualizar agendamentos dos clientes
- Marcar cortes como concluídos
- Compartilhar link público da barbearia

### 🎨 Extras
- Tema **claro/escuro** com toggle no header
- Máscara de telefone automática `(99) 99999-9999`
- Dialogs estilizados para feedback (em vez de `alert`)
- Bloqueio automático de horários já passados/ocupados
- Links para contato direto com a barbearia (WhatsApp/Instagram)

---

## 🛠️ Tecnologias

- **Frontend**
  - React + Vite
  - TypeScript
  - Styled Components (com ThemeProvider e temas dark/light)
  - React Router DOM
  - Zustand (auth store)
  - React Input Mask

- **Backend**
  - Firebase Authentication
  - Firebase Firestore

---

## 📂 Estrutura de Pastas

src/
components/ # Componentes reutilizáveis (Header, Button, Card, etc.)
pages/ # Páginas principais (AuthPage, BarberDashboard, ClientBook, etc.)
services/ # Integração com Firebase (auth e firestore)
stores/ # Zustand store (auth)
styles/ # GlobalStyles e temas (darkTheme, lightTheme)
utils/ # Funções utilitárias (datas, etc.)

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório

git clone https://github.com/rbtzin/barberbook.git
cd barberbook

2. Instalar dependências

npm install

3. Configurar Firebase

Crie um arquivo .env na raiz do projeto com suas credenciais do Firebase:

VITE_FIREBASE_API_KEY=xxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=xxxx
VITE_FIREBASE_STORAGE_BUCKET=xxxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxx
VITE_FIREBASE_APP_ID=xxxx

4. Rodar em desenvolvimento
npm run dev
Acesse em http://localhost:5173

5. Build para produção
npm run build
🔑 Fluxos de Uso
Fluxo do Barbeiro
Login ou Cadastro → Escolher Sou Barbeiro

Cadastrar a barbearia (nome, localização, telefone, Instagram)

Configurar os horários semanais

Compartilhar o link público com os clientes

Gerenciar agendamentos no Painel do Barbeiro

Fluxo do Cliente
Login ou Cadastro → Escolher Sou Cliente

Buscar barbearias por bairro/cidade

Selecionar barbearia e visualizar horários disponíveis

Escolher um horário e confirmar

Acompanhar seus agendamentos em Meus Agendamentos

🌙 Tema Dark/Light
O usuário pode alternar entre tema escuro e claro pelo botão no Header.

A preferência fica salva no localStorage.

📌 To-Do / Melhorias Futuras
Upload de foto da barbearia

Notificações por e-mail/WhatsApp

Dashboard com estatísticas (quantidade de clientes, cortes concluídos etc.)

Testes unitários e integração (Vitest/React Testing Library)

👨‍💻 Autor
Projeto desenvolvido por Roberto Gabriel Araujo Miranda
📌 Focado em React, Firebase e boas práticas de UI/UX.