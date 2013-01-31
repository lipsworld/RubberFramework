INTRODUÇÃO
----------

A maioria dos designers e webdesigners de hoje não pode prescindir do conhecimento mínimo de programação. Ainda que sua função esteja muito mais ligada à produção e customização de folhas de estilo em CSS e CSS3, bem como à diagramação de página via HTML, vários frameworks, bibliotecas e scripts, em geral em Javascript, tornariam seu trabalho muito mais rápido e fácil. Há uma infinidade de "frameworks" CSS, em sua maioria responsivos - ou seja, oferecem suporte a todos os devices, reorganizando o conteúdo para melhorar a visibilidade em plataformas diversas. Contudo, ao pesquisar os diversos frameworks hoje utilizados e difundidos no mercado, podemos constatar alguns dilemas para o webdesigner brasileiro.

Praticamente não existem frameworks em PORTUGUÊS;
Frameworks são baseados em grids de largura fixa - responsivos para mobile e tablets, mas inadequados para widescreen, HD e TVs;
Mais recursos geralmente significam horas de estudo em programação Javascript ou de outras linguagens e frameworks;
Projetos são geralmente abandonados, não evoluem e não ganham novas versões e features.

Resolvemos encarar o desafio: juntando os trapos de algumas páginas e projetos que concebemos durante o último ano, aprimoramos um dos mais populares sistemas mínimos de grids para HTML/CSS, o 1140px CSS Grid. Apesar de ser um framework leve e eficiente, além de facílimo de usar, nunca teve atualizações e conta com várias limitações, por esse motivo. Juntando os cacos e assimilando novas funcionalidades responsivas, além de facilidades Javascript e bibliotecas que podem ser igualmente acionadas por classes ou, no máximo, IDs ou simples "script requests", criamos o RUBBER FRAMEWORK, lançado em sua versão Beta 1.0.2 (a 1.0.1 simplesmente não deu certo).

A seguir, explicaremos o uso das classes do antigo 1140px, reutilizadas por nós, bem como a relação de novas classes e dispositivos.



GRIDS, LINHAS E COLUNAS
-----------------------

Comecemos com o sistema de grids, linhas e colunas original do framework 1140px CSS Grid. Ele está completamente baseado nas classes .container e .row. Pensemos na diagramação da página como uma sequência de tabelas em Excel, por exemplo. Cada nova tabela estaria representada por um .container, podendo possuir um número qualquer de linhas, cada uma delas equivalentes a um novo .row em nosso design. Consideremos uma página web que possui três diferentes "seções", cada uma a ser trabalhada de forma diferente. O HTML ficaria do seguinte modo:

<body>
    
  <div class="container">
 
    <div id="linha1" class="row"></div>
  
    <div id="linha2" class="row"></div>
  
    <div id="linha3" class="row"></div>
  
  </div>

</body>
    
Uma vez criadas as "linhas" da minha página, é necessário definirmos em quantas colunas cada uma delas se dividirá, e qual a largura dessas colunas. Como estamos lidando com um "grid" de 12 colunas, as classes usadas corresponderão ao número, em inglês, mais o sufixo "col". São doze classes, no total: .onecol,.twocol,.threecol,.fourcol,.fivecol,.sixcol,.sevencol,.eightcol,.ninecol,.tencol,.elevencol e .twelvecol. O que varia, em cada uma das classes, é a largura da coluna que irá ser inserida - quanto maior o número, maior a largura.

<body>
    
  <div class="container">
 
    <div id="linha1" class="row"></div>
    
      <div class="fourcol"></div>
      <div class="fourcol"></div>
      <div class="fourcol last"></div>
  
    <div id="linha2" class="row"></div>
    
      <div class="fourcol"></div>
      <div class="eightcol last"></div>
  
    <div id="linha3" class="row"></div>

      <div class="twocol"></div>
      <div class="sevencol"></div>
      <div class="threecol last"></div>
  
  </div>

</body>
    

Voltando ao grid, cada .row deverá receber classes de colunas, até que a largura complete o equivalente a 12 colunas, SEMPRE lembrando de inserir também a classe .last na última coluna de cada .row. O "last" elimina a margem direita da coluna inserida, permitindo que esta mantenha o grid alinhado na vertical. O exemplo acima mostra diferentes possibilidades de configuração. Na primeira, dividimos o espaço da seção em três colunas iguais, usando apenas a classe .fourcol (4 + 4 + 4 = 12). Na segunda seção, dividimos em uma configuração de um terço e dois terços, utilizando as classes .fourcol e .eightcol (4 + 8 = 12). Finalmente, na terceira seção optamos por uma construção complexa, com uma "sidebar" esquerda ocupando um sexto da largura do grid, uma área do conteúdo principal ocupando a mais de metade da largura e por fim outra 'sidebar" na direita, essa ocupando um quarto da largura total. Impossível? Não se utilizarmos as classes .twocol, .sevencol e .threecol junta. Faça as contas (2 + 7 + 3 = 12).


TELA INTEIRA E ESPAÇAMENTO-ZERO
-------------------------------

Aqui iremos apresentar as classes para trabalho em tela cheia (.full-width) e também para eliminação do espaçamento entre as colunas (.tight). A classe .full-width trabalhará de forma semelhante à classe anterior .container. Ela criará um espaço onde serão dispostas as "linhas" (.row), porém permitindo a divisão por colunas dentro da largura total da tela. Quanto ao uso das colunas, vale a mesma regra do tópico anterior - qualquer disposição que some um total de 12 colunas de largura, com as mesmas classes (.onecol, .twocol e assim por diante), como no exemplo abaixo:

<body>
    
  <div class="full-width">
 
    <div id="linha1" class="row"></div>
    
      <div class="fourcol"></div>
      <div class="fourcol"></div>
      <div class="fourcol last"></div>
  
    <div id="linha2" class="row"></div>
    
      <div class="fourcol"></div>
      <div class="eightcol last"></div>
  
    <div id="linha3" class="row"></div>

      <div class="twocol"></div>
      <div class="sevencol"></div>
      <div class="threecol last"></div>
  
  </div>

</body>
    

Em outras palavras: com a substituição de uma única classe, é possível migrar do grid de 1140px para o grid de tela cheia. Também é possível utilizar ambos em uma mesma página, abrindo diferentes DIVs com as classes .full-width e .container, além de criar um modelo "híbrido", no qual usa-se a tela cheia, mas com margens laterais de 20 pixels de cada lado. Para isso, basta utilizar as duas classes na mesma DIV.

Outra possibilidade do framework é eliminar o espaçamento entre as várias colunas de cada linha, que são automaticamente inseridos com a classe .row. Sob o domínio dessa classe, colunas de qualquer largura, seja em tela cheia ou em grid de 1140px, são exibidas individualmente em plataformas mobile, uma sobre a outra. Porém, e se quisermos exibi-las lado a lado também nos celulares e tablets? Para isso, usaremos a nova classe .tight em substituição à .row. Além de eliminar espaços entre colunas, essa classe exibirá todas as colunas de uma linha "lado a lado" também em mobile, permitindo o uso, por exemplo, de textos em duas colunas para celular.

Para facilitar a vida dos designers, também adicionamos as classes .italic e .bold, para rápida configuração de fontes, sem sair do HTML. Em versões futuras, incluiremos também classes específicas para acesso a diversos recursos prontos de tipografia.


LICENÇAS E CRÉDITOS
-------------------
