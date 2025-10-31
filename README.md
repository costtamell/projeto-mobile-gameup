🎮 GameUp - Aplicativo Mobile de Jogos

 Descrição Geral

O **GameUp** é um aplicativo mobile desenvolvido em React Native que tem como objetivo apresentar diferentes jogos ao usuário de forma simples e interativa.
O aplicativo foi pensado para simular uma loja de jogos, onde o usuário pode fazer login, visualizar jogos disponíveis, ler descrições e avaliações, e acessar o link para instalar o jogo externamente (na Google Play Store).

Esse projeto foi desenvolvido um trabalho de Mobile que tentamos praticar desenvolvimento mobile com React Native, navegação entre telas e componentização.

---

 Objetivos do Projeto

* Aplicar os conhecimentos de React Native aprendidos em aula.
* Criar um aplicativo funcional com navegação entre diferentes telas.
* Trabalhar o design de interface (UI) e usabilidade (UX).
* Compreender o fluxo de um aplicativo: Login → Menu Principal → Detalhes → Acesso externo.
* Não utilizamps API externa 

---

 Funcionalidades do Aplicativo

 1. Tela de Login

* Contém dois campos de entrada:

  * Email
  * Senha
* Um botão “Entrar”, que leva o usuário até a tela inicial do aplicativo.
* Nesta versão, não há validação real de login, apenas a navegação para a próxima tela (login simulado).

---

 🏠 2. Tela Inicial (Home)

* Exibe 4 opções de jogos.
* Cada jogo é representado por:

  * Imagem do jogo
* Quando o usuário clica em um jogo, é direcionado para a tela de detalhes correspondente.

---

 3. Tela de Detalhes do Jogo

* Mostra as informações completas de um jogo selecionado:

  * Nome
  * Imagem
  * Descrição
  * Avaliação (estrelas)
* Possui um botão “Jogar”, que abre uma página externa (o link oficial do jogo na Play Store) para que o usuário possa instalar o jogo.

---

Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

* React Native – Framework principal para o desenvolvimento mobile.
* React Navigation – Biblioteca utilizada para fazer a **navegação entre telas**.
*
---

 Estrutura de Pastas do Projeto

```
📦 projeto-mobile-gameup
 ┣ 📂 mobile
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📜 layout.tsx          # Arquivo com os estilos usados nas telas
 ┃ ┃ ┣ 📜 app.tsx             # Expo (navegação)
 ┃ ┃ ┣ 📜 explore.tsx         # Tela com os jogos
 ┃ ┃ ┗ 📜 index.tsx           # Login
 ┃ ┃ ┗ 📜 mel.tsx             # Página de descrição de um jogo
 ┃ ┃ ┗ 📜 mimi.tsx            # Página de descrição de um jogo
 ┃ ┃ ┗ 📜 modal.tsx          
 ┃ ┃ ┗ 📜 outromel.tsx.tsx    # Página de descrição de um jogo
 ┃ ┃ ┗ 📜 outromimi.tsx       # Página de descrição de um jogo
 

Fluxo de Navegação

```
Página de login
     ↓
Home
     ↓
página detalhes
     ↓
Página externa (Play Store)



Design e Layout

O layout foi desenvolvido bem simples e pensando boa experiência do usuário, com cores suaves e navegação intuitiva.

* Tela de Login: fundo simples com campos centralizados.
* Tela Inicial: cartões dos jogos, com imagens atrativas.
* Tela de Detalhes: informações bem organizadas e botão destacado para o usuário jogar.

---

Observações Importantes

Esse aplicativo **não utiliza nenhuma API externa** — os dados dos jogos (nome, imagem, descrição e avaliação) estão definidos diretamente no código (não conseguimos).
* O foco principal é entender a estrutura de um app mobile em React Native, organização de telas e o fluxo de navegação.
