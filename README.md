# [Rubber Responsive Framework](http://startupeando.com.br/rubber)

USO
---

O diretório [Rubber Framework 1.1.0](https://github.com/lipsworld/RubberFramework/tree/lipsworld/Rubber%20Framework%201.1.0) acima contém os arquivos básicos para uso do framework. Estão inclusos no pacote:

- Arquivo 'index.html' base, com links para folhas de estilo, bibliotecas JS
- Jquery 1.8.3 minified
- Ícones Font Awesome (diretório /font)
- Folhas de estilo do grid (1140.css), ícones (font-awesome.min.css), ajustes IE (ie.css / font-awesome-ie7.min.css) e folha para customização (styles.css)
- Biblioteca 'jQuery.menutron.js', que permite o uso da classe '.nav-mobile' para menus responsivos
- Biblioteca 'footable-0.1.js', que permite o uso da classe '.table-mobile' para tabelas responsivas dinâmicas
- Biblioteca 'formalize.min.js', que padroniza e pré-configura elementos de formulários

LEIA MAIS EM - [RUBBER RESPONSIVE FRAMEWORK](http://startupeando.com.br/rubber)


INTRODUÇÃO
----------

A maioria dos designers e webdesigners de hoje não pode prescindir do conhecimento mínimo de programação. Ainda que sua função esteja muito mais ligada à produção e customização de folhas de estilo em CSS e CSS3, bem como à diagramação de página via HTML, vários frameworks, bibliotecas e scripts, em geral em Javascript, tornariam seu trabalho muito mais rápido e fácil. Há uma infinidade de "frameworks" CSS, em sua maioria responsivos - ou seja, oferecem suporte a todos os devices, reorganizando o conteúdo para melhorar a visibilidade em plataformas diversas. Contudo, ao pesquisar os diversos frameworks hoje utilizados e difundidos no mercado, podemos constatar alguns dilemas para o webdesigner brasileiro.

Praticamente não existem frameworks em PORTUGUÊS;
Frameworks são baseados em grids de largura fixa - responsivos para mobile e tablets, mas inadequados para widescreen, HD e TVs;
Mais recursos geralmente significam horas de estudo em programação Javascript ou de outras linguagens e frameworks;
Projetos são geralmente abandonados, não evoluem e não ganham novas versões e features.

Resolvemos encarar o desafio: juntando os trapos de algumas páginas e projetos que concebemos durante o último ano, aprimoramos um dos mais populares sistemas mínimos de grids para HTML/CSS, o 1140px CSS Grid. Apesar de ser um framework leve e eficiente, além de facílimo de usar, nunca teve atualizações e conta com várias limitações, por esse motivo. Juntando os cacos e assimilando novas funcionalidades responsivas, além de facilidades Javascript e bibliotecas que podem ser igualmente acionadas por classes ou, no máximo, IDs ou simples "script requests", criamos o RUBBER FRAMEWORK, lançado em sua versão Beta 1.0.2 (a 1.0.1 simplesmente não deu certo).

A seguir, explicaremos o uso das classes do antigo 1140px, reutilizadas por nós, bem como a relação de novas classes e dispositivos.


EM DESENVOLVIMENTO
------------------

1. **sitemap.php** - criação de rotina para geração automática de arquivos "sitemap.xml" no subdiretório "/xmls". Será disponibilizado arquivo modelo 'index.php', já com as rotinas incluídas, e os arquivos XML já foram testados no Google Webmasters. Previsão 15.02.2013.
2. **Tooltips** - inserção de 10 novas classes CSS via integração da biblioteca 'hint', para controle e uso de tooltips no HTML. Previsão 20.02.2013.
3. **Modal** - criação de rotina para acionamento de boxes modais, com recursos de vídeo e iframe. Previsão 25.02.2013.
4. **SEO Booster** - trabalhamos também em script para inserção de sinônimos via atributos "data" em tags HTML, que auxiliarão seu website a fornecer dados aos mecanismos de busca, via sinônimos e tags implícitas. Previsão 20.02.2013.

VERSÕES ESTÁVEIS
----------------

**Versão 1.1.0**
* Pré-formatação e padronização cross-browser de elementos de formulários;
* Inserção de "tooltips" com renderização de dados do Wikipedia, por meio da tag DATA no HTML. Os valores atributos "data-wiki" e "data-lang" definem, respectivamente, o verbete buscado e o idioma da busca ("pt", pata português);

**Versão 1.0.6**
* Inserção da classe ".table-mobile", para uso com tag TABLE e geração de tabelas responsivas dinâmicas. Exemplo do uso pode ser visto [nesta página](http://parley.com.br/pricing.html). A classe deve ser incluída na tag TABLE do HTML, e nas colunas TH especificadas as plataformas nas quais a ocultação será acionada (para tanto, é necessário incluir o atributo 'data-hide=""' na tag TH, com valor 'phone', 'tablet' ou ambos);

* Mais detalhes sobre o uso em breve em nossa página, que pode ser acessada pelo primeiro link deste arquivo README;

**Versão 1.0.5**
* Inserção da classe ".nav-mobile" para menus UL/LI;
* Jquery incluído;

**Versão 1.0.2**
* Primeira versão estável;
* Grid responsivo;
* Ícones Font Awesome inseridos via classes CSS;


LICENÇAS E CRÉDITOS
-------------------

<div xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/" about="http://startupeando.com.br/rubber/index.html"><span property="dct:title">Rubber Framework</span> (<a rel="cc:attributionURL" property="cc:attributionName" href="http://www.startupeando.com.br/rubber">Carlos Matos</a>) / <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a></div>

**Versão 1.1.0**

1. 1140 CSS Grid by Andy Taylor - licensed under a Creative Commons Attribution 3.0 Australia License.
2. Font Awesome v3.0.2 by Dave Gandy - licensed under SIL Open Font License - http://scripts.sil.org/OFL // MIT License - http://opensource.org/licenses/mit-license.html // CC BY 3.0 License - http://creativecommons.org/licenses/by/3.0/
3. Menutron JS library - Copyright © 2012 Mike King (@micjamking) - [Repositório](https://github.com/micjamking/Menutron)
4. FooTable JS libray - Copyright 2012 Steven Usher & Brad Vincent - [Repositório](https://github.com/bradvin/FooTable)
5. Formalize CSS - Copyright Nathan Smith - licenças GNL e MIT
