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

E no final das contas, após toda essa troca de informações e comunicação em máquina e servidor. É o navegador que irá fazer a interpretação de todo o código que foi recebido por ele (html, css, javascript, imagens etc...).

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

**[Em Produção]**

Aqui vou trazer uma série de atalhos e extensões do VS Code para te ajudar a criar um ambiente produtivo na hora de estudar e praticar.

**[⬆ voltar ao topo](#index)**


# HTML
**[Em produção]**

**Conteúdo de apoio**
-
<a href="https://www.youtube.com/playlist?list=PLmPm9dwop78-WqqusnExiNlRJVHEwZjWQ" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" target="_blank"></a>

A sigla de HTML signiica HyperText MArkup Language. Aqui já sabemos que o **https** é o protocolo de transferência de hipertexto, pois bem, o **HTML** é basicamente o arquivo de texto que o protocolo envia de um computador para outro.

Pense no **HTML** como um texto, a diferença é que nesse texto podemos adicionar a ele outros arquivos como de imagens, vídeos, cores, etc. Então é nele que vamos escrever a maior parte do conteúdo por meio de tags e classes e posteriormente agregar com outros tipos de arquivo.

**Qual a diferença de HTML para HTML5**

O **5** se refere apenas a qual versão que o programa está.

O HTML4 (comumente referido apenas como “HTML”) foi publicado em 1999, enquanto que a maior e mais recente atualização foi lançada em 2014. Chamada de HTML5, a atualização introduziu diversos novos recursos à linguagem.

O HTML5 introduziu algumas melhorias de semântica. As novas tags semânticas informam ao navegador sobre o significado do conteúdo, ajudando na sua interpretação.

## Tags HTML

As tags são usadas para informar ao navegador a estrutura do site. Ou seja: quando se escreve um código em HTML, as tags serão interpretadas pelo navegador, produzindo assim a estrutura e o conteúdo visual da página.

A principal característica das tags é estarem sempre dentro dos sinais de chevron (sinal de “maior que” e “menor que”), ou seja: <tag> </tag>. Em alguns casos específicos, veremos com alto fechamento: <tag />.

Para o auxílio do entendimento das tags, criei um exemplo prático em um arquivo **HTML**. Sintasse a vontade para abrir o repositório, navegar pelo código, e até copiar para poder ver o formato que as tags são apresentadas visualmente no navegador.

<a href="https://github.com/NickolasEdu/html-guide" target="_blank"><img title="HTML5" alt="HTML" height="35" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"></a>


**[⬆ voltar ao topo](#index)**

# CSS
