## Disney+ Clone - Estudo Front-end

> Este projeto é uma recriação da interface (UI) do Disney+, desenvolvido com foco no estudo aprofundado de desenvolvimento Front-end. O objetivo é replicar o design e a responsividade da plataforma utilizando um *stack* moderno e eficiente, focado em **HTML, SASS, Gulp e JavaScript**.

---

### Visão Geral e Objetivos

O foco principal deste clone é a **prática de desenvolvimento Front-end**, abrangendo desde a estruturação semântica até a automação do fluxo de trabalho.

* **Estrutura:** Implementar **HTML5** semântico e acessível.
* **Estilização Avançada:** Dominar a organização de estilos usando **SASS** (SCSS), aproveitando variáveis e *mixins* para modularidade.
* **Workflow:** Configurar e utilizar o **Gulp** para automatizar a compilação e a geração de *sourcemaps*.
* **Design Responsivo:** Garantir que o layout seja *pixel-perfect* e totalmente **responsivo** para diferentes dispositivos.

---

### Tecnologias Utilizadas

A tabela abaixo lista as ferramentas essenciais para este projeto:

| Categoria | Tecnologia | Função no Projeto |
| :--- | :--- | :--- |
| **Marcação** | **HTML5** | Esqueleto e conteúdo da página. |
| **Estilos** | **SASS (SCSS)** | Pré-processador CSS para organização modular e reutilização de código. |
| **Comportamento** | **JavaScript (ES6+)** | Interatividade da UI (menus, sliders, efeitos de hover). |
| **Automação** | **Gulp.js** | Task Runner para compilação e *watch* de arquivos. |
| **Gerenciamento** | **NPM** | Instalação e gestão das dependências (Gulp e Plugins). |

---

### Configuração e Execução Local

Siga estes passos para configurar e iniciar o projeto em seu ambiente.

#### 1. Pré-requisitos

Certifique-se de ter o **Node.js** e o **NPM** instalados.


#### 2. Comandos de Desenvolvimento

O `gulpfile.js` está configurado para otimizar o fluxo de trabalho.

| Comando NPM | Comando Gulp | Descrição |
| :--- | :--- | :--- |
| `npm start` | `gulp watch` | **Inicia o modo de desenvolvimento.** Observa alterações nos arquivos `.scss` e `.js`, compila e salva automaticamente no `dist/`. |
| `npm run build-css` | `gulp buildStyles` | Executa a compilação final de SASS para CSS uma única vez. |

---

### Estrutura de Diretórios

A estrutura de arquivos foi pensada para manter as fontes (`src`) separados dos arquivos de produção (`dist`).
