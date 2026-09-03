# Portfólio de Emerson

Este é um Website para portfólio profissional.

## Como o website foi feito

O projeto foi construído como uma página estática, sem backend e sem framework. A estrutura foi desenvolvida em HTML5, a identidade visual e o layout responsivo foram feitos com CSS e a interatividade foi implementada com JavaScript.

## Tecnologias e recursos utilizados

- HTML5 para a estrutura da página.
- CSS3 para layout, responsividade, cores, cards, transições e estados de foco.
- JavaScript para troca de idioma sem recarregar a página.
- SVG inline para os ícones de LinkedIn e GitHub.
- Links relativos para compatibilidade com GitHub Pages.
- GitHub Pages para hospedagem estática.

Não existe etapa de build ou instalação de dependências. Os arquivos publicados são os mesmos versionados no repositório.

## Internacionalização

O site possui duas versões de conteúdo:

- Português-BR.
- Inglês.

O botão `EN` ou `PT` alterna o idioma diretamente no frontend. Os textos ficam no objeto `translations` em `scripts/main.js`. O idioma também altera automaticamente o arquivo de currículo baixado.

## Estrutura do projeto

```text
├── index.html
├── scripts/
│   └── main.js
├── styles/
│   ├── main.css
│   ├── project.css
│   ├── reference.css
│   ├── final.css
│   └── ui-fixes.css
├── documents/
│   ├── Emerson_Bottega_Currículo.pdf
│   └── Emerson_Bottega_Resume.pdf
├── README.md
└── README.en.md
```

## Como executar localmente

Na raiz do projeto, execute:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador. Para encerrar o servidor, pressione `Ctrl + C` no terminal.

Também é possível abrir `index.html` diretamente, mas o servidor local representa melhor o funcionamento dos caminhos usados no GitHub Pages.

## Compatibilidade

O projeto foi preparado para hospedagem estática. Não utiliza banco de dados, servidor, variáveis de ambiente, ou dependências externas obrigatórias.
