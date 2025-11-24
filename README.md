# 📱 Avaliação 02 - Programação para Dispositivos Móveis

Projeto desenvolvido para a disciplina de Programação para Dispositivos Móveis, dividido em três partes que exploram conceitos fundamentais do React Native, desde elementos básicos até a criação de telas complexas com navegação e autenticação.

## 🚀 Tecnologias Utilizadas

<div align="center">
 
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 📂 Estrutura do Projeto

O projeto está organizado em três módulos principais:

```
📦 Avaliacao-02-React-Native
 ┗ 📂 aula03
```

---


## 🔐 Aula03 - App React Native com Login + Listagem de Cursos (Firebase)

📌 Sobre o Projeto

Este projeto marca a terceira etapa do desenvolvimento, onde evoluímos de uma simples tela de login para um aplicativo completo com:

Autenticação (simples) de usuário

Integração com Firebase Firestore

Listagem dinâmica de cursos cadastrados no banco

Navegação entre telas utilizando React Navigation

Tela detalhada para cada curso

O objetivo é aplicar na prática conceitos de UI/UX, navegação, integração com APIs e armazenamento em nuvem.

### Funcionalidades

🔐 Login

- Login via e-mail e senha (sem validação de backend)

- Botão para futura implementação de login via GitHub

- Botão para futura implementação de login via Google

- Interface simples, intuitiva e responsiva

📚 Listagem de Cursos

- Cursos carregados diretamente do Firestore

- Atualização automática via getDocs

- Cada curso contém:
- 
```bash
id

name


description
```

🔎 Tela de Detalhes

Mostra informações completas do curso selecionado

🧭 Navegação

Implementada com:

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
```

Esta biblioteca foi utilizada para adicionar **ícones** aos botões de autenticação social, melhorando a experiência visual do usuário.

**Ícones utilizados:**
- GitHub icon (botão de login GitHub)
- Google icon (botão de login Google)

### Componentes Utilizados

- Conceitos aplicados nas aulas anteriores
- `TextInput` (campos de entrada de texto)
- `TouchableOpacity` (botões customizados com feedback visual)
- `KeyboardAvoidingView` (ajuste automático do teclado)
- Ícones do `@expo/vector-icons`

### Navegação

🔥 Integração com Firebase

Este projeto utiliza:

- Firebase App

- Firebase Firestore (Database)

📁 Estrutura da Coleção no Firestore

Coleção criada:

- cursos


Cada documento segue o padrão:

ID: 1
name: "Curso de React Native"
description: "Aprenda a criar apps para Android e iOS"

✔️ Campos obrigatórios em cada documento:
Campo	Tipo	Exemplo
name	string	"Curso de AWS"
description	string	"Domine os serviços da AWS"
📌 Inicialização do Firebase (firebaseConfig.js)
```bash
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
```

🖼️ Capturas de Tela
📌 Tela de Login

![Tela de Login](https://github.com/user-attachments/assets/3f15b4b8-f4f9-4779-85e9-9f442a347c5b)


📌 Listagem de Cursos

![Cursos Disponiveis](https://github.com/user-attachments/assets/f1b5d8e8-a0b0-4820-8fa1-f0962e06c968)


📌 Detalhes do Curso

![Detalhes do curso](https://github.com/user-attachments/assets/9636ddee-9605-4419-8438-e98a1712704a)

---


### Pré-requisitos

- Node.js instalado
- Expo CLI instalado globalmente
- Aplicativo Expo Go no celular (opcional)

---

🧩 Principais Arquivos
✔️ LoginScreen

Inputs de e-mail e senha

Botões sociais

Navegação para Home

✔️ HomeScreen

Busca cursos do Firestore usando:
```bash
getDocs(collection(db, "cursos"))
```


Renderiza lista com FlatList

Navega para detalhes com navigation.navigate('Details', { course })

✔️ DetailsScreen

Recebe o curso via route.params

Exibe: nome, descrição e ID

📦 Bibliotecas Adicionadas
📚 Ícones
npx expo install @expo/vector-icons


Utilizado para botões sociais (GitHub e Google).

🧭 Navegação
npm install @react-navigation/native
npm install @react-navigation/native-stack

🛠️ Como Rodar o Projeto

Clone o repositório:
```bash
git clone https://github.com/helenonogueira/Avaliacao-02-React-Native
```

Instale dependências:

npm install


Inicie o app:

npm start


Abra no Expo Go pelo QR Code.

---


## 📚 Conceitos Aprendidos

### Elementos Nativos do React Native
- `View`: Container principal
- `Text`: Exibição de textos
- `Button`: Botões nativos
- `TextInput`: Campos de entrada
- `Image`: Exibição de imagens
- `ScrollView`: Conteúdo rolável
- `TouchableOpacity`: Botões customizados

### Estilização
- `StyleSheet.create()`
- Flexbox layout
- Propriedades de container
- Responsividade

### Interatividade
- Manipulação de eventos (onClick)
- Gerenciamento de estado
- Validação de formulários
- Feedback visual

### Bibliotecas Externas
- `@expo/vector-icons`: Ícones
- Conceitos de navegação entre telas

---
