# Visualizador de Perfil do GitHub

Este projeto é um visualizador de perfil do GitHub simples e interativo que permite aos usuários buscar por um nome de usuário do GitHub e visualizar informações detalhadas do perfil, juntamente com uma lista dos seus repositórios públicos.

## Funcionalidades

-   **Busca de Usuário:** Insira um nome de usuário do GitHub para buscar e exibir seu perfil.
-   **Exibição de Perfil:** Mostra o avatar do usuário, nome de login, biografia (se disponível), número de seguidores e usuários que ele segue.
-   **Lista de Repositórios:** Apresenta uma lista dos repositórios públicos do usuário, incluindo nome, número de estrelas, forks, observadores e linguagem de programação.
-   **Links Diretos:** Cada repositório listado possui um link direto para sua página no GitHub.
-   **Tratamento de Erros:** Mensagens claras para usuários não encontrados ou erros na requisição.

## Tecnologias Utilizadas

-   **HTML5:** Estrutura da página web.
-   **CSS3:** Estilização, incluindo:
    -   `reset.css`: Para resetar estilos padrão do navegador.
    -   `styles.css`: Estilos principais da aplicação.
    -   `animations.css`: Animações e transições.
    -   `responsive.css`: Estilos para responsividade em diferentes tamanhos de tela.
-   **JavaScript (ES6+):** Lógica da aplicação, interação com a API do GitHub e manipulação do DOM.
-   **GitHub API:** Para buscar dados de usuários e repositórios.
-   **Devicon:** Biblioteca de ícones para exibir o ícone do GitHub.

## Como Usar

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/visualizador-perfil-github.git
    ```
    (Substitua `https://github.com/seu-usuario/visualizador-perfil-github.git` pelo URL real do seu repositório, se for diferente.)

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd visualizador-perfil-github
    ```

3.  **Abra o arquivo `index.html` no seu navegador:**
    Você pode simplesmente clicar duas vezes no arquivo `index.html` ou arrastá-lo para a janela do seu navegador.

4.  **Comece a usar:**
    Digite um nome de usuário do GitHub no campo de busca e clique em "Buscar" ou pressione Enter para ver o perfil.

## Capturas de Tela

(Adicione aqui capturas de tela da aplicação em funcionamento para ilustrar suas funcionalidades.)

## Créditos

Desenvolvido como parte do curso/desafio da DevQuest.
