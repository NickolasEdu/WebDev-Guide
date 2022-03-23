Prazer meu nome é Nickolas Eduardo, eu criei este repositório como uma forma de revisar todos os conteúdos que eu estudei relacionados a desenvolvimento web. De inicio eu fiz esses resumos para uso próprio, mas com o tempo conhecendo outros desenvolvedores iniciantes eu cheguei a conclusão de que esses meus resumos poderiam de alguma forma serem úteis para outros desenvolvedores.

Eu não sou nenhum desenvolvedor Pleno ou Sênior, ainda não sou nem um Júnior. Mas eu sei como é difícil no começo encontrar um norte, sendo assim eu espero que esse projeto ajude e seja útil para aqueles que estiverem lendo.

*”Deveria ser nosso dever espalhar o conhecimento, pois assim quando alguém chegar aonde eu  já estive antes, ele terá mais ferramentas para poder fazer melhor do que eu fiz”*

   **Kevin Hart**

## Index

0. [Inglês](#ingles)
1. [Conceitos web](#conceitos-web)
2. [Programação](#programação)
3. [HTML](#html)
4. [CSS](#css)
5. Javascript

# Ingles

*Antes de abordar o tema principal, eu queria falar primeiro um pouco sobre a insegurança de muitos, a língua inglesa. Aqui acionarei alguns materiais de apoio para quem tiver o interesse de se aprofundar nessa questão.* <br>
*Ao longo do artigo eu sempre tentarei deixar materiais extras como sites, tutoriais, vídeos e tudo que de alguma forma agregue ao conteúdo que estiver aqui, assim esse projeto não se torna apenas um material de apoio com intuito de usar como revisão, mas que ajude a te abrir novos caminhos e conhecer novos conteúdos para aprender ainda mais.*

**Eu preciso comprar um curso de inglês para poder estudar programação?** <br><br>
NÃO, pelo menos não para começar. Ter inglês hoje é um diferencial para quase toda vaga de emprego, na programação não é diferente e eu vejo isso como uma vantagem para quem estuda na área. <br>
Por que vantagem? Pelo motivo de que nós acabamos tento contato diário com as linguagens de programação que foram escritas em inglês, então de antemão já somos introduzidos a conceitos de inglês sem nem percebermos. <br>
Se você tem tempo e pode investir em um curso de inglês, compre a vontade que vai te ajudar muito. Mas caso esse não seja seu caso, vou trazer algumas dicas para te ajudar a estudar o inglês mesmo que de forma passiva.

## Material de Apoio
- Mude o idioma do seu celular. Nós conhecemos muito bem nosso próprio smartphone, ao alterar o idioma você vai se acostumar ao tempo todo estar lendo em inglês, e de inicío será intuitivo já que você mesmo não sabendo nada de inglês, mas ao menos vai lembrar de o que aquele menu do aplicativo dizia quando estava em português e assim já irá começar a associar algumas palavras.
- Aplicativo Duolingo para praticar, esse app não te ensina o inglês mas vai te ajudar ainda mais ao associar as palavras trazendo uma linha de aprendizado evolutiva.
- Assistir séries e filmes legendados, se não temos tempo para fazer fazer um curso de inglês, então a saída é estudar sempre que possível. Assistir filmes ajudará ainda mais a fixar palavras, mesmo poucas que conheça, em diálogos e contextos de história.
- Ouça músicas lendo a letra em inglês, veja a traduçã, depois leia novamente em inglês, e no processo anote as palavras que não conhece e vá pesquisando cada uma.
- **Inglês do Zero Podcast**, esse podcast tem vários séries de episódios diferentes, desde de explicações linguísticas, inglês com música e cenas, diálogos e mais. Infelizmente ele foi descontinuado, mas tem mais de 200 aulas disponivéis lá no <a href='https://open.spotify.com/episode/7j9Tq3K6XO9QDo3XntEQRe'>Spotify</a>.
- Repita tudo de novo e encontre outras maneiras de continuar praticando, é com a prática que vamos associando e fixando os estudos, é por este motivo que sem um professor, eu recomendo trazer o inglês de forma passiva (séries/filmes), idioma do celular, etc. Pois assim faz o nosso contato com a língua algo diário.


# Conceitos Web

*Para se tornar um desenvolvedor web, antes de tudo, devemos entender um pouco sobre o que é a Web. Nesse capítulo eu trouxe algumas definições sobre como a internet funciona. **Mas é importante ressaltar,** que não é necessário decorar tudo o que estiver aqui, a intenção desse artigo como um todo é de que seja um material de apoio para estudos. Sendo assim, aqui nesse capítulo irei trazer alguns conceitos que se tornarão familiares para o desenvolvedor com o tempo, ao decorrer da sua trajetória de estudos quando algum desses termos ou outro semelhante aparecer na sua frente, o conteúdo aqui já servirá como base para fixar os conceitos e revisão para cada vez que estiver com alguma dúvida*.

## A Internet

A explicação mais simples do conceito de internet, é que ela é uma conexão global de computadores. Ao conectar dois ou mais computadores dentro de um mesmo espaço, você tem uma rede interna, do qual pode se conectar com outros computadores ou outras redes internas. Daí vem o nome Internet, de inter-network. O acesso a redes externas é feito entre a conexão da sua rede e uma outra rede de computadores muito maior, neste caso o seu provedor de Internet.

Estes computadores interligados, estão recebendo e enviando dados durante todo o tempo. Partindo dos backbones, passando pelo seu provedor de internet e processando os dados por meio da tecnologia **TCP / IP**.

"Os backbones são um meio de centralização dos dados, servidores centrais que recebem e encaminham as informações. Como a tradução literal diz, são a espinha dorsal da internet" 

## Link URL

O URL (**Uniform Resource Locator) esse conceito é traduzido como** Localizador e Identificador de Recursos. Aqui, recursos são os endereços das aplicações web, os sites que desenvolvemos. Para fazer essa localização e comunicação entre os computadores, ele é integrado ao protocolo **HTTP**. Usando regras de comunicação do sistema para passar as informações

## **HTTPS – Hiper Text Transfer Protocol (Protocolo de Transferência de Hipertexto)**

Esse é o método básico de como os computadores conversam, chamado de Request-response (ou Request-Reply), são os protocolos de requisitos feitos entre os computadores e servidores para qual e como os dados serão trafegados.

Basicamente é um conjunto de recursos que tem como função fazer a conversa do PC do client converse de forma segura, rápida e otimizada com o **IP** dos servidores.

## **IP - Internet Protocol**

O Internet Protocol, mais conhecido como **IP**, nada mais é o endereço de cada computador, como um número de CEP ou CPF. Quando você baixa uma foto, vídeo ou carrega um site, esses dados são divididos em partes, nesses dados são registrados o endereço de **IP** do seu dispositivo, e do dispositivo em que estes dados estão armazenados.

Como se você enviasse uma cadeira desmontada, mas cada parte dela você enviasse em pacotes separadamente pelo correio, e junto destas informações você envia um guia informando em quantas partes a cadeira está dividida e como ela deve ser montada, sendo esse sendo o trabalho do **TCP**.  A  diferença, claro, é que com a Internet de hoje, o envio de dados é feito de forma praticamente instantânea, por conta dos milhões de computadores interconectados.

## **TCP - Transmission Control Protocol**

Após os dados serem divididos, e terem sido registrados com os **IP's** de destinatário e remetente, essa informação navega desde o servidor alocado, navegando pelos cabos submarinos de internet, roteadores e todos os tipos de conexão, até encontrarem o dispositivo de destino.

Quando a informação chega é o **TCP** (Transmission Control Protocol) que irá organizar e conferir se não há nenhum dado faltando, caso isso ocorra ele reenvia o pedido para o **IP** inicial, para o reenvio deste dado específico.

Se essa informação sobre número de **IP**, servidores e banco de dados pode parecer confusa, é porque realmente é. Por esse motivo que existe o **DNS**.

## **DNS - Domain Name System**

Esse é o sistema que dá nome aos **IP's**, basicamente o conhecido "WWW" Com esse sistema , facilita nossa vida ao pesquisarmos algum site, e também facilitando a transmissão de dados, pois se em um computador usado como um servidor de dado que armazena vários domínios, seria muito mais complicado encontrar o site requisitado dentro daquele **IP**.

## Proxy

Proxy nada mais é que os meios que esses dados vão de um lado para outro, seja roteadores, cabos de fibra ótica, modens, outros computadores. Todos de alguma forma interligados, a todo momento recebendo informações endereçadas seja do Cliente para o servidor ou vice-versa.

## Client vs Server

Client se refere ao computador do usuário (como o seu no caso) o Servidor é um computador ou uma rede especifica onde existe alguma informação armazenada e para ser exibida na máquina do usuário, é necessário criar uma comunicação. Onde o **Client** fará um pedido/request para o servidor, o **Server** irá consultar se essa informação existe, e se caso ele tenha armazenado o que foi pedido, o servidor fará o Response mandando a informação de volta para o computador do usuário do lado do **Client**.

## Explicação prática

Vamos usar o funcionamento do YouTube como exemplo, você abre a plataforma pelo seu navegador e usa a barra de pesquisa para procurar um vídeo ou canal pelo nome.

Até aqui o que ocorreu foi: Você pediu para o seu computador procurar informações sobre o site do YouTube, que te respondeu enviando de volta a página de inicio deles (a página **home**), logo depois usou o **input** de dados para procurar um vídeo/canal pelo  nome.

Aqui seu computador mandou outro **Request** para os servidores do Youtube, que buscaram todas informações que são compatíveis com aquilo que você enviou na barra de pesquisa e fez o **Response** para o **Client,** enviando todas essas informações pelo processo que falamos acima.

## Browser

E no final das contas, após toda essa troca de informações e comunicação em máquina e servidor. É o navegador que irá fazer a interpretação de todo o código que foi recebido vindo do servidor (html, css, javascript, imagens etc...).

## Aplicação Estática vs SPA

Um site estático é quando ele enviar para o navegador tudo de uma vez, para ver algum conteúdo atualizado é preciso recarregar a página (dar um F5). Uma SPA - Single Page Aplication (Aplicação de uma página só) é quando a página vai trazendo as informações conforme você vai requisitando, exemplo o Facebook que na página inicial existe dados de Feed, stories, chat que são carregados de forma simultanea. 

Agora a função de fazer que isso funcione, cabe o programador que seguindo algumas séries de regras criará e desenvolverá a comunicação entre Sites, Dispositivos e APIs.


**[⬆ voltar ao topo](#index)**

# Programação

## Linguagem de programação

Os computadores não falam a mesma íngua que nós, basicamente eles entendem linguagem binária, aqueles clássicos zeros e uns (010101) que estamos acostumados a ver em filmes. As linguagens de programação é a maneira que foi criada para que nós possamos passar instruções para ser interpretadas pelos computadores.

Daí que vem os termos **Algoritmo** e **Lógica de Programação**, que resumidamente são: Um conjunto de comandos que façam sentido juntos, e encontrar maneiras de fazer com que todos eles se entendam sem prejudicar o funcionamento da aplicação, os já conhecidos **Bugs**.

Se até aqui esses conceitos não ficaram claros, pode ficar tranquilo pois eles serão melhor aprofundados com o decorrer e você logo se acostumará e se tornará intimo desses termos (principalmente com os **Bugs)**

Mas já vou aproveitar para dar um exemplo simplificado.

Pense na ação de lavar a louça e imagine de que forma você escreveria um passo a passo de como ela deve ser lavada. Se pensar muito ou perguntar para alguma outra pessoa, chegará a conclusão de que existem várias maneiras de se lavar a louça. Uns preferem lavar primeiro os pratos, outros já gostam de deixa-los para o final. Isso não importa muito aqui, a questão é: pensando no processo como um todo, o ideal será que você encontre uma maneira prática de fazer isso.

Se você usando alguma forma de comando mande um computador ensaboar e enxaguar copos, colheres e pratos separadamente e um por vês, será uma maneira de fazer. Mas se nesse meio tempo não houver um comando mandando ele desligar a torneira enquanto ensaboa outro item, apesar da tarefa ser concluída, ele terá gastado muita água no processo.

O que ocorre é **existem muitas maneiras se se escrever códigos e desenvolver sistemas, e com o tempo você irá aprender boas práticas. Como iniciante não deve se preocupar com isso agora, mas o que eu quero dizer é que, as vezes nós não sabemos se o que fazemos está certo ou não, então por agora tente focar em aprender o básico que a evolução e a autocrítica virão naturalmente com o tempo**.

## IDE's - Integrated Development Environment (Ambientes de Desenvolvimento Integrado)

Esses são os editores de código, a ferramenta fundamental do programador.

Para o desenvolvimento Web o melhor recomendado é o Visual Studio Code.

Também temos outras opções como Sublime Text e Atom, mas em questão de funcionalidades e performance, o VS Code tem vantagem entre os dois.

## Ambiente de desenvolvimento

*Um ambiente de desenvolvimento é tudo aquilo que te auxilia a ser mais produtivo. Para esse ínicio vou apresentar algumas ferramentas e extensões do VS Code que nos ajudam.*<br>
- **Tema do editor**, a escolha de um tema pode ser muito útil no começo pois ao se acostumar com uma paleta de cores, você logo vai encontrar os elementos na tela só de bater o olho, ajudando muito a diferenciar funções, variaveis e constantes.
- **HTML Preview**, ele te trás uma pré visualização numa janela ao lado do próprio código, bastante simples mas ajuda a você ver como o HTML está sendo apresentado, no inicio pode ser útil para pegar o comportamento das Tags.
- **Live Server**, esse sim é mais completo que o HTML Peview. O Live Server roda seu arquino direto no navegador e a cada vez que salva você pode ver com qual cara seu site está ficando de maneira semi-automática
- **Codesnap**, Uma situação muito comum quando um dev precisa compartilhar um código que não está no GitHub ou precisa achar um erro em uma parte especifíca. O Codesnap é essencial para isso, essa extenção tira um print em ótima qualidade do trecho do código que você escolher, já importa para imagem pronta para ser enviada para outro dev.
- **Dev Tools**, ou ferramente do desenvolvedor que abrimos pelo próprio navegador. Com ela conseguimos ver dados do código fonte, Estilos, consultas ao servidor de quase qualquer site que visitamos, e principalmente para estudarmos o comportamento dos nossos próprios projetos.



**[⬆ voltar ao topo](#index)**


# HTML

### Material de apoio do capítulo

Playlist com instalação do VS Code e primeiros passos HTML
<br>
<a href="https://www.youtube.com/playlist?list=PLmPm9dwop78-WqqusnExiNlRJVHEwZjWQ" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" target="_blank"></a>
<br>
Dois sites com documentação das tecnologias trabalhadas, muito úteis para relembrar maneiras de uso e revisar syntax de elementos.
<a href="https://developer.mozilla.org/en-US/">MDN Web Docs</a> e <a href="https://www.w3schools.com/">W3Schools</a>

## Definição
A sigla de HTML significa HyperText MArkup Language. Aqui já sabemos que o **https** é o protocolo de transferência de hipertexto, pois bem, o **HTML** é basicamente o arquivo de texto que o protocolo envia de um computador para outro.

Pense no **HTML** como um texto, a diferença é que nesse texto podemos adicionar a ele outros arquivos como de imagens, vídeos, cores, etc. Então é nele que vamos escrever a maior parte do conteúdo por meio de tags e classes e posteriormente agregar com outros tipos de arquivo.

**Qual a diferença de HTML para HTML5**

O **5** se refere apenas a qual versão que o programa está.

O HTML4 (comumente referido apenas como “HTML”) foi publicado em 1999, enquanto que a maior e mais recente atualização foi lançada em 2014. Chamada de HTML5, a atualização introduziu diversos novos recursos à linguagem.

O HTML5 introduziu algumas melhorias de semântica. As novas tags semânticas informam ao navegador sobre o significado do conteúdo, ajudando na sua interpretação.

## Tags HTML

As tags são usadas para informar ao navegador a estrutura do site. Ou seja: quando se escreve um código em HTML, as tags serão interpretadas pelo navegador, produzindo assim a estrutura e o conteúdo visual da página.

A principal característica das tags é estarem sempre dentro dos sinais de chevron (sinal de “maior que” e “menor que”).

Para o auxílio do entendimento das tags, criei um exemplo prático em um arquivo **HTML**. Esse arquivo está disponível para ser clonado, navegar pelo código ou até para ser copiado amnualmente e ir acompanhando visualmente a apresentação das tags, seja no navegador com live server ou pelo HTML Preview.


<a href="https://github.com/NickolasEdu/html-guide" target="_blank"><img title="HTML5" alt="HTML" height="35" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"></a>

Ao navegar pelo código de exemplo, notamos que: Tudo dentro da tag 'head' é referente a configuração, encaixe na tela, título da aba, ícone da janela, importação de fonte, importação de CSS, é a cabeça do nosso sitema. Já no 'body' vai literalmente o corpo, todo o conteúdo visivél para o usuário. <br>
Até aqui fomos introduzidos as tags e as divs, que são basicamente caixas que agrupam certos conteúdos. Div 'header' por exemplo agrupa todas as tags que estão no cabeçalho da página. E que cada div pode receber uma classe. <br>

**Esclarecimento de conceitos**<br>
**Semântica:** A forma que as ferramentas de busca dos navegadores irão ler a nossa página. Assim como uma redação precisa ser clara e bem escrita, nosso código também, tanto para quem for ler as linhas que escrevemos, como o navegador para buscar esses informações. A semântica é essencial para o SEO - Search Engine Optimization (Otimização para motores de busca).<br>
**Indentação:** Essa é ação de afastar o texto da margem, de forma que fique alinhado com as tags que o agrupa. Sempre devemos identar com a tecla tab, nunca com a barra de espaço.<br>
**Hierarquia de Tags:** com o tempo vamos começar a falar sobre elementos pais e filhos. Um elemento pai é quando uma tag ou div agrupa outras tags dentro dela, tags irmãs são as tags dentro do mesmo alinhamento quando estão agrupadas.<br>


Bora entender o funcionamento aqui <br>
A Div Main é o elemento pai agrupando outros elementos dentro dela;<br>
H1 e a tag Ancora são elementos irmãos, pois estão no mesmo nível de identação;<br>
img aqui é a tag filha da ancora;<br>
O comportamento desse código consiste em uma imagem que ao ser clicada leva o úsuario para outra página, a do link que foi passado pelas propriedades.<br>

*(Caso esteja no mobile, abra a imagem)*
<img src="./assets/anchorexemple.png" width="95%" height="400">
<br>

**Propriedades**<br>
**href=""**, Referência de hiperlink. Propriedade que é passada um link de destino.<br>
**src=""**, System Reference Code, um caminho que indica um conteúdo, no caso uma imagem.<br>
**alt=""**, Texto alternativo para caso a imagem não seja carregada, fica como segunda opção de exibição.<br>
**width/height**, parâmetros de largura de altura atribuídos a imagem.

## Formulários
São sessões de captação e controle de dados iseridos pelo usuário, quem recebe esses dados são os **inputs**
<br>
Mas o que são Inputs?
<br>
**inputs e outputs** são termos de programação referentes a entradas e saídas de dados. Como por exemplo uma página de cadastro, onde os inputs vão receber os dados de nome, email e outros tipos de informação.
<br>
Para estabelecer uma base melhor - e também uma indicação de estudo passivo - vou deixer o link de uma [Lista de Inputs](https://www.instagram.com/p/CZ7WyHKFO3e/?utm_medium=copy_link) com os aqueles que mais usamos.
<br>
Os formulários são colocados dentro de uma div específica, a Form, que nesse caso o uso não é apenas semântico mas também pelo uso de funcionalidades. A div Form oferece a possibilidade do uso de alguns parâmetros para manipulação dos dados..
<br>
**action="" -** aqui é passado para qual o endereço os dados serão enviados, se esse parâmetro não for definido, por padrão será enviado para a própria página onde está o formulário.
<br>
**method -** voltando a falar sobre o **http**, já sabemos que ele é o protocolo de comunicação de sistemas, pois bem, com essa propriedade podemos definir o método de envio dos arquivos.
<br>
**POST vs GET -** Quando trabalhamos com dados, o método indicado de se usar é o **POST**, pois ele oculta os dados na hora de fazer o envio. Já pelo método **GET** isso não acontece, um exemplo é a pesquisa do Google, ao buscar algo pelo navegador nós vamos ver no **URL** em meio a diversos caracteres especiais, as palavras chaves que colocamos no input de pesquisa. Essa é a forma de envio do método **GET**.
<br>
### Fieldset
Cada página só pode conter uma tag Form, mas para dividirmos certos tipos de dados (cadastro pessoal, cadastro profissional) podemos usar a tag Fieldset. Passando os valores de cada campo por um ID. Assim como podemos passar um título com tags h1-6 para parágrafos, os Fieldsets também podem receber títulos por meio da tag legend.
<br>

### Button
É possível criar um botão pela propriedade 'input type="button"' mas o mais comum é usar pelo formato de tag button mesmo, sempre que um formulário tiver um button ele será do tipo submit, mas podemos alterar esse tipo como para reset, por exemplo.

### Datalist
Abre uma aba de opções pré definidas, e é escrita como uma tag de lista. Datalist é a tag pai, cada item fica dentro de uma tag option e que podem ser filtradas e colocadas como tags filhas de alguma optiongroup

## Introdução ao CSS
### Inline vs block
Vamos considerar que tudo na nossa página será dividido em caixas - como no exemplo das Divs - e que elas terão propriedades de exibição, ou seja, nós colocamos conteúdos dentro dessas caixas que dependendo das tags, nós veremos diferentes comportamentos de como são mostradas na tela.
<br>
Então antes de aprender sobre manipular essas propriedades através do CSS, vamos entender um pouco de como são o comportamento padrão destas caixas.

#### Display: Block;
Nome referente a blocos, cada conteúdo com a propriedade **block** será alihado um em cima do outro, como se estivesse sendo alinhado numa coluna. Com elementos **Block** você pode alterar seu tamanho (width/height) e as propriedades de margin, padding e border.
<br>
exemplos: p, h1-h6, ul, divs (div, section, footer, etc).

#### Display: Inline;
Propriedade que alinha os elementos em linha, porém seu tamanho não pode ser alterado, apenas as distâncias de margin, padding e border.
<br>
exemplos: a, span, strong, img.

#### Display: inline-block;
O conteúdo continua em linha, mas agora seu tamanho pode ser alterado. Uma junção das duas propriedades de display, dando mais liberdade para manipulação.

## Box Model
**Mas afinal, o que são padding, margin e border?**
Se todos os elementos pocisionados na tela são como caixar, o **Box Model** são as propriedades que englobam a caixa.
<br>
<img src="./assets/boxmodel.jpg" alt="Exemplo de imagem" width="95%" height="600">
<br>
Legenda:
- Margin é o espaço ao redor da caixa
- Border é a borda ao redor da caixa
- Padding é o espaço interno da caixa
- Por fim, o conteúdo exibido na tela.

**Na prática**, margin é uma forma de definir uma distância entre um elemento e outro, um texto de uma imagem por exemplo. O Padding é usado para definir o tamanho da caixa onde ficará o conteúdo, pode ser um botão, um background com cor diferente. Border é caso o que separa o espcaçamento externo do interno (margin do    padding). Tudo isso é manipulável a partir do CSS, porém existe um detalhe que devemos nos atentar.
<br>
Esses valores do **Box Model** já tem propriedades pré definidas pelo sistema, então ao manipular eu posso adicionar um valor de 10 pixels a margem e 5 de padding, mas esses valores ainda serão somados ao border que eu nem coloquei. Sendo assim para evitar esses problema, é usada a propriedade **Box-sizing**, que serve para unificar os valores das nossas caixas de conteúdos.
<br>
Essas podem ser informações ainda abstratas, mas ao decorrer do estudo de CSS tudo isso fará mais sentido. O intuito dessa introdução é como no capítulo sobre internet, falar sobre conceitos básicos que vão nos ajudar ao entendimento global dos outros conceitos.
<br>

**[⬆ voltar ao topo](#index)**

# CSS
**Cascading Style Sheet - Folha de Estilo em Cascatas**
É o arquivo que define o estilo de tudo aquilo que roda no client. Onde você altera como vemos a tela, os título, parágrafos, com espaçamentos, color, posicionamento etc. Cascading Style Sheet, é chamado assim por definir os estilos do conteúdo html aparecerá na tela, e o código CSS é escrito em forma de cascata, manipulando os elementos de cima até o final da página, numa ordem “decrescente”, ou em descida.

# Tipos
{Em Produção}

# Seletores
Os seletores tem diferentes niveis de força e permitem combinações para especificar qual elemento deve ser estilizados.
- Seletor '*' é um seletor de menor nível, ele será responsavél por passar um valor que será aplicado em todos os elementos, até que estes recebam um novo estilo a partir de outro seletor. É majoritariamente usado para zerar as propriedades padrão dos próprios elementos, como **margin**, **border** e **box-sinzing**
- Selecionar por tags, o próximo nível de força são as tags, é possivél decidir os estilos que uma tag específica terá sempre que aparecer.
- Classes e ID's, mais fortes que as tags, é mais recomendado pois dentro de diferentes classes nós podemos ter tags semelhantes que serão atribuídas a diferentes estilos
- Combinadores são as formas de combinar seletores, podendo passar um esmo estilo para diferentes seletores colocando entre vírgulas, como; "p, .classe" ou atribuir a um elemento filho específico dentro de outra tag, como; ".class ul li a".

## Pseudo elementos
{em produção}

## Cores {com variáveis}
{em produção}

## Maniuplação de Layout
{em produção}

## Tipografia
Não apenas com cores, mas as fontes e suas propriedades são fundamentais para passar alguma mensagem para o usuário. Importante lembrar que nem todos os tipos de fontes serão compatíveis com todas as propriedades.
<dl>
  <dt>Font-Family</dt>
  <dd>Nessa propriedade é passada uma série de fontes que estão relacionadas, para indicar ao sistema qual font usar e quais as opções caso a primeira não seja encontrada. Isso na programação é conhecido como **fallback**, como um válvula de escape que previde um possível erro.</dd>
</dl>

<dl>
  <dt>Fonts Web</dt>
  <dd>São maneiras de importar fontes para o seu projeto, para que sejam carregadas pelos navegadores do usuário. O método de import pode ser feito pelo **Google fonts** e colocado na tag de link dentro do head do arquivo.</dd>
</dl>


<dl>
  <dt>Font weight</dt>
  <dd>Prorpiedade para definir a expessura de uma fonte, desde palavras chaves como bold, bolder, light ou por números de 100 a 900</dd>
</dl>


<dl>
  <dt>font style</dt>
  <dd>Permite adcionar um estilo a mais nas fonts, como o *itálico*</dd>
</dl>


<dl>
  <dt>Font size</dt>
  <dd>Define o tamanho da fonte, recebe unidades de medida</dd>
</dl>


<dl>
  <dt>Font Variante</dt>
  <dd>Define estilos especificos, como por exemplo a propriedade de small caps. Todos os caracteres minúsculos ficam com o mesmo tamanho</dd>
</dl>


<dl>
  <dt>Font Stretch</dt>
  <dd>Permite opções de comprimento das fontes, recebe nomes chave como: expended, condensed, normal e valores entre 20% até 50%</dd>
</dl>


<dl>
  <dt>letter spacing / word spacing</dt>
  <dd>Respectivamente define espaço entre as palavras ou letras. Recebe valores entre 1.0 e 2.9</dd>
</dl>


<dl>
  <dt>Text Transform</dt>
  <dd>Define algum estilo especifico, como todas as primeiras letras das palavras em maiusculo. Recebe palavras chave como: uppercase, capitalize, lowercase</dd>
</dl>


<dl>
  <dt>text decoration</dt>
  <dd>Remove traçado de links, ou adiciona em textos normais. O traço pode ser aplicado debaixo das palavras, em cima no cortando no meio.</dd>
</dl>


<dl>
  <dt>text aling</dt>
  <dd>Essa é uma funcionalidade muito usada no Microsoft word por exemplo, de alinhar o texto para algum lado ou preenchendo a página, com: center, right, left ou jutify</dd>
</dl>


<dl>
  <dt>text shadow</dt>
  <dd>Aplica uma sobra ao texto.</dd>
</dl>


<dl>
  <dt></dt>
  <dd></dd>
</dl>


**[⬆ voltar ao topo](#index)**
