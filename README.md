Prazer meu nome é Nickolas Eduardo, eu criei este repositório como uma forma de revisar todos os conteúdos que eu estudei relacionados a desenvolvimento web. De inicio eu fiz esses resumos para uso próprio, mas com o tempo conhecendo outros desenvolvedores iniciantes eu cheguei a conclusão de que esses meus resumos poderiam de alguma forma, serem úteis para outros desenvolvedores.

Eu não sou nenhum desenvolvedor Pleno ou Sênior, ainda não sou nem um Júnior. Mas eu sei como é difícil no começo encontrar um norte, sendo assim eu espero que esse projeto ajude e seja útil para aqueles que estiverem lendo.

*”Deveria ser nosso dever espalhar o conhecimento, pois assim quando alguém chegar aonde eu  já estive antes, ele terá mais ferramentas para poder fazer melhor do que eu fiz”*

   **Kevin Hart**

## Index

00. [Inglês](#ingles)
01. [Conceitos Web](#conceitos-web)
02. [Programação Básica](#desenvolvimento-web)
03. [HTML](#html)
04. [CSS](#css)
05. [Javascript](#javascript)
06. [Node](#node)
07. [API](#api)
08. [React.js](#react)
09. [Programação Avançada](#programação-avançada)
10. [Typescript](#typescript)
11. [SQL](#sql)

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


### Dev - Index

- [A Internet](#a-internet)
- [URL](#link-url)
- [HTTPS](#https)
- [Dicionário Web](#dicionário-web)
- [Cliente x Server](#client-vs-server)
- [Browser](#browser)
- [Sites: Estático x SPA](#site-estatico-vs-spa)

## Introdução

*Para se tornar um desenvolvedor web, antes de tudo, devemos entender um pouco sobre o que é a Web. Nesse capítulo eu trouxe algumas definições sobre como a internet funciona. **Mas é importante ressaltar,** que não é necessário decorar tudo o que estiver aqui, a intenção desse artigo como um todo é de que seja um material de apoio para estudos. Sendo assim, aqui nesse capítulo irei trazer alguns conceitos que se tornarão familiares para o desenvolvedor com o tempo, ao decorrer da sua trajetória de estudos quando algum desses termos ou outro semelhante aparecer na sua frente, o conteúdo aqui já servirá como base para fixar os conceitos e revisão para cada vez que estiver com alguma dúvida*.

## A Internet

A explicação mais simples do conceito de internet, é que ela é uma conexão global de computadores. Ao conectar dois ou mais computadores dentro de um mesmo espaço, você tem uma rede interna, do qual pode se conectar com outros computadores ou outras redes internas. Daí vem o nome Internet, de inter-network. O acesso a redes externas é feito entre a conexão da sua rede e uma outra rede de computadores muito maior, neste caso o seu provedor de Internet.

Estes computadores interligados, estão recebendo e enviando dados durante todo o tempo. Partindo dos backbones, passando pelo seu provedor de internet e processando os dados por meio da tecnologia **TCP / IP**.

"Os backbones são um meio de centralização dos dados, servidores centrais que recebem e encaminham as informações. Como a tradução literal diz, são a espinha dorsal da internet" 

## Link URL

O URL (**Uniform Resource Locator) esse conceito é traduzido como** Localizador e Identificador de Recursos. Aqui, recursos são os endereços das aplicações web, os sites que desenvolvemos. Para fazer essa localização e comunicação entre os computadores, ele é integrado ao protocolo **HTTP**. Usando regras de comunicação do sistema para passar as informações

## HTTP

Hiper Text Transfer Protocol (Protocolo de Transferência de Hipertexto)

Esse é o método básico de como os computadores conversam, chamado de Request-response (ou Request-Reply), são os protocolos de requisitos feitos entre os computadores e servidores para qual e como os dados serão trafegados.

Basicamente é um conjunto de recursos que tem como função fazer a conversa do PC do client converse de forma segura, rápida e otimizada com o **IP** dos servidores.

## Dicionário Web

## IP

O Internet Protocol, mais conhecido como **IP**, nada mais é o endereço de cada computador, como um número de CEP ou CPF. Quando você baixa uma foto, vídeo ou carrega um site, esses dados são divididos em partes, nesses dados são registrados o endereço de **IP** do seu dispositivo, e do dispositivo em que estes dados estão armazenados.

Como se você enviasse uma cadeira desmontada, mas cada parte dela você enviasse em pacotes separadamente pelo correio, e junto destas informações você envia um guia informando em quantas partes a cadeira está dividida e como ela deve ser montada, sendo esse sendo o trabalho do **TCP**.  A  diferença, claro, é que com a Internet de hoje, o envio de dados é feito de forma praticamente instantânea, por conta dos milhões de computadores interconectados.

## TCP

Após os dados serem divididos, e terem sido registrados com os **IP's** de destinatário e remetente, essa informação navega desde o servidor alocado, navegando pelos cabos submarinos de internet, roteadores e todos os tipos de conexão, até encontrarem o dispositivo de destino.

Quando a informação chega é o **TCP** (Transmission Control Protocol) que irá organizar e conferir se não há nenhum dado faltando, caso isso ocorra ele reenvia o pedido para o **IP** inicial, para o reenvio deste dado específico.

Se essa informação sobre número de **IP**, servidores e banco de dados pode parecer confusa, é porque realmente é. Por esse motivo que existe o **DNS**.

## DNS 

Domain Name System é o sistema que dá nome aos **IP's**, basicamente o conhecido "WWW" Com esse sistema , facilita nossa vida ao pesquisarmos algum site, e também facilitando a transmissão de dados, pois se em um computador usado como um servidor de dado que armazena vários domínios, seria muito mais complicado encontrar o site requisitado dentro daquele **IP**.

## Proxy

Proxy nada mais é que os meios que esses dados vão de um lado para outro, seja roteadores, cabos de fibra ótica, modens, outros computadores. Todos de alguma forma interligados, a todo momento recebendo informações endereçadas seja do Cliente para o servidor ou vice-versa.

## Client vs Server

Client se refere ao computador do usuário (como o seu no caso) o Servidor é um computador ou uma rede especifica onde existe alguma informação armazenada e para ser exibida na máquina do usuário, é necessário criar uma comunicação. Onde o **Client** fará um pedido/request para o servidor, o **Server** irá consultar se essa informação existe, e se caso ele tenha armazenado o que foi pedido, o servidor fará o Response mandando a informação de volta para o computador do usuário do lado do **Client**.

**Explicação prática**

Vamos usar o funcionamento do YouTube como exemplo, você abre a plataforma pelo seu navegador e usa a barra de pesquisa para procurar um vídeo ou canal pelo nome.

Até aqui o que ocorreu foi: Você pediu para o seu computador procurar informações sobre o site do YouTube, que te respondeu enviando de volta a página de inicio deles (a página **home**), logo depois usou o **input** de dados para procurar um vídeo/canal pelo  nome.

Aqui seu computador mandou outro **Request** para os servidores do Youtube, que buscaram todas informações que são compatíveis com aquilo que você enviou na barra de pesquisa e fez o **Response** para o **Client,** enviando todas essas informações pelo processo que falamos acima.

## Browser

E no final das contas, após toda essa troca de informações e comunicação em máquina e servidor. É o navegador que irá fazer a interpretação de todo o código que foi recebido vindo do servidor (html, css, javascript, imagens etc...).

## Site estatico vs SPA

Um site estático é quando ele enviar para o navegador tudo de uma vez, para ver algum conteúdo atualizado é preciso recarregar a página (dar um F5). Uma SPA - Single Page Aplication (Aplicação de uma página só) é quando a página vai trazendo as informações conforme você vai requisitando, exemplo o Facebook que na página inicial existe dados de Feed, stories, chat que são carregados de forma simultanea. 

Agora a função de fazer que isso funcione, cabe o programador que seguindo algumas séries de regras criará e desenvolverá a comunicação entre Sites, Dispositivos e APIs.

## CRUD
Essa sigla se refere a 'Create, Read, Update e Delete', então toda rotina que permite essas manipulações pode ser considerdo CRUD. Desde interface visual, banco de dados, até o código com os verbos HTTP.

**[⬆ voltar ao topo](#index)**

# Desenvolvimento Web

**Index**

- [Linguagem de programação](#linguagem-de-programação)
- [IDE's](#ide)
- [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
- [Terminal Git Bash](#git-bash)
- [GitHub](#git-vs-github)
- [Git Command Line](#comandos-git)
- [Dicionário Dev](#dicionário-dev)

## Linguagem de programação

Os computadores não falam a mesma íngua que nós, basicamente eles entendem linguagem binária, aqueles clássicos zeros e uns (010101) que estamos acostumados a ver em filmes. As linguagens de programação é a maneira que foi criada para que nós possamos passar instruções para ser interpretadas pelos computadores.

Daí que vem os termos **Algoritmo** e **Lógica de Programação**, que resumidamente são: Um conjunto de comandos que façam sentido juntos, e encontrar maneiras de fazer com que todos eles se entendam sem prejudicar o funcionamento da aplicação, os já conhecidos **Bugs**.

Se até aqui esses conceitos não ficaram claros, pode ficar tranquilo pois eles serão melhor aprofundados com o decorrer e você logo se acostumará e se tornará intimo desses termos (principalmente com os **Bugs)**

Mas já vou aproveitar para dar um exemplo simplificado.

Pense na ação de lavar a louça e imagine de que forma você escreveria um passo a passo de como ela deve ser lavada. Se pensar muito ou perguntar para alguma outra pessoa, chegará a conclusão de que existem várias maneiras de se lavar a louça. Uns preferem lavar primeiro os pratos, outros já gostam de deixa-los para o final. Isso não importa muito aqui, a questão é: pensando no processo como um todo, o ideal será que você encontre uma maneira prática de fazer isso.

Se você usando alguma forma de comando mande um computador ensaboar e enxaguar copos, colheres e pratos separadamente e um por vês, será uma maneira de fazer. Mas se nesse meio tempo não houver um comando mandando ele desligar a torneira enquanto ensaboa outro item, apesar da tarefa ser concluída, ele terá gastado muita água no processo.

O que ocorre é **existem muitas maneiras se se escrever códigos e desenvolver sistemas, e com o tempo você irá aprender boas práticas. Como iniciante não deve se preocupar com isso agora, mas o que eu quero dizer é que, as vezes nós não sabemos se o que fazemos está certo ou não, então por agora tente focar em aprender o básico que a evolução e a autocrítica virão naturalmente com o tempo**.

## IDE 

Integrated Development Environment (Ambientes de Desenvolvimento Integrado)

Esses são os editores de código, a ferramenta fundamental do programador.

Para o desenvolvimento Web o melhor recomendado é o Visual Studio Code.

Também temos outras opções como Sublime Text e Atom, mas em questão de funcionalidades e performance, o VS Code tem vantagem entre os dois.

## Ambiente de desenvolvimento

*Um ambiente de desenvolvimento é tudo aquilo que te auxilia a ser mais produtivo. Para esse ínicio vou apresentar algumas ferramentas e extensões do VS Code que nos ajudam.*

- **Tema do editor**, a escolha de um tema pode ser muito útil no começo pois ao se acostumar com uma paleta de cores, você logo vai encontrar os elementos na tela só de bater o olho, ajudando muito a diferenciar funções, variaveis e constantes.
- **HTML Preview**, ele te trás uma pré visualização numa janela ao lado do próprio código, bastante simples mas ajuda a você ver como o HTML está sendo apresentado, no inicio pode ser útil para pegar o comportamento das Tags.
- **Live Server**, esse sim é mais completo que o HTML Peview. O Live Server roda seu arquino direto no navegador e a cada vez que salva você pode ver com qual cara seu site está ficando de maneira semi-automática
- **Codesnap**, Uma situação muito comum quando um dev precisa compartilhar um código que não está no GitHub ou precisa achar um erro em uma parte especifíca. O Codesnap é essencial para isso, essa extenção tira um print em ótima qualidade do trecho do código que você escolher, já importa para imagem pronta para ser enviada para outro dev.
- **Dev Tools**, ou ferramente do desenvolvedor que abrimos pelo próprio navegador. Com ela conseguimos ver dados do código fonte, Estilos, consultas ao servidor de quase qualquer site que visitamos, e principalmente para estudarmos o comportamento dos nossos próprios projetos.


## Git Bash

Um terminal que recebe os mesmos comandos do terminal Shell, usados nos sistemas operacionais Mac e Linux, porém com o GitBash os mesmos comandos funcionam no Windows.

O terminal recebe linhas de comandos, atalhos escritos de um software não visual. Para lembrar algum comando que não lembre exatamente a syntax o próprio terminal oferece ajudas, como comando -help, algum caractere + tab que retornará todas as opções de comando com aquelas letras e no terminal ele ainda pode indicar algum comando, quando escrevemos algo semelhante mas não idêntico.

<dl>
  <dt>pwd</dt>
  <dd>
    Retorna o path do diretório atual
  </dd>
</dl>

<dl>
  <dt>cd</dt>
  <dd>
    Comando para mudar o diretório - change directory - recebe dc + nome da pasta. Ou cd + .. para retornar para o diretório anterior. Ou todo o caminho até o diretório para pular etapas, ex: cd diretorio/outro/final.
  </dd>
</dl>

<dl>
  <dt>ls</dt>
  <dd>
    Lista os arquivos e diretórios dentro daquele diretório. Recebe também argumentos para controlar essa listagem, sempre com '-' antes do argumento, e que podem ser combinados. Exemplo, -l retorna mais informações + -h trás informações de melhor interpretação. Logo, pode usar o comando 'ls -lh'. Argumento -a para trazer todos os arquivos, mesmo os ocultados pelo sistema. Argumento -R lista todos os diretórios dentro de outros diretórios.
  </dd>
</dl>

<dl>
  <dt>file e stat</dt>
  <dd>
    Pega arquivos - foto, audio, video, etc - retorna todos os dados de propriedades dos arquivos. Enquanto o stat trás iformações sobre dono, modificação e tamanho do arquivo ex: file photo.png ou stat photo.png.
  </dd>
</dl>

<dl>
  <dt>mkdir</dt>
  <dd>
    Criar um diretório novo - make-directory - e pode receber um argumento -p para criar o repositório e outro dentro dele. ex: mkdir -p main/outro.
  </dd>
</dl>

<dl>
  <dt>touch</dt>
  <dd>
    Criação de arquivos, possibilitando adcionar arquivos no diretório direto pelo terminal. Também permite criar vários arquivos. ex: touch index.hmtl main.js style.css.
  </dd>
</dl>

<dl>
  <dt>cp</dt>
  <dd>
    Recebe arquivos como argumento para serem copiados para outro diretório, que é o último argumento. Para copiar diretórios é o mesmo formato, a pasta de destino deve vir no final e para funcionar no inicio por no comando -r. ex: -r directory1 directory2 directory3
  </dd>
</dl>

<dl>
  <dt>mv</dt>
  <dd>
    Mover arquivos entre diretórios. Recebe o arquivo - ou arquivos -  e o destino no último argumento. E também renomeia arquivos, recebendo o arquivo e seu novo nome. ex: mv index.html main.html.
  </dd>
</dl>

<dl>
  <dt>rm</dt>
  <dd>
    Remover arquivos do software, recebe arquivos unicos ou multiplos, para remover diretórios recebe -r e para forçar remoção de algum arquivo especifico -rf.
  </dd>
</dl>

<dl>
  <dt>wildcards</dt>
  <dd>
    Os coringas da linha de comando, * e ?. São usados aliados aos outros comandos, exemplo: mv directory* = nesse caso vai mover todos os diretórios que começam com diretory e tem alguma descrição (directoryMain, directoryOutro, directoryEtc) já mv directory? = pegara apenas as pastas que tem mais um caractere depois do nome (directory1, directory2, directory3).
  </dd>
</dl>

<dl>
  <dt>find</dt>
  <dd>
    Um filtro de busca que recebe parâmetros de pesquisa. exemplo: find . -type f -name *.png* = recebe o comando . para indicar que é no diretório atual, f de file para indicar que é um arquivo, -name para pesquisar por aquivos que contém estas palavras. Para diretórios o comando é find . -type d -name *directory*.
  </dd>
</dl>

<dl>
  <dt>nano</dt>
  <dd>
    Recebe um arquivo para ser editado. Para sair crtl + x
  </dd>
</dl>

## Git vs GitHub
Apesar de ter nomes parecidos, não são a mesma coisa. Porém são essenciais para a manipulação de projetos. Para uma visualização melhor do passo a passo de configuração, [Aqui está um vídeo explicativo](https://www.youtube.com/watch?v=UBAX-13g8OM).


## Version Control System - Git

Os sistemas de controle de versão vieram para tapar os buracos dos sistemas de controle de revisão ou em nuvem. Suas limitações eram que, um mantém o histórico de versões na nuvem, dependendo de um serviço esterno para que se mantenha funcionando, e os sistemas de revisão onde era necessário criar manualmente essas versões, dificultando o compartilhamento. Os VCS é capaz de fazer as duas coisas, trazendo tudo o que é necessário para a visualização do histórico de projeto.
Para fazer o controle e compartilhamentos de projeto estaremos fazendo uso do Git e do GitHub - que assim como Java e Javascript, soam parecidos mas não são.

## GitHub - IT service management company

Um servidor para hospedar Repositórios, que são "pastas" onde seus projetos ficarão guardados e disponivéis para outros programadores acessarem. Unindo as utilidades do git e do github é possível manipular completamente o estado do seu projeto, controlando as versões em que ele é atualizado e salvando em um servidor remoto para que possa ser compartilhado ou simplesmente salvo fora da sua máquina.

### Comandos Git

Todas as alterções que fizermos terão 3 estados de processamento: *Workstage*, *Staged* e *Commit*. **Workstage** se refere ao arquivo que está sendo editado, você salva as alterações na sua máquina mas não se reflete no projeto na nuvem. **Staged** é quando o arquivo está pronto para ser inserido no repositório final, **Commit** é as alterações adcionadas e definindo uma nova versão atual para o projeto.

<dl>
  <dt>git clone 'endereço do repositório'</dt>
  <dd>
    Cria uma cópia local na sua máquina de um repositório remoto
  </dd>
</dl>

<dl>
  <dt>git init</dt>
  <dd>
    Dentro de um diretório local esse comando dá start no git, logo o sistema indica que esse diretório se tornou a branch master do projeto.
  </dd>
</dl>

<dl>
  <dt>git status</dt>
  <dd>
    Trás informações sobre o estado do projeto, como qual a branch, os commits e se ainda tem algo para ser adicionado
  </dd>
</dl>


<dl>
  <dt>git add 'nomeArquivo' ou '.' para todos os arquivos rastreados</dt>
  <dd>
    No chamado do git status ele avisa que para adicionar arquivos é preciso usar o comando de add, isso porque não basta criar o arquivo dentro da mesma pasta, após o git ser iniciado agora é preciso inserir esses arquivos via commits.
  </dd>
</dl>

"**Nesse caso, ao criar um arquivo dentro da pasta e dar git status, esse novo arquivo irá ser apresentado constando na pasta mas será exibido na cor vermelha, indicando que não faz parte do estage, ou que não está sendo rastreado pelo commit que será subido para o projeto principal. Essa é a função do git add, indicar a inserção desse arquivo e ao pedir git status de novo o arquivo será exibido na cor verde, pronto para ser commitado**"

<dl>
  <dt>git commit -m"Mensagem do commit"</dt>
  <dd>
    Esse comando fecha o pacote que será subido para o projeto principal e com uma mensagem para indicar qual foi a aplicação da atualização. Tudo feito até aqui, com arquivos adicionados e status de ok confirmados, o pack está preparado para ser enviado ao repositório remoto.
  </dd>
</dl>


<dl>
  <dt>git commit -ma"Mensagem do commit"</dt>
  <dd>
    Passar um arquivo rastreado do Workstage direto para o commit stage, pulando o staged.
  </dd>
</dl>


<dl>
  <dt>git log</dt>
  <dd>
    Ao fazer o commit o sistema não dá nenhum feedback que deu certo, sendo assim o comando log serve para vermos o histórico de commits e confirmar que o commit foi aceito. Cada commit recebe um HASH SHA-1, que é como um ID para indentificar essa versão no tempo do projeto.
  </dd>
</dl>


<dl>
  <dt>git diff</dt>
  <dd>
    Mostra no terminal as alterações feitas no commit.
  </dd>
</dl>


<dl>
  <dt>git pull</dt>
  <dd>
    Deve ser feito antes do push, o sistema procura se há algum commit na fila.
  </dd>
</dl>


<dl>
  <dt>git push origin master</dt>
  <dd>
    Finalmente enviar o pacote para o repositório. Ao chamar o git push o sistema vai indicar um comando para não ser necessário chamar o origin master todas as vezes, deixando simplificar para apenas git push. o comando é '--set-upstream origin master'
  </dd>
</dl>


<dl>
  <dt>Branchs</dt>
  <dd>
    As branchs são onde as atualizações são feitas, cada pasta pode ter uma branch e lá a alteração é feita sem alterar o arquivo final.
  </dd>
</dl>


<dl>
  <dt>git checkout -b 'nome_branch'</dt>
  <dd>
    Cria uma branch, toda alteração será  feita e commitada nessa branch e então atualizada no projeto final
  </dd>
</dl>


<dl>
  <dt>git checkout 'nome_branch'</dt>
  <dd>
    Navegar entre as branchs, como o cd
  </dd>
</dl>


<dl>
  <dt>git merge 'nome_branch'</dt>
  <dd>
    Na branch master ao rodar esse comando os arquivos da branch selecionada serão adicionados na branch master do projeto. Feito isso é hora de rodar o git push origin master na branch master.
  </dd>
</dl>


<dl>
  <dt>git branch -D</dt>
  <dd>
    Excluir a branch vazia após ter feito o merge, porém a exclusão do repositório remoto deve ser feito manualmente
  </dd>
</dl>

<dl>
  <dt>git fetch</dt>
  <dd>
    Copia e atualiza as branchs remotas para o desenvolvimento local.
  </dd>
</dl>

<dl>
  <dt>git ignore</dt>
  <dd>
    Um dos arquivos do projeto tem o nome .gitignore, nele você lista o nome dos arquivos e pastas que não ficarão disponíveis no repositório remoto
  </dd>
</dl>


<dl>
  <dt>git restore 'arquivo'</dt>
  <dd>
    Recuperar um arquivo exluído do staged
  </dd>
</dl>

<dl>
  <dt>git revert 'HASH-1'</dt>
  <dd>
    Retornar o projeto para um ponto no tempo espcifico.
  </dd>
</dl>

## Branchs

O conceito de branch é criar novos caminhos de desenvolvimento que não afetam o principal, para o conteúdo ser aplicado no original é preciso fazer o merge. Porém deve existir um contexto pra a execução do merge, primeiro é não haver conflitos. Os conflitos acontecem quando algo foi alterado localmente enquanto a versão remotava já havia sido atualizada, então o sistema não vai saber quais conteúdos devem ser mantidos ou não, para resolver estes conflitos a resolução deve ser feita manualmente.

O outro importante fator deste contexto é a Branch Protection Rule, que são as configurações do repositório que definem quem são os responsavéis por aprovar o merge da branch de desenvolvimento com a principal, onde em um time, por exemplo, haverão desenvolvedores ou analistas que fazem esta função. Ou no caso de um projeto open source - um repositório aberto para receber manutenção de outros devs - deverá ser feito um pull request, onde sua branch ficará em analise para ser aprovada ou não pelos desenvolvedores que criaram o repositório.

**[⬆ voltar ao topo](#index)**


# HTML

**Index**

- [Definição](#definição-do-html)
- [Tags](#tags-html)
- [Formulários](#formulários)
- [Audio e Video](#audio-e-vídeo)
- [Introdução ao CSS](#introdução-ao-css)
- [Box Model](#box-model)

### Material de apoio do capítulo

[Playlist com instalação do VS Code e primeiros passos HTML](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)

Dois sites com documentação das tecnologias trabalhadas, muito úteis para relembrar maneiras de uso e revisar syntax de elementos:

[MDN Web Docs](https://developer.mozilla.org/en-US/)
&
[W3Schools]("https://www.w3schools.com/")

## Definição do HTML

A sigla de HTML significa HyperText MArkup Language. Aqui já sabemos que o **https** é o protocolo de transferência de hipertexto, pois bem, o **HTML** é basicamente o arquivo de texto que o protocolo envia de um computador para outro.

Pense no **HTML** como um texto, a diferença é que nesse texto podemos adicionar a ele outros arquivos como de imagens, vídeos, cores, etc. Então é nele que vamos escrever a maior parte do conteúdo por meio de tags e classes e posteriormente agregar com outros tipos de arquivo.

**Qual a diferença de HTML para HTML5**

O **5** se refere apenas a qual versão que o programa está.

O HTML4 (comumente referido apenas como “HTML”) foi publicado em 1999, enquanto que a maior e mais recente atualização foi lançada em 2014. Chamada de HTML5, a atualização introduziu diversos novos recursos à linguagem.

O HTML5 introduziu algumas melhorias de semântica. As novas tags semânticas informam ao navegador sobre o significado do conteúdo, ajudando na sua interpretação.

**[⬆ voltar ao capitulo](#html)**

## Tags HTML

As tags são usadas para informar ao navegador a estrutura do site. Ou seja: quando se escreve um código em HTML, as tags serão interpretadas pelo navegador, produzindo assim a estrutura e o conteúdo visual da página.

A principal característica das tags é estarem sempre dentro dos sinais de chevron (sinal de “maior que” e “menor que”).

Para o auxílio do entendimento das tags, criei um exemplo prático em um arquivo **HTML**. Esse arquivo está disponível para ser clonado, navegar pelo código ou até para ser copiado amnualmente e ir acompanhando visualmente a apresentação das tags, seja no navegador com live server ou pelo HTML Preview.

[Exemplos de uso](https://github.com/NickolasEdu/html-guide)

Ao navegar pelo código de exemplo, notamos que: Tudo dentro da tag 'head' é referente a configuração, encaixe na tela, título da aba, ícone da janela, importação de fonte, importação de CSS, é a cabeça do nosso sitema. Já no 'body' vai literalmente o corpo, todo o conteúdo visivél para o usuário. <br>
Até aqui fomos introduzidos as tags e as divs, que são basicamente caixas que agrupam certos conteúdos. Div 'header' por exemplo agrupa todas as tags que estão no cabeçalho da página. E que cada div pode receber uma classe. <br>

**Esclarecimento de conceitos**<br>
**Semântica:** A forma que as ferramentas de busca dos navegadores irão ler a nossa página. Assim como uma redação precisa ser clara e bem escrita, nosso código também, tanto para quem for ler as linhas que escrevemos, como o navegador para buscar esses informações. A semântica é essencial para o SEO - Search Engine Optimization (Otimização para motores de busca).<br>
**Indentação:** Essa é ação de afastar o texto da margem, de forma que fique alinhado com as tags que o agrupa. Sempre devemos identar com a tecla tab, nunca com a barra de espaço.<br>
**Hierarquia de Tags:** com o tempo vamos começar a falar sobre elementos pais e filhos. Um elemento pai é quando uma tag ou div agrupa outras tags dentro dela, tags irmãs são as tags dentro do mesmo alinhamento quando estão agrupadas.<br>


Bora entender o funcionamento aqui <br>
A tag Main é o elemento pai agrupando outros elementos dentro dela;<br>
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

**Tabelas**
Uma tag que agrupa textos em linhas e colunas.

```html

<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Idade</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th>Alan</th>
      <th>33</th>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>Total</th>
      <th>Número</th>
    </tr>
  </tfoot>
</table>

```

<dl>
  <dt>table</dt>
  <dd>
    tag pai da apresentação em tabela
  </dd>
</dl>

<dl>
  <dt>th</dt>
  <dd>
    O titulo de cada coluna
  </dd>
</dl>

<dl>
  <dt>tr</dt>
  <dd>
    O título de cada linha
  </dd>
</dl>

<dl>
  <dt>td</dt>
  <dd>
    Os condeúdos inseridos
  </dd>
</dl>

<dl>
  <dt>thead, tbody, tfooter</dt>
  <dd>
    função semelhante as tags comuns do html, servem como div para fazer a sepração do conteúdo.
  </dd>
</dl>

<dl>
  <dt>rowspan/columnspan</dt>
  <dd>
    Recebe um valor numérico de linhas ou colunas que irá ocupar e que serão apresentados em branco no conteúdo.
  </dd>
</dl>

<dl>
  <dt>Caption</dt>
  <dd>
    A descrição da tabela
  </dd>
</dl>

<dl>
  <dt>colgrup</dt>
  <dd>
    Estilização do conteúdo
  </dd>
</dl>

**[⬆ voltar ao capitulo](#html)**

## Audio e Vídeo

Apresentação e importação de arquivos no HTML, podemos trazer esses arquivos do nosso repositório assim como fazemos com imagens - apesar dessa prática consumir muito processamento.

Tanto a tag de audio como a de vídeo recebem parâmetros semelhantes que permitem que seja feito o controle de execução.

**audio** recebe as dimensões e a tag de controls para manipulção de execução do usuário.
**Source** recebe o caminho e o tipo do arquivo.

```javascript

<audio width="100px" height="100px" controls>
  <source src='./directory/arquivo'
    type="audio/mp3"
  >
</audio>
```

<dl>
  <dt>iFrame</dt>
  <dd>
    Porém existe a opção de importar estes arquivos de outro servidores, por exemplo, do youtube com link personalizado. São os links embed, já preparados para serem usados dentro da tag iFrame, onde será feita a importação e dentro dessa tag a apresentação do conteúdo externo.
  </dd>
</dl>

**[⬆ voltar ao capitulo](#html)**

## Formulários

São sessões de captação e controle de dados iseridos pelo usuário, quem recebe esses dados são os **inputs**
<br>
Mas o que são Inputs?
<br>

<dl>
  <dt>Inputs e Outputs</dt>
  <dd>
   São termos de programação referentes a entradas e saídas de dados. Como por exemplo uma página de cadastro, onde os inputs vão receber os dados de nome, email e outros tipos de informação. Para estabelecer uma base melhor - e também uma indicação de estudo passivo - vou deixer o link de uma com os inputs que mais usamos.
  </dd>
</dl>

[Lista de Inputs](https://www.instagram.com/p/CZ7WyHKFO3e/?utm_medium=copy_link)


<dl>
  <dt>Form</dt>
  <dd>
  Os formulários são colocados dentro de uma div específica, a Form, que nesse caso o uso não é apenas semântico mas também pelo uso de funcionalidades. A div Form oferece a possibilidade do uso de alguns parâmetros para manipulação dos dados..
  </dd>
</dl>

action="" - aqui é passado para qual o endereço os dados serão enviados, se esse parâmetro não for definido, por padrão será enviado para a própria página onde está o formulário.
<br>
method - voltando a falar sobre o http, já sabemos que ele é o protocolo de comunicação de sistemas, pois bem, com essa propriedade podemos definir o método de envio dos arquivos.
<br>
POST vs GET - Quando trabalhamos com dados, o método indicado de se usar é o **POST**, pois ele oculta os dados na hora de fazer o envio. Já pelo método **GET** isso não acontece, um exemplo é a pesquisa do Google, ao buscar algo pelo navegador nós vamos ver no **URL** em meio a diversos caracteres especiais, as palavras chaves que colocamos no input de pesquisa. Essa é a forma de envio do método **GET**.
<br>


<dl>
  <dt>Fieldset</dt>
  <dd>
    Cada página só pode conter uma tag Form, mas para dividirmos certos tipos de dados (cadastro pessoal, cadastro profissional) podemos usar a tag Fieldset. Passando os valores de cada campo por um ID. Assim como podemos passar um título com tags h1-6 para parágrafos, os Fieldsets também podem receber títulos por meio da tag legend.
  </dd>
</dl>


<dl>
  <dt>Button</dt>
  <dd>
    É possível criar um botão pela propriedade 'input type="button"' mas o mais comum é usar pelo formato de tag button mesmo, sempre que um formulário tiver um button ele será do tipo submit, mas podemos alterar esse tipo como para reset, por exemplo.
  </dd>
</dl>


<dl>
  <dt>Datalist</dt>
  <dd>
  Abre uma aba de opções pré definidas, e é escrita como uma tag de lista. Datalist é a tag pai, cada item fica dentro de uma tag option e que podem ser filtradas e colocadas como tags filhas de alguma optiongroup.
  </dd>
</dl>

**[⬆ voltar ao capitulo](#html)**

## Introdução ao CSS

<dl>
  <dt>Inline vs Block</dt>
  <dd>
    Vamos considerar que tudo na nossa página será dividido em caixas - como no exemplo das Divs - e que elas terão propriedades de exibição, ou seja, nós colocamos conteúdos dentro dessas caixas que dependendo das tags, nós veremos diferentes comportamentos de como são mostradas na tela.
  </dd>
</dl>

Então antes de aprender sobre manipular essas propriedades através do CSS, vamos entender um pouco de como são o comportamento padrão destas caixas.

<dl>
  <dt>Display: block</dt>
  <dd>
  Nome referente a blocos, cada conteúdo com a propriedade block será alihado um em cima do outro, como se estivesse sendo alinhado numa coluna. Com elementos Block você pode alterar seu tamanho (width/height) e as propriedades de margin, padding e border.
<br>
exemplos: p, h1-h6, ul, divs (div, section, footer).
  </dd>
</dl>

<dl>
  <dt>Dislay: Inline</dt>
  <dd>
  Propriedade que alinha os elementos em linha, porém seu tamanho não pode ser alterado, apenas as distâncias de margin, padding e border.
<br>
exemplos: a, span, strong, img.
  </dd>
</dl>

<dl>
  <dt>Display: inline-block</dt>
  <dd>
  O conteúdo continua em linha, mas agora seu tamanho pode ser alterado. Uma junção das duas propriedades de display, dando mais liberdade para manipulação.
  </dd>
</dl>

**[⬆ voltar ao capitulo](#html)**

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

<p>
  **Na prática**, margin é uma forma de definir uma distância entre um elemento e outro, um texto de uma imagem por exemplo. O Padding é usado para definir o tamanho da caixa onde ficará o conteúdo, pode ser um botão, um background com cor diferente. Border é caso o que separa o espcaçamento externo do interno (margin do    padding). Tudo isso é manipulável a partir do CSS, porém existe um detalhe que devemos nos atentar.
</p>

<p>
  Esses valores do **Box Model** já tem propriedades pré definidas pelo sistema, então ao manipular eu posso adicionar um valor de 10 pixels a margem e 5 de padding, mas esses valores ainda serão somados ao border que eu nem coloquei. Sendo assim para evitar esses problema, é usada a propriedade **Box-sizing**, que serve para unificar os valores das nossas caixas de conteúdos.
</p>
<p>
  Essas podem ser informações ainda abstratas, mas ao decorrer do estudo de CSS tudo isso fará mais sentido. O intuito dessa introdução é como no capítulo sobre internet, falar sobre conceitos básicos que vão nos ajudar ao entendimento global dos outros conceitos.
</p>

## SEO

**[⬆ voltar ao topo](#index)**

# CSS

**Index**
- [Definição do CSS](#definição-css)
- [Tipos de importação](#tipos-de-estilização)
- [Seletores](#seletores)
- [Pseudo Class](#pseudo-classes)
- [Pseudo Element](#pseudo-elementos)
- [Cores Web](#cores-web)
- [Elementos na tela](#elementos-na-tela)
- [Background](#background)
- [Position](#position)
- [Tipografia](#tipografia)
- [SVG](#svg)
- [Posicionamentos Responsivos](#posicionamentos-responsivos)
- [Flexbox](#flexbox)
- [Grid](#grid)

## Definição CSS
**Cascading Style Sheet - Folha de Estilo em Cascatas**
É o arquivo que define o estilo de tudo aquilo que roda no client. Onde você altera como vemos a tela, os título, parágrafos, com espaçamentos, color, posicionamento etc. Cascading Style Sheet, é chamado assim por definir os estilos do conteúdo html aparecerá na tela, e o código CSS é escrito em forma de cascata, manipulando os elementos de cima até o final da página, numa ordem “decrescente”, ou em descida.

## Material de Apoio
[Playlist de primeiros passos no CSS](https://www.youtube.com/watch?v=oSJgsGbmK4c&list=PLmPm9dwop78_WRFefS3xtQ--NlpmZiTer)

## Tipos de estilização
Existem 3 maneiras de estilizarmos o nosso arquivo HTML através do CSS, que são:

<dl>
  <dt>CSS Inline</dt>
  <dd>O formato inline é passando os estilos como propriedades dentro de uma tag como 'style=""', esse modelo não é nada prático tanto para escrever como parar dar manuntenção.</dd>
</dl>


<dl>
  <dt>Tag Style</dt>
  <dd>A tag Style é colocada dentro do Head e funciona perfeitamente, recomendada para testes simples caso não prefira fazer através do DevTools ou até para páginas estáticas de um carregamento só, ou seja, todo o conteúdo da página está ali e não á nenhum tipo de navegação para outras páginas, pois a tag Style faz as maniupalções de estilo apenas na página no qual foi declarada.</dd>
</dl>


<dl>
  <dt>Import do arquivo CSS</dt>
  <dd>A melhor prática é a importação de um arquivo CSS. Essa importação é feita na tag head com uma tag de link indicando o caminho até o arquivo CSS com 'href="arquivo.css"'.</dd>
</dl>

*A sintaxe CSS recebe um seletor, uma propriedade e um valor*
<img rel="Imagem exemplo da syntax" src="./assets/ph.jpg">

**[⬆ voltar ao capitulo](#css)**

# Seletores
Os seletores tem diferentes niveis de força e permitem combinações para especificar qual elemento deve ser estilizados.
- Seletor '*' é um seletor de menor nível, ele será responsavél por passar um valor que será aplicado em todos os elementos, até que estes recebam um novo estilo a partir de outro seletor. É majoritariamente usado para zerar as propriedades padrão dos próprios elementos, como **margin**, **border** e **box-sinzing**
- Selecionar por tags, o próximo nível de força são as tags, é possivél decidir os estilos que uma tag específica terá sempre que aparecer.
- Classes e ID's, mais fortes que as tags, é mais recomendado pois dentro de diferentes classes nós podemos ter tags semelhantes que serão atribuídas a diferentes estilos
- Combinadores são as formas de combinar seletores, podendo passar um esmo estilo para diferentes seletores colocando entre vírgulas, como; "p, .classe" ou atribuir a um elemento filho específico dentro de outra tag, como; ".class ul li a".

Cada seletor tem uma força, que faz com que exista uma pirâmide de força onde um seletor se sobrepõe ao outro. Segue um exemplo das forças de seletores, sendo quanto maior o número, maior a força.

<ol>
  <li>Seletor universal '*' e pseudo classes</li>
  <li>Seletores de elemento e combinadores</li>
  <li>pseudo elementos</li>
  <li>classes e propriedades de tag</li>
  <li>Seletor de ID</li>
  <li>CSS Inline</li>
 </ol>

**[⬆ voltar ao capitulo](#css)**

## Pseudo classes
São atributos colocados após seletores com "::pseudo-class"

<dl>
  <dt>::first-child</dt>
  <dd>
    Seleciona o primeiro elemento filho.
  </dd>
</dl>

<dl>
  <dt>::nth-of-type()</dt>
  <dd>
    Seleciona algum elemento pelo index dele dentro do container, que é passado como argumento.
  </dd>
</dl>

<dl>
  <dt>::nth-child()</dt>
  <dd>
    Faz a mesma navegação que o of-type, mas considera apenas elementos filhos.
  </dd>
</dl>

<dl>
  <dt>nth-child-odd/guen</dt>
  <dd>
    Revesa a aplicação entre os elementos filhos, pelo número do index sendo ele par ou ímpar.
  </dd>
</dl>

<dl>
  <dt>::hover</dt>
  <dd>
    Define um estilo ao passar o mouse por cima.
  </dd>
</dl>

<dl>
  <dt>::focus</dt>
  <dd>
    Foca ao selecionar um input.
  </dd>
</dl>

**[⬆ voltar ao capitulo](#css)**

## Pseudo elementos
Inserindo elementos HTML pelo CSS, por padrão deve haver uma propriedade **content: ""** vazio desta maneira para que seja manipulado. Para inserir o elemento a syntax é semelhante aos pseudo classes e recebe ::before e ::after. Para inserir um elemento antes, ou depois.

<dl>
  <dt>::first-line</dt>
  <dd>
    Semelhante ao first-child, mas que seleciona apenas as primeiras linhas dos elementos de texto.
  </dd>
</dl>

**[⬆ voltar ao capitulo](#css)**

## Cores Web
Todas as cores na internet são definidas por variações de valores das cores azul, vermelha e verde. Ao atribuir um elemento alguma propriedade de cor, existem 3 tipos de valores, com mais um bônus.

<dl>
  <dt>RGB</dt>
    <dd>
      Sigla para as iniciais das cores web Red, Green, Blue. Sua sintaxe recebe 3 valores de 0 até 255, cada valor se refere a uma das três cores e resulta numa combinação entre elas. ex: rgb(0, 123, 255). Também á uma variação com o rgba, que recebe 4 valores sendo o último um valor de 0.1 até 0.9, que é referente a transparência da cor. O 'a' signifca alpha.
  </dd>
 </dl>
 
 <dl>
  <dt>HEX</dt>
  <dd>
    Tradução para cores Hexadecimais, o formato HEX nada mais é que um shorthand do rgb. A sintaxe é um valor em código com seis caracteres combinados entre letras e números seguintes de um '#', ex: #C1F4T7. Á quem prefira o formato rgb/rgba ao HEX, mas isso vai de gosto pessoal.
  </dd>
 </dl>
  
  
<dl>
  <dt>Nome</dt>
  <dd>
    A maneira mais simples é chamar a cor pelo nome em inglês, o CSS é capaz de reconhecer. Porém não é uma boa prática, pois dependendo do sitema ou navegador, pode causar algum erro. Porém existe uma maneira que nos possibilita nomear cores para usarmos no nosso código, são pelas variáveis.
    Quando precisamos passar uma cor em vários elementos diferentes do nosso CSS, para evitar a perda de tempo de sempre precisar pesquisar pelo seu valor rgb ou HEX, ao passar o valor para uma variável, nós agora podemos colocar nos elementos o nome da variável que criamos.
  </dd>
</dl>

**[⬆ voltar ao capitulo](#css)**

## Elementos na tela

Manipulação da apresentação dos elementos na tela

**Display: none** - O elemento é praticamente removido, como se não existisse mais

**Visibility**: hidden - O elemento fica oculto, mas sua posição na tela continua preservada

**Opacity: 0.5** - Com valores entre 0 e 1, você altera a transparência do elemento na

**Elementos** **vazados** - Quando o elemento ocupa um tamanho maior que o definido

**Overflow:** Atributo para manipular elementos que não couberam na tela, fazendo um autoajuste

**hidden** - mostra apenas o conteúdo que não vazou

**Scroll** - Define uma barra de Scroll lateral.

**Scroll x/y** - aplicar a batera apenas horizontal ou vertical

**Auto**: Aplica uma barra padrão, baseada nos parâmetros do elemento

**[⬆ voltar ao capitulo](#css)**

## Background

A propriedade de background define a aparência de fundo do elemento selecionado.

**background-image:** para definir uma imagem com **url('imagem.jpg')**, que também pode receber o **background-repeate:** com 'no-repeate' ou 'repeate', para fazer que a imagem seja posicionada repetidas vezes para cobrir a tela, ou para previvir esse comportamento.

<dl>
  <dt>background-color</dt>
  <dd>
  Recebe alguma propriedade de color, assim como algum gradient.
  </dd>
</dl>

Os tipos de gradient são:

<ul>
  <li>
    Linear Gradient - De um ponto ao outro (topo-baixo, direita-esquerda)
  </li>
  <li>
    Radial Gradients - a partir do centro
  </li>
  <li>
    Conic Gradients - circula um ponto central
  </li>
</ul>

O Linear gradiente como padrão é direcioado do topo para baixo, e recebe entre duas ou três cores.

ex:
```css

.class {
  background-image: linear-gradient(to right, red , yellow);
}
```

Ou valores para cada cor individualmente, como no uso do gradiente similar as cores do Instagram

```css

.class {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
}
```

É por esse motivo que geralmente são usados geradores de gradiente, para ter mais precisão e menos trabalho na hora de definir um, como o [CSS Gradiente Maker](https://cssgradient.io/).

<dl>
  <dt>background-image: url()</dt>
  <dd>
    Recebe uma imagem como background, caso a imagem não seja grande o suficiente ele se repetirá. Para previnir este comportamento é pasado o parâmetro <b>background-repeat: no-repeat</b>.
  </dd>
</dl>

<dl>
  <dt>background-attachment: fixed</dt>
  <dd>
    Fixa a posição da imagem de fundo em relação ao scroll da página.
  </dd>
</dl>

<dl>
  <dt>background-origin/clip</dt>
  <dd>
    Recebem box-sizing, content-box, padding-box</b>. O <b>origin</b> é o ponto de partida do conteúdo, é de comum prática atribuir o bpx-sizing para compactar o tamanho de todos os elementos, mas também pode definir a origem a partir do padding ou do conteúdo dentro - como podemos observar no exemplo da imagem de box-model - o <b>clip</b> é a partir de onde ele é apresentado, ou seja, ele pode até começar antes, mas se o clip estiver definido para uma camada acima o conteúdo é cortado. Exemplo, a origem é a partir do padding, mas só será apresentado na tela a partir do content.
  </dd>
</dl>

<dl>
  <dt>background-position</dt>
  <dd>
    Posicionamento especifíco para o background, recebe como parâmetro <b>top, left, bottom, right ou center</b>
  </dd>
</dl>

<dl>
  <dt>background-size</dt>
  <dd>
    Além de receber como parâmetro os valores: <b>px, %, em</b>. Támbem recebe <b>contain</b>: imagem cobre todo o seu tamanho original, <b>cover</b>: cobre todo o tamanho disponível.
  </dd>
</dl>

**[⬆ voltar ao capitulo](#css)**

## Position

A posição padrão dos elementos na tela é **inline**, ou seja, ocupa a linha intera sendo um elemento colocado em baixo do outro.

 <dl>
  <dt>Relative</dt>
  <dd>
    Essa posição é relativa a alguém, desde o elemento pai, ao algum dos valores top, right, left, botton. Independente de ao que o elemento fica relativo, o CSS mantém o espaço da sua posição inicial como ocupado.
  </dd>
 </dl>
 
 
 <dl>
  <dt>Absolute</dt>
  <dd>
    Remove o padrão inline, e faz com que o elemento tenha a aparência de estar flutuando sob os outros elementos.
  </dd>
 </dl>
 
 
 <dl>
  <dt>Fixed</dt>
  <dd>
    O elemento ficará fixado sempre aparecendo na tela, acompanhando o scroll da página
  </dd>
 </dl>
 
 *Também existe a propriedade z-index, para controlar a camada - altura - de cada elemento que está flutuando na tela, isso se chama **element stack** quando tenho mais de um elemento flutuante e é necessário definir uma ordem entre eles*

 **[⬆ voltar ao capitulo](#css)**

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

**[⬆ voltar ao capitulo](#css)**

## SVG
Essa é uma tag de criação de imagens vetorizadas, que são diferentes de imagens rasterizadas - jpg, png, etc - a diferença é que a imagem em estilo svg é melhor manipulada e responde muito bem ao uso de incones, além de receber estilos de tamanho e cores, propriedades que as outras imagens não recebem, porém tem um uso geral mais comum. Por ser um processo extenso é comum usarmos formas pré prontas, ou importar ícones já definidos para uso.
Como por exemplo a partir do [Font Awesome](https://fontawesome.com/icons), onde importamos os ícones e podemos personalizar seus estilos.

**[⬆ voltar ao capitulo](#css)**

## Posicionamentos responsivos

### Flexbox vs Grid
Temos duas prorpriedades avançadas de layout do CSS, dois métodos que oferecem melhor controle sobre a distribuição dos items na tela. Porém é importante lembrar que, não é possível usar grid e flexbox no mesmo elemento, na mesma aplicação é possível, mas sempre atribuídos a diferentes objetos. A declaração de ambos é semelehante, passando o valor de Flexbox ou Grid para um elemento pai, e assim manipulando os elementos dentro dele.

### Flexbox
Ao ser atribuído a um elemento pai, nos permite controlar a orientação de todos os elementos dentro dessa caixa. Com as propriedades flex-direction, justify-content, align-items, flex-row. Segue um arquivo em pdf exemplificando as posições de cada elemento dentro de uma caixa para diferentes propriedades. [Lista Flexbox](./docs/Flexbox.pdf)

[Lista de exemplos](#Link)

### Grid

## Transitions x Animations
As transitions são estados que refletem alguma ação, enquanto as animações tem comportamentos e execução pré difinidas. No entento, ambos recebem a propriedade de **Transition/ Animation Timing Function:** São comportamentos das transições e opções de animações pré definidas pelo sistema, que consistem em: Ease, Linear, Ease-in, Ease-out, Ease-in-out e Cube. Que vão variar entre animações que começam lentas e terminam rápidas, e outras variações, como Cube que é um shorthand para trabalhar em cima desses comportamentos.

## Transitions
Permite controlar o estado de um elemento, baseado em uma ação - pseudo element hover, por exemplo. É passado qual ação irá dar incio a transição, e atribuída ao seletor do elemento. Passando qual propriedade será aplicada a a transition e qual o novo valor, sendo que, quando mais de uma propriedade é passada, elas são declaradas juntas enquanto os seus valores separados.
Por fim é passado a duração e se necessário, o tempo de delay até a transition iniciar.
Ex:
```css
.containerDiv {
  transition-property: background-color, width;
  background-color: #FFF;
  width: 100px;
  transition-duration: 5s;
  transition-delay: 3s;
}
```

## Animations
As animações são criadas em uma tag '@keyframe' e recebem um nome, para ser atribuídas a um seletor de elemento é através da tag animation-name e animation-duration, para definir um tempo de execução para a animação. Também é possível definir a quantidade de execuções com a propriedade **Animation Interaction**, e direção de movimentação da animação com **Animation direction**

A animation tem duas maneiras de ser escrita, com propriedades sendo uma inicial e uma final, ou com porcentagem de execução.
Ex:

Propriedades keyframe
```css
.container {
  animation-name: main-animation;
  animation-duration: 5s;
  animation-delay: 2s;
  animation-direction: reverse;
  animation-iteration-count: infinite;
}

@keyframe main_animation {
  from {
    background-color: #FFF;
  }

  to {
    background-color: #000;
  }
}
```
Porcentagens keyframe
```css
.container {
  animation-name: main-animation;
  animation-duration: 5s;
  animation-delay: 2s;
  animation-direction: reverse;
  animation-iteration-count: infinite;
}

@keyframe main_animation {
  0% {
    background: black;
  }

  25% {
    background: brown;
  }

  50% {
    background: grey;
  }

  75% {
    background: green;
  }

  100% {
    background: red;
  }
}
```
Entendendo os comportamentos de inicio e fim de uma animação, podemos definir alterações no seu estado inicial e final. Com **Animation Fill Mode**, podemos usar propriedades para definir a aplicação de estilos temporários em fixos. Ex:
- Backwards: Pega os valores iniciais de uma animação - 'from' ou '0%' - e automaticamente aplica ao elemento, mesmo que aja delay.
- Foward: Mantém aplicado no elemento os estilos do final da animação - 'to' ou 100%.
- Both: Aplica tanto o Backwards quanto o Foward.

## Responsividade

## Bootstrap x T.

**[⬆ voltar ao topo](#index)**

# Javascript

**Index**

- [O Básico](#o-básico)
- [Fundamentos](#fundamentos)
- [Prototype](#prototype)
- [Statemants](#statements)
- [Expressions](#expressions)
- [Variavéis](#variavéis)
- [Escopos](#escopo-global-vs-especifico)
- [Funções](#functions)
- [Hoisting](#hoisting)
- [Sincrono e Assincrono](#síncrono-vs-assíncrono)
- [Callback x Promisse](#callback-vs-promise)
- [Arrays](#arrays)
- [Operadores](#operadores)
- [Condicionais](#condicionais)
- [Loops - Laços de Repetição](#loops)
- [Métodos](#métodos---js)
- [Seletores no Javascript](#seletores-js)
- [Manipulação de HTML](#manipulação-dos-elementos-html)
- [Eventos](#eventos---js)
- [Conersão de Dados](#conversão-de-dados)
- [ECMAScript](#ecmascript---2022)
- [Programação Funcional](#oriented-object-programming)


## O Básico
No desenvolvimento web o **HTML** é a estrutura da página, o **CSS** é a forma que as elementos são apresentados e o **Javascript** é uma maneira de criar funcionalidades para a nossa aplicação. Numa explicação mais simples, o HTML é o corpo, CSS a aparência e o Javascript será o cérebro, esta linguagem é capaz de manipular todo o nosso site.

Criada em 1995 por Breandan Eich, o Javascript está em mais de 90% das páginas web na internet. Por mais que o nome seja semelhante, não devemos confundir com Java. Essa é uma liguangem diferente, lá em sua criação a sacada de usar o nome foi uma questão de marketing para popularizar o JS mais rápido, então juntaram o nome Java com Script (de roteiro) para alto explicar a linguagem que antes era  chamada de LiveScript.

E para os curiosos, o nome Java é em homenagem a uma ilha da Indonésia que era responsável pelo exportação do café que um grupo de programadores consumia quando criaram essa linguagem. Tanto que o simbolo do Java é uma xícara de café. Nesse caso, a única semelhança entre as linguagens é realmente o nome que foi usado como inspiração.

Javascript é uma linguagem muito abrangente, além de vários frameworks - como o React.js por exemplo - é possível também desenvover backend e suas branchs de desenvolvimento chegam até mesmo ao Typescript. Mas para introduzir aqui, vamos falar do Javascript no DOM.

**[⬆ voltar ao capitulo](#javascript)**

## Fundamentos
Árvore de DOM - Document Object Model. Se baseia em todo o Javascript que roda no lado do cliente, é o documento que o navegador interpreta e no qual podemos manipular toda a estrutura do nosso site. O DOM é o que faz a ligação entre o Hyper Text com o JS.

Sabendo disso, então podemos concluir que tudo no HTML é elemento, tudo no CSS são caixas e tudo no Javascript é Objeto.

Como HTML e CSS o JS tem regras de uso que são muito importantes ficarmos atentos, visto que, por ser verdadeiramente uma linguagem de programação, como qualquer outra língua existem regras gramaticais para que possa ser entendida, isso na programação é chamado de Syntax - ou sintaxe. Assim como o CSS existe mais de uma maneira de fazer o link do seu arquivo index com o de javascript, mas é importante se atentar ao comportamento do sistema.

O CSS seja - interno ou externo - é sempre importado na parte de cima do index, pois assim o navegador ao fazer o carregamento dos elementos já terá carregado os seus estilos, evitando bugs visuais. Porém o comportamento do JS é diferente, ao encontrar um arquivo **script** no index o navegador vai automaticamente parar de carregar todo o resto até que termine de carregar o arquivo javascript, e isso com certeza vai travar o carregamento da aplicação. Então para previnir isso todo o script deve ser colocado logo acima da tag de fechamento do body, no final após todos os elementos HTML. Seguindo essa boa prática, no momento em que o navegador for carregar o aqrquivo JS, todo o resto já estará carregado, melhorando o desempenho do seu site.

O código javascript é linkado ao HTML pela tag script, de forma interna escrevendo todo o código entre a tag de abertuda e de fechamento - meio não recomendado, usado apenas para projetos simples e testes - ou passando a propriedade **src** com o caminho do seu arquivo.
Exemplo: ...

## Material de Apoio
[Intensivão Javascript](https://www.youtube.com/watch?v=i6Oi-YtXnAU)

## Prototype
O Javascript é uma linguagem baseada em protótipos, nesse caso, a maioria dos objetos herda uma cadeia de protótipos com usos prédinifidos pelo sistema. Isso pode ser observado acessando a partir do .__proto__ após qualquer objeto. Mostrando assim a cadeia de dados deste protótipo e várias de suas funções, como .length que mostra as posições (quantidade de items) desse objeto. 

## Statements
Os Statements são as instrunções de uso para passarmos comandos para o sistema.

<dl>
  <dt>Syntax</dt>
  <dd>Como já vimos, são as regras de escrita. Seriam as "vírgulas" e ascentos de um texto</dd>
</dl>

<dl>
  <dt>Palavras chave</dt>
  <dd>São palavras reservadas pelo sistema, então o uso delas não são recomendadas na maioria dos casos, pois quando escritas no interpretador ele pode não entender o comando que queremos passar. Alguns exemplos de palavras-chave: if, else, case, switch.</dd>
</dl>

<dl>
  <dt>Valores</dt>
  <dd>Para manipular a nossa aplicação será necessário muitas vezes receber, enviar e alterar dados dentro do nosso sistema, para isso existem maneiras de armazenar, manipular e trabalhar com esses valores.</dd>
</dl>

**[⬆ voltar ao capitulo](#javascript)**

## Tipos de Dados

<dl>
  <dt>String</dt>
  <dd>Dado do tipo de texto, sempre entre aspas sendo elas 'simples' ou "completas". Porém é indicado manter um padrão e não ficar alternando dentro de um mesmo sistema, outra dica é o uso da aspas completa, pois evita problemas caso se depare com um texto em inglês que contenha palavras como "can't"</dd>
</dl>

<dl>
  <dt>Template String</dt>
  <dd>String literal é simplismente um texto entre dois sinais de crase - sim, aquele acima do é - que abre mais possibilidades de uso que veremos mais a frente</dd>
</dl>

<dl>
  <dt>Number</dt>
  <dd>Referente a qualquer tipo de número: 1, 45, 200, 1238, etc...</dd>
</dl>

<dl>
  <dt>Float Number</dt>
  <dd>São números quebrados: 1.8, 2.5, 4.9, etc...</dd>
</dl>

<dl>
  <dt>Booolean</dt>
  <dd>Os boleanos são valores de um ou outro que fica dividido entre true e false. Um boleano tem valor oposto do outro</dd>
</dl>

### Sem Dados

<dl>
  <dt>Undefined</dt>
  <dd>Foi declarado, mas não foi definido - nenhum valor atribuído</dd>
</dl>

<dl>
  <dt>null</dt>
  <dd>Foi declarado, foi atribuído mas não há nada dentro dele.</dd>
</dl>

<dl>
  <dt>NaN</dt>
  <dd>Not a Number ou não é um número, ocorre quando tentamos pegar o valor de alguma operação entre um número e outro tipo de dado.</dd>
</dl>

**[⬆ voltar ao capitulo](#javascript)**

## Expressions
As expressões são toda as linhas de atribuição de valor, ou ação.

<dl>
  <dt>Variáveis</dt>
  <dd>
    Aonde armazenamos valores fixos ou não, para serem usados posteiormente no desenvolvimento do nosso algoritmo
  </dd>
</dl>


<dl>
  <dt>New</dt>
  <dd>
    Uma função construtora do próprio Javascript que serve para criar um novo objeto, ela recebe a função com o tipo de objeto que será criado [ex: string(), number(), date()] e os dados desse objeto, dentro dos parâmetros e entre aspas.
  </dd>
</dl>


<dl>
  <dt>Typeof</dt>
  <dd>
    Literalmente "Tipo de..." dá um feedback sobre qual o tipo de dado é aquele objeto.
  </dd>
</dl>

<dl>
  <dt>Delete</dt>
  <dd>
    Para deletar um dado especifíco, recebe a expressão que está armazenado e o objeto desejado. ex: Delete array.name, assim deletendo todos os valores de nome.
  </dd>
</dl>

**[⬆ voltar ao capitulo](#javascript)**


## Variavéis
São são recipientes de valores, sejam eles de números, texto, elementos, funções. Podemos guardar valores dentro de variáveis enquanto declaramos elas com os nomes que melhor acharmos adequado para facilitar a reutilização. Porém como toda linguagem, precisamos entender as regras e o seu comportamento. Ao declarar uma variável temos as seguintes opções:

<dl>
  <dt>var</dt>
  <dd>Essa maneira de declarar variáveis foi descontinuada, pois ela tem um scopo global e pode ser sobreescrevida, causando bugs com seu uso.</dd>
</dl>

<dl>
  <dt>let</dt>
  <dd>Permite a reatribuição de valor, porém seu escopo é especifico e isso previne os bugs</dd>
</dl>

<dl>
  <dt>const</dt>
  <dd>Variável constante, ou seja: o seu valor será sempre fixo. Tem o escopo especifico porém seu valor não pode ser reatribuído</dd>
</dl>

**[⬆ voltar ao capitulo](#javascript)**

### Escopo Global vs Especifico
O funcionamento de uma variável vai ser muito definida pelo escopo em qual foi declarada, o escopo global é no corpo comum do script, onde pode ser usada em qualquer outra parte do código. Escopo especifico ocorre quando declaramos uma variavel dentro de uma function e ela só irá existir ali dentro.

**[⬆ voltar ao capitulo](#javascript)**

## Functions
As funções guardam comandos que só são executados quando chamados, sua syntax báscica consiste em **()** para indicar que aquilo é uma função, e agrupar tudo que será amarzenado dentro dela com **{}**, também existem diferentes maneiras de declarar uma função:

<dl>
  <dt>Anonymous function</dt>
  <dd>Uma função que não é nomeada - ou função anônima</dd>
</dl>

<dl>
  <dt>Expression function</dt>
  <dd>Uma função com um nome atribuído a ela</dd>
</dl>

<dl>
  <dt>Arrow Function</dt>
  <dd>Uma função passada dentro de uma constante e seu valor final é retornado para aquela variável. A Arrow Function é chamada assim pela a sua aparência, sendo declarada com os o sinal de '=>' além dos sinais de parênteses para indicar ao sistema que é uma função</dd>
</dl>

Exemplo:

<img src="./assets/exfunctions.png" alt="Exemplo de imagem" width="650px" height="600">


### Return
Seu comportamento básico é parar a execução de uma função, veremos esse uso melhor com condicionais. Ou usar o **return** com um valor, esse valor será retornado para quem chamou a função. 

### Paramêtros e Argumentos
A Syntax das funções consiste em, usar '()' na declaração e na chamada da função. Para atrabalhar dados no escopo interno da função, sem depender de variáveis, é feito o uso dos argumentos e paramêtros. Os parâmetros são os nomes que passamos na declaração da função, os argumentos são os valores que serão atribuídos aos parâmetros

Ex:

<img src="./assets/argumentPar.png" alt="Exemplo de imagem" width="650px" height="600">

### Hoisting
Como já sabemos, o javascript lê tudo de cima para baixo, então as funções sempre serão chamas na sequência em que foram escritas. Sendo assim, o hoisting serve para subir uma função - na tradução literal seria erguer - para alguma linha acima de onde ela foi declarada, isso faz com que o interpretador deixe de executar o quem em seguida, e vai primeiro atrás da função que você mandou chamar primeiro, depois disso que ele seguirá lendo e executando o resto do seu código. Porém devemos ficar atentos ao fato de que o hoisting não funciona com variáveis, elas precisam ser declaradas antes de serem chamadas, então devem estar em sequência no código, dessa forma o hoisting com Arrow Functions fica inviável.

**[⬆ voltar ao capitulo](#javascript)**

## Síncrono vs Assíncrono
A execução do javascript é de maneira **síncrona**, que no caso é o comportamento padrão do interpretador, o código irá executar aquilo que lhe for apresentado na ordem do script. Nesse comportamento o sistema só vai carregar a próxima função depois que a atual estiver concluída.

Ou seja, o comportamento padrão é de executar na ordem em que foi escrito, mas isso pode ser manipulado ao escrever um código em que algumas partes serão assíncronas. Assim, podemos definir quais funções do nosso código terão um tempo de execução diferente do padrão. 

**[⬆ voltar ao capitulo](#javascript)**

## Callback vs Promise
**Callback**

É quando uma função fica de chamar outra assim que for terminada sua execução, usada para quando uma função específica depende de outra para ser executada. Exemplo, um sistema que precisa receber um valor e depois exibir ele. Não é possível exibir um valor antes dele ser atribuído, então a primeira função vai ficar responsável por receber uma ação de dado e depois chamar a função que irá exibir os dados.

**Promise**

As Promises são um método mais moderno que o de Callback, aqui a intenção de uso é praticamente a mesma, mas com comportamento diferente. Aqui a ideia também é chamar uma função depois que outra for executada, porém a próxima função será chamada referente a uma condição estabelecida, já que a promise deve ser retornada para alguém (variável ou função) e recebe dois parâmetros(resolve, reject) um em caso de condição concluída, outro em caso de condição não concluída.

Elas tem 4 estágios: 
**Pending** - Quando a promise é declarada;

**Fullfilled** - A promessa foi cumprida

**Rejected** - Houve algum problema na execução da promessa

**Settled** - A cadeia de funções foi concluída, sendo a promessa bem sucedida ou não.

## Exemplos
Síncrono

```javascript
function defaultFunction() {
  console.log('Ok, comportamento padrão')
}

defaultFunction()
```
Assíncrono com setTimeout() - Esse método chama a função e recebe um valor em ms para defniir o tempo de espera até ser executado

```javascript
function assyncronousFunction() {
  console.log('Ok, Assíncrono resolvido')
}

setTimeout(assyncronousFunction, 5000)
```
Callback - É preciso passar a indicação da callback por paramêtro e o tempo de espera também é definido pelo setTimeout()
```javascript
function main() {
  wait(print)
}

function wait(callback) {
  if (callback) {
  setTimeout(callback, 5000)
  }
}

function print() {
console.log('Ok, callback resolvida')
}
main()
```

Promise - Basicamente é uma maneira mais moderna de fazer callbacks, encadeando sequências de funções que só são executadas após a anterior ser concluída.

```javascript

function startPromise() {
  return main()
  .then(succes)
  .catch(error)
}
              
function main() {
  return new Promise((resolve, reject) => {
    const valid = true
      if (valid == true) {
        setTimeout(resolve, 10000)
      }
  
      if (valid == false) {
        reject()
      }
  })
}

function error() {
  console.log('Promise falhou com sucesso')
}

function succes() {
  console.log('Ok, Promise resolvida')
}

startPromise()
```

Geralmente o uso desse assincronismo será feito em consumos de APIs, onde veremos também o uso de Async e Await

**[⬆ voltar ao capitulo](#javascript)**

## Arrays

Os Arrays são estruturas que recebem diversos tipos de dado, desde strings, números, boleanos. E cada dado há uma recebe uma posição de index, respeitando a ordem em que são inseridos, partindo do número zero.
O sinal de ‘**[ ]**’ é sinônimo de array, sendo usado para serem colocados os dados e ao ser acessado pelo index também são usados estes sinais.

```javascript
const Array = ['String', 10, 'Not a number', true]

console.log(Array[2])
```

Objetos são parecidos, mas com ele somos capazes de armazenar diferentes tipos de dados
Ex:
```javascript
const person = {
  name: "Amanda",
  age: 18,
  city: "Londrina",
}
```

## Estrutura de dados

### Matriz
É uma estrutura onde são colocados arrays dentro de um outro array. Onde os dados são acessados a partir do index dentro do index.
```javascript

const students = [['José', 23, 'MG'], ['Breno', 19, 'SP'], ['Amanda', 20, 'RJ']]

console.log(students[1][0])
```

### Stack
São uma pilha de dados, como se estivessem sendo colocados algo em cima do outro. Nesse estrutura há o conceito de Last in, first out, onde aquilo que é colocado por último é o primeiro a sair, da mesma forma que ocorreria numa pilha de livros. 
Métodos relacionados:
- push(): adicionar elemento
- pop(): remover elemento 
- peek(): pegar o elemento no topo


### Queue
Uma fila de dados, onde o conceito é first in, first out. Quando o primeiro a chegar é o primeiro a sair, assim como filas de atendimento.
Métodos relacionados:
- enqueue(): adicionar ao final da fila
- dequeue(): remover o primeiro da fila


**[⬆ voltar ao capitulo](#javascript)**

## Operadores
Os operadores servem para fazer alterações nos valores que estamos usando, e são essenciais para desenvolver os nosso algoritmos.

_É necessário abrir as imagens para visualizar melhor_

### Operadores Aritméticos
<img src="./assets/arithmetic.png" alt="Exemplo de imagem" min-width="650px" height="600">

### Operadores de Comparação
<img src="./assets/compare.png" alt="Exemplo de imagem" width="650px" height="600">

### Operadores de Atribuição
<img src="./assets/assignment.png" alt="Exemplo de imagem" width="650px" height="600">

### Operadores Lógicos
<img src="./assets/logic.png" alt="Exemplo de imagem" width="650px" height="600">

**[⬆ voltar ao capitulo](#javascript)**

## Condicionais
São quase como uma função fragmentada, que ao invés de realizar uma ação especifíca, ela irá executar uma determinada linha de comando baseada nas condições que nós definirmos.

As condições básicas são 'if' e 'else'

```javascript
function test() {
  if (condição = true) {
    console.log('Se a condição estiver correta, essa linha de comando será executada')
  } else {
    console.log('caso qualquer situação contrária, essa linha de código será executada')
  }
}
```
  
  Para criarmos mais de duas condições, podemos fazer o uso de 'else if' que cria condições intermediárias entre if/else

```javascript
function test() {
  if (condição = true) {
    console.log('Se a condição estiver correta, essa linha de comando será executada')
  } else  if (condição === null) {
    console.log('caso a condição inicial não seja a válida, existe essa segunda opção')
  } else {
    console.log('caso qualquer situação contrária, essa linha de código será executada')
  }
}
```

Também podemos fazer o uso de _switch_ _case_, nesse formato a condicional observa um valor que em algum momento será alterado, e no block de código escrevemos o que será feito em caso desse valor ser alterado para outro especifico. A syntax dessa condicional consiste na funlão switch, o parâmetro do valor que será observado, o case que define qual os possíveis valores, o que irá ser feito, e o break para parar a leitura dessa linha.

```javascript

let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}

```

**[⬆ voltar ao capitulo](#javascript)**

## Loops
Os loops são laços de repetição, ou seja, uma condição que irá repetir uma função enquanto um valor de rodadas - vezes que a função será executada - for determinado. Os tipos de loops definem esse valor.

<dl>
  <dt>For()</dt>
  <dd>O For recebe três parâmetros, uma váriavel com o valor inicial da contagem, uma condição com a quantidade da contagem e o operador do contagem.</dd>
</dl>

```javascript
for(let contador = 0; contador <= 100; contador++) {
  console.log(contador)
}

```
Neste exemplo, enquanto a contagem não chegar a 100 a função será repetida somando +1 a cada rodada até o número desejado. O for() ainda
trás dois controles, o _break_ e o _continue_. O _break_ permite definir um valor que irá parar o resto da execução, ou o _continue_, que ao definir uma condição ele pula essa rodada do loop.

Ex:
```javascript
for(let contador = 0; contador <= 100; contador++) {
  if (contador === 10) {
    continue;
  }

  console.log(contador)
}
```
Com isso a contagem irá pular do '9' para o '11'.

<dl>
  <dt>For of</dt>
  <dd>Fará uma rodada para cada posição do item selecionado, exemplo: se for string será uma rodada para cada letra escrita, se for array, será uma rodada para cada objeto lá dentro.</dd>
</dl>

```javascript
let rodadas = "cinco"

for(let rodada of rodadas) {
  console.log(rodada)
}
```
O console retornará cinco rodadas, imprimindo uma letra individualmente para a string escrita

Ou

```javascript
let names = ["Alex", "Breno", "Carol", "Dani"]

for(let name of names) {
  console.log(name)
}
```
Aqui serão quatro rodadas, uma para cada posição do array imprimindo um nome por loop.

<dl>
  <dt>For in</dt>
  <dd>Basicamente faz o mesmo que o for of, porém faz uma rodada para objeto do array</dd>
</dl>

<dl>
  <dt>Do...While / While</dt>
  <dd>A tradução literal já explica, fazer...enquanto a condição definida for real. Fazem a mesma função, com comportamentos diferentes. O Do...while inicia um loop e então confere as condições da repetição. Enquanto o While confere primeiro a condição e depois dá inicio ao loop - comportamento muito mais parecido com os laços anteriores</dd>
</dl>

Do...while:
```javascript
let contador = 1;

do {
	console.log(contador);
	
	count++;
} while ( contador <= 10 )
```

While
```javascript
let contador = 1

while ( count <= 10 ) {
  console.log(contador)
	contador++
} 
```

**[⬆ voltar ao capitulo](#javascript)**

## Métodos - JS
Os métodos são maneiras de alteração e manipulação de dados de objetos ou arrays.

<dl>
  <dt>Reduce()</dt>
  <dd>
    Se baseia em pegar uma quantidade de valores, e reduzir em um único valor. Com reduzir, no caso a quantidade de retorno de valores, não necessáriamente reduzir os valores individualmentes
  </dd>
</dl>

```javascript
  const student = {
    name: 'Maria',
    last: 'Silva',
    scores: [7, 10, 8, 5, 7, 9],
  }

  const name = student.name
  const media = student.scores
  const sem = student.scores.length

  const finalScore = media.reduce((acc, cur) => {
    const grade = acc + cur / sem
    return grade
  }, 0)

  const finalGrade = Math.ceil(finalScore)

  let print = `A média de ${name} foi de ${finalGrade}, em um total de ${sem} semestres.`

  console.log(print)
```

Ex:

<dl>
  <dt>Map()</dt>
  <dd>
    O map é uma maneira de  gerar novos dados de objetos de um Array, sem alterar a coleção original. Basicamente ele pega diferentes dados dos objetos e retorna um novo Array com esses dados modificados.
  </dd>
</dl>

```javascript

const students = [
            { name: 'Maria', last: 'Silva', score: 7, },
            { name: 'Luiz', last: 'Cardozo', score: 4, },
            { name: 'Camila', last: 'Matos', score: 9, },
            { name: 'Luiza', last: 'Picon', score: 6, },
]

  const allStudents = students.map((student) => {
   return `${students.name} ${students.last}`
  })

console.log(allStudents)
```


<dl>
  <dt>Filter()</dt>
  <dd>
    O filter serve para filtrar parâmetros de um Array, e criar outro. No caso, pegar um array existente e baseado em algum dado do object, criar um novo array com os valores relativos a condição do filter.
    Importante lembrar que a syntax do filter se baseia em retornar o valor mediante a true, os objetos que se encaixarem nesse parâmetro são adicionados ao novo Array.
  </dd>
</dl>

```javascript

const students = [
            { name: 'Maria', last: 'Silva', score: 7 },
            { name: 'Luiz', last: 'Cardozo', score: 4 },
            { name: 'Camila', last: 'Matos', score: 9 },
            { name: 'Luiza', last: 'Picon', score: 6 },
]

  const media = 6

  const scoreReach = students.filter((scoreNeed) => {
    let grade = false
    if (scoreNeed.score >= media) {
      grade = true
    }
    return grade
  })

  console.log(scoreReach)
```
<dl>
  <dt>.length</dt>
  <dd>
    Indica o tamanho do objeto, ou quantas posições há no array.
  </dd>
</dl>

<dl>
  <dt>toLowerCase()/toUpperCase</dt>
  <dd>
    Transformar todas as letras em minúsculo ou maiúsculo, respectivamente
  </dd>
</dl>

<dl>
  <dt>objeto.split</dt>
  <dd>
    Define um caractere em que o texto será separado a partir dele - isso se aplica também a espaços vazios " ".
  </dd>
</dl>

<dl>
  <dt>join()</dt>
  <dd>
    Faz o contrário do split, recebe um caractere que será inserido entre as posições do array ao unir todas os valores.
  </dd>
</dl>

<dl>
  <dt>includes()</dt>
  <dd>
    Filtrar uma string buscando por uma palavra específica.
  </dd>
</dl>

<dl>
  <dt>Push()</dt>
  <dd>
    Adiciona um elemento no final do array
  </dd>
</dl>

<dl>
  <dt>Unshift()</dt>
  <dd>
    Adiciona um elemento no inicio do array
  </dd>
</dl>

<dl>
  <dt>Pop()</dt>
  <dd>
    Remove o último elemento.
  </dd>
</dl>

<dl>
  <dt>Shift()</dt>
  <dd>
    Remove o primeiro elemento.
  </dd>
</dl>

<dl>
  <dt>Indexof()</dt>
  <dd>
    Encontrar a posição no index do array.
  </dd>
</dl>

<dl>
  <dt>Math()</dt>
  <dd>
  O Math pode ser usado para operar qualquer valor, detalhe para que nesse método é iniciado com “M” maiúsculo
  <ul>
    <li>Math.round - Retorna o valor mais próximo do número inteiro.</li>
    <li>Math.ceil - Retorna o valor do número inteiro mais alto.</li>
    <li>Math.floor - Retorna o valor do número inteiro menor.</li>
    <li>Math.trunc - Retorna o número referente ao primeiro dígito do valor. Ex: Math.trunc(7.1, 7.9) = (7, 7)</li>
  </ul>
  </dd>
</dl>

**[⬆ voltar ao capitulo](#javascript)**

## Seletores JS
Assim como no CSS, precisamos dar um identificador par os elementos HTML para que sejam manipulados, no Javascript não é diferente. É possível fazer pelos seletores:

<dl>
  <dt>getElementByTag('tagName')</dt>
  <dd>
    Selecionar pela tag, porém é um seletor que se o uso não for muito específico, irá trazer bugs de manipulação dependendo da tag selecionada
  </dd>
</dl>

<dl>
  <dt>getElementByClass('className')</dt>
  <dd>
    Seleciona pela classe, assim como é feito no CSS
  </dd>
</dl>

<dl>
  <dt>getElementById('idName')</dt>
  <dd>
    Selecionando o elemento pelo seu identificador
  </dd>
</dl>

<dl>
  <dt>querySelector('#id') ou ('.class')</dt>
  <dd>
    Permite esolher entre classe ou Id, mas é preciso indicar para o sistema pelos sinais de '#' ou '.' - Também existe o querySelectorAll()...
  </dd>
</dl>

**[⬆ voltar ao capitulo](#javascript)**

## Manipulação dos elementos HTML

Ao selecionar elementos que já existem no HTML, nós podemos navegar por eles para alterar, criar e inserir novos elementos a partir do JS.

<dl>
  <dt>texto HTML</dt>
  <dd>
    Algumas das maneiras de alterar um texto no html, é ao selecionar a tag onde o texto está escrito, pelo JS criar uma váriavel com um texto em string e inserir ele no javascript através de algum dos métodos como: <b>.innerText</b>, .innerHTML, .textContent. No geral esses três métodos funcionam com comportamentos semelhentes, no caso do innerHTML é possível inserir outras tags e usar dados de outras váriaveis com a string literal, então se a necessidade for especificamente apenas alterar um texto, então o uso do innerText seja melhor recomendada. 
  </dd>
</dl>

<dl>
  <dt>Criando um novo elemento</dt>
  <dd>
    PAra criar um novo elemento a partir do JS usados o createElement('elemento'), passando como parâmetro o tipo de elemento que vamos criar - div, p, h1, etc - e atribuindo a uma variável, temos total liberdade de manipulação para podermos inserir este novo elemento antes ou depois de outro.
  </dd>
</dl>

Ex:

_Neste exemplo o elemento é uma div central que há apenas uma imagem dentro, na sequência eu criei um título e uma descrição para a imagem e inseri pelo próprio JS_

```javascript
  const mainElement = document.getElementById('mainDiv')

  const headline = document.createElement('h1')
  headline.innerText = "Esse é um título"
  mainElement.prepend(headline)

  const description = document.createElement('p')
  description.innerText = "Esse é um texto"
  mainElement.append(description)

```

<dl>
  <dt>Pegando elementos pai</dt>
  <dd>
    seletor.parentElement / ou seletor parentNode - assim é possível inserir algo antes ou depois desse elemento especifíco.
  </dd>
</dl>

<dl>
  <dt>Pegando elementos filhos ou irmãos</dt>
  <dd>
    seletor. firstChild ou firstElementChild e firstSibling ou firstElementSubling - Esses seletores são para os elementos filhos e irmãos, respectivamente. A diferença entre eles é que, ao pegar o primeiro elemento filho e houver um espaço entre ele e o elemento pai, nada será selecinado, o firstElement previne isso e busca o próximo elemento html, idependente de espaços ou indentação.
  </dd>
</dl>

**[⬆ voltar ao capitulo](#javascript)**

## Eventos - JS

Eventos são como uma função especifica pré definidas, isso faz com que a sintax também tenha suas particularidades.

**objeto.onevent**

Syntax baseada no objeto selecionado e o tipo de evento, para ai sim atribuir a uma função.

**addEventListener('evento', function())**

Adicionar um evento de escuta, sempre que esse evento for chamado ele executa uma função. Mas é importante primeiro indicar qual o tipo do evento, neste caso sem o uso do 'on'.

<dl>
  <dt>on change</dt>
  <dd>
    Evento especifico para observar a mudança de um input - tipo radio por exemplo.
  </dd>
</dl>

<dl>
  <dt>on click</dt>
  <dd>
    Executa um evento ao elemento ser clicado.
  </dd>
</dl>

<dl>
  <dt>on submit</dt>
  <dd>
    Evento especifico para botão de enviar dentro da tag de formulário.
  </dd>
</dl>

<dl>
  <dt>on mouse hover</dt>
  <dd>
    Evento executado no momento em que o mouse está em cima do elemento. Função inversa é o on mouse out.
  </dd>
</dl>

<dl>
  <dt>on mouse move</dt>
  <dd>
    Evento executado enquanto o mause está se movendo em cima do elemento.
  </dd>
</dl>

<dl>
  <dt>on load</dt>
  <dd>
    Executado assim que a página terminar de carregar por completo. 
  </dd>
</dl>

<dl>
  <dt>on key (pres, down, up...)</dt>
  <dd>
    Evento especifico para cada tecla apertada.
  </dd>
</dl>

**[⬆ voltar ao capitulo](#javascript)**

## Conversão de Dados
Aqui é de nosso conhecimento que no javascript a operação '4' + 4 = 44, porém é possível alterar esses valores com os métodos:

String(4 + 4) e com isso retornando em string.

Number(4 + '4') Retornando em formato de números.

[JSON.stringfy e JSON.parse](#api)

O JSON é uma forma de comunicação de dados entre sistemas, no consumo de API por exemplo, mas o Javascript em si não traduz o JSON. Nesse caso, o método stringfy() pega os objetos, transforma em json e retorna para algo, uma variável por exemplo. Já o  parse(); Recebe um objeto json e retorna para alguém, no caso uma variavel em formato de objeto javascript, para que possa ser lido e usado no nosso sistema.

**[⬆ voltar ao capitulo](#javascript)**

## ECMAScript - 2022

O ECMAS é o regulador do Javascript, onde é definido quais atualizações serão adicionadas ao Javascript, como exemplo temos as variáveis, foi no ECMAS 2015 que adicionaram as declarações com let e const. São por conta destas atualizações que devemos ficar atentos a features que não funcionam em navegadores antigos.

Neste ano de 20220 não foram gandes as adições, aqui comentrei algumas mais importantes e daquelas que envolvem um conteúdo que ainda não abordei aqui, como programação orientada a objetos.

<dl>
  <dt>.at()</dt>
  <dd>
    Novo método de array, que acessa valores através do index deles. Podendo receber valores negativos.
  </dd>
</dl>

ex:
```javascript

const array = ['index0', 'index1', 'index2', 'index3', 'index4']

console.log(array.at(-2))
```

Output: index3;

<dl>
  <dt>error.case</dt>
  <dd>
    Ajuda na investigação do erro causado dos valores passados como argumento.
  </dd>
</dl>

```javascript

const transformData = (unprocessData) => {
  return unprocessData.map(data => {
    try {
      actFunction(data)
    } catch (err) {
      throw new Error(
        'Something went wrong',
        {cause: err},
      )
    }
  })
}
```
**[⬆ Voltar ao capítulo](#javascript)**


**[⬆ voltar ao topo](#index)**

# Node

**Index**

- [Introdução](#introdução-ao-node)
- [Comportamento](#comportamento)
- [NPM](#npm)
- [Instalação de PAcotes](#instalação-de-pacotes)
- [Módulos](#modules)
- [Process](#process)
- [Métodos - Node](#métodos---node)
- [Timers](#timers)
- [Events](#events)

## Introdução ao node

Criado em 2009 por Ryan Dahl, o uso do Node cresceu muito, tanto que em 2015 foi criado o Node Fundation, para discutir e analisar melhorias no sistema que é open source. Mas o que é o Node.js? É um interpretador de Javascritp, que faz isso a partir do backend - diferente do javascript que é interpretado pelo browser, aqui o código roda do lado do servidor interpretado pelo V8 do Google e tem algumas particularidades, uma delas por exemplo é que não temos o DOM - Seu uso é variado, mas uma de suas maiores vantagens é não precisar dividir o seu projeto em diferentes linguagens para o front e para o back, tudo é desenvolvido baseado em Javascript.
Bascicamente é um ambiente de execução em tempo real - JS Runtime Enviroment.

## Comportamento
No JS convencional a execução é sincrona e feita na sequencia que foi escrita, já no Node por padrão é de forma assincrona no blocking -não bloqueante -  a partir dos eventos em loop. De inicio o Nodejs registra todas as funções declaradas e põe em uma fila de execução, sempre que uma função precisa de tempo para ser processada ela vai parar na fila de processos e deixa que a fila de execução continue normalmente, até que ela seja executada por último. E responsável por tirar dessa fila e fazer com que seja executado é o Event Loop, ele está o tempo "de olho" para não deixar nada na fila, sempre trazendo uma função de cada vez para a execução.

Sendo assim, mesmo que uma função receba um timeout de zero segundos, ao identificar que há um timeout definido, o event loop coloca a função na fila dos processos o que faz ir para o final da fila de execução. Então ela só será executada após todas as outras da sequência, mesmo que o timeout já tenha sido concluído.

**[⬆ voltar ao capitulo](#node)**


## NPM

O Node Packged Meneger é um gerenciador de pacotes do Node, ele já vem com diversas funções nativas, porém existem outras das quais podemos adicionar individualmente em cada projeto e fazer uso delas - essas funções extras são chamadas de modules, packages ou dependencies e são como se fossem uma extensão do Nodejs.

**Comandos**

<dl>
  <dt>node -v</dt>
  <dd>
    Consultar a versão instalada do node.
  </dd>
</dl>

<dl>
  <dt>npm init -y</dt>
  <dd>
    O npm init faz a instalação do packed.json, as configurações do node em formato JSON. Além de algumas especificações e controle do arquivo, sendo o -y o atalho para fazer a instalação com as configurações rápidas do arquivo.
  </dd>
</dl>

<dl>
  <dt>npm uninstall</dt>
  <dd>
    Faz a desintalação de um pacote
  </dd>
</dl>

<dl>
  <dt>npm -D</dt>
  <dd>
    Faz a instalação no ambiente dev...
  </dd>
</dl>

<dl>
  <dt>scripts</dt>
  <dd>
    Os scripts do packed.json são atalhos que definimos para execuções rápidas.
  </dd>
</dl>

**[⬆ voltar ao capitulo](#node)**

## Instalação de pacotes

Ao fazer o **npm init** o node instala o arquivos de packed.json, packed.lock.json e o node_modules.

Tanto o packed.lock.json quanto o node_modules são arquivos fixos para o funcionamento do node, exemplo: para usarmos os módulos raiz do nodejs é preciso dos arquivos no node_modules. Sendo assim não é feita nenhuma alteração nesses dois arquivos.

Já o packed.json em uma estrutura que podemos consultar e manipular, ele consiste em trazer as informações do nosso projeto. Desde versão, nome, autor, arquivo principal para ser executado pela linha de comando. Como também os scripts, que são atalhos do nosso projeto para rodar no terminal, como comandos de run, test, stop e etc.

Outro objeto da estrutura do packed.json são as **dependencies**, nesse objeto podemos ver todos os pacotes intalados e suas versões. Assim como há também os **devdependencies**, no qual mostra os pacotes instaladas somente para acesso e manipulação dos desenvolvedores, e que para fazer a instalação nas diferentes dependencies são usados comandos diferentes. *npm install 'pacote'* para instalações normais e *npm install 'pacote' --save-dev* para instalar um pacote dentro do dev dependencies.

**[⬆ voltar ao capitulo](#node)**

## Modules
Os módulos são funções globais do node, ao fazer o npm init nós temos acesso a uma biblioteca de funções que são nativas do nodejs, e para fazer seu uso podemos atribuir uma váriavel e fazer a importação a partir do **require()**.

ex:
```jsx

const fileSystem = require('fs')

fileSystem('./packed.json', funciton(error, content) {
  if (error) {
    console.log('error 404', error)
  } else {
    console.log(JSON.parse(content))
  }
})

```

Temos um arquivo principal com código javascript  
Deverá ter outro arquivo .js que o nosso módulo será declarado  
Os módulos são como variáveis, podemos armazenar o que for dentro deles - string, numeros, array e objetos
Porém para “declarar essa variável” usamos o module.exports = ‘conteúdo do módulo’  
Sendo assim, como não á uma atribuição de nome para o módulo - como é feito com variáveis - na hora de chamar este valor será usadoo título do arquivo js em que ele foi declarado
No arquivo principal é feito o require(’./caminho/para/o/arquivo.js’) e o retornamos para uma variável.

Sendo posspivel também fazer a importação de mais de uma função com o destructuring

ex:

Arquivo de funções
```javascript

function soma(n1, n2) {
  return n1 + n2
}

function multi(n1, n2) {
  return n1 * n2
}

module.exports = {
  soma,
  multi
}
```

Importação no arquivo principal:
```javascript

const { soma, multi } = require('./functions.js')

const somando = soma(10, 20)
const multiplicando = multi(10, 20)

console.log(somando)
console.log(multiplicando)
```
**[⬆ voltar ao capitulo](#node)**

## Process

O process é uma variável global do node - lembra um pouco o prototype do Javascript - ele consiste em um objeto que trás todas as informações sobre a execução do arquivo, de vizualização e de controle. O argv por exemplo retorna em formato de array, tudo aquilo que está sendo rodado no projeto.

**stdout & stdin**
.process.stdout.write(”Output /n”), Standard Output - ou saída padrão - output de texto, do qual é a raiz do ‘console.log’. O comando console já trás manipulações do process.stdout pré definidas, exemplo o comando ‘/n’ que significa new line, ou seja, ao terminar de escrever o texto ele pula para a próxima linha, o que é o comportamento padrão do console.log.
Já o .process.stdin() é o Standard Input - entrada padrão - input para inserção de dados.

**exit()**
Para indicar a finalização de um process, existe a função process.exit(). Da qual termina a execução de algum processo em andamento - de receber inputs por exemplo

**[⬆ voltar ao capitulo](#node)**

## Métodos - Node

<dl>
  <dt>on()</dt>
  <dd>
    Evento de escuta, recebe dois parâmetros, primeiro o tipo de evento que vai escutar e em seguida a callback que irá executar - bastante semelhante ao addEventListener() no javascript, onde o evento também é colocado entre aspas - ex: escutando evento de exit
    process.on('exit', function stop())
  </dd>
</dl>

<dl>
  <dt>once()</dt>
  <dd>
    Faz praticamente a mesma função que o on, porém ele escuta e executa uma ação apenas uma vez - assim como seu nome indica - ex: se no último caso usei o exit, então a função declarada será executada apenas na primeira vez que exit for usado, se isso por acaso se repita o evento once() não será executado novamente.
  </dd>
</dl>

**[⬆ voltar ao capitulo](#node)**

## Timers
Funções semelhantes a vistas antes no javascript, onde são usadas em códigos assincronos e uso de callbacks.

### setTimeout
Essa função recebe dois argumentos, primeiro o que será executado e o tempo que irá levar até que seja feita a execução. ex: setTimeout(callback, 3000), aqui está fazendo a callback de uma função e o tempo de espera é de 3 segundos, já que o valor passado no timer está em milissegundos.

Assim como no lugar dos valores de tempo podemos passar uma variável com esse número atribuído, também podemos escrever toda a função dentro da própria declaração do timer. ex: setTimeout(function() { console.log(’HelloWorld’)}, Timer), mas não é uma boa prática declarar tudo dentro do timer.

```javascript
const timer = 3000
const finished = () => console.log("All Done!")

setTimeout(finished, timer)
```

## clearTimeout
Essa função simplesmente cancela o timer, no caso do exemplo do setTimeout, foi declarado para ser executado em 3 segundos. Porém se for definido um clear para esta função logo após ele, o sistema automaticamente cancela a execução dele.

```jsx
const timer = 3000
const finished = () => console.log("All Done!")

cont timeOut = setTimeout(finished, timer)
clearTimeout(timeOut)
```

## setInterval

 A syntax dessa função é semelhante ao setTimeout, recebe a função que será executada e o tempo dela, mas a diferença está no comportamento. O timer definido será referente ao espaço de tempo que a função será executada, ou seja, se definirmos um tempo de 3 segundos o sistema entenderá que a cada vez que passar esse tempo ele precisa chamar a função novamente.

```jsx
const timer = 5000
const callback = () => console.log('Interval OK')

setInterval(callback, timer)
```

## clearInterval

 Para parar a execução de um interval do qual não definimos no código seu encerramento, usamos o crtl+c do terminal. Para definir o cancelamento do intervalo o método é o mesmo do clearTimeout

```jsx
const timer = 5000
const callback = () => console.log('Interval OK')

const interval = setInterval(callback, timer)
clearInterval(interval)
```

### Exemplo

Definindo um intervalo de execução de 1 segundo que após 5 segundos é cancelado.

```jsx
const timer = 1000
const check = () => console.log('Check')

const interval = setInterval(check, timer)

setTimeout( () => clearInterval(interval), 5000)
```

**[⬆ voltar ao capitulo](#node)**

## Events
Events Modules são como as notificações que recebemos de aplicativos por exemplo, a configuração padrão é para ouvir um evento que quando é acionado dispara uma ação. Vimos casos semelhantes no método on() por exemplo.

O ‘events’ já é um module padrão do Node, para criarmos a estrutura inicial de emissão de eventos é feito a importação de destructuring do EventEmitter.

```jsx
const { EventEmitter } = require('events')

const e = new EventEmitter()

e.on('helloWorld', () => {
    console.log('Evento emitido, escutado e executado')
})

e.emit('helloWorld')
```

Primeiro a importação desestruturada do require de events trazendo o Emitter e então criando um novo evento, atribuído a uma função. A nova função está sendo escutada pelo on() que ao perceber que o primeiro paramêtro passado foi emitido, ele executa uma função.

Output esperado:

Evento emitido, escutado e executado

**[⬆ voltar ao capitulo](#node)**

### Event Emitter com parâmetros

```jsx
const { EventEmitter } = require('events')

const e = new EventEmitter()

e.on('helloWorld', (text) => {
    console.log('Evento emitido, escutado e executado', text)
})

e.emit('helloWorld', 'Primeiro')
e.emit('helloWorld', 'Segundo')
e.emit('helloWorld', 'Terceiro')
```

Ao passar um parâmetro para a função que é chamado pelo evento de escuta - text - a cada vez que o evento é emitido, podemos retornar um valor diferente para cada emissão.

Output esperado:

Evento emitido, escutado e executado primeiro

Evento emitido, escutado e executado segundo

Evento emitido, escutado e executado terceiro

**[⬆ voltar ao capitulo](#node)**

### Evento com disparo único

A função de escuta on() permite que uma função seja executada a quantidade de disparos que houver no código, uma muito semelhante faz com que o evento de escuta ouça apenas o primeiro disparo, ignorando todos os outros depois dele.

```jsx
const { EventEmitter } = require('events')

const e = new EventEmitter()

e.once('helloWorld', (text) => {
    console.log('Evento emitido, escutado e executado', text)
})

e.emit('helloWorld', 'Primeiro')
e.emit('helloWorld', 'Segundo')
e.emit('helloWorld', 'Terceiro')
```

Output esperado:

Evento emitido, escutado e executado Primeiro

### Herdando Eventos

Inherits é uma função que recebe dois parâmetros(aquele que será o herdeiro, quem está herdando). No exemplo, a função principal está herdando os módulos de Events

```JSX

const { EventEmitter} = require('events')
const { inherits } = require('util')

function Main(print) {
  this.name = print
}

inherits(Main, EventEmitter)

const setPrint = new Main('Hello World')
setPrint.on('Testing', () => console.log('Está funcionando'))

setPrint.emit('Testting')
```

**[⬆ voltar ao topo](#index)**

# API

## Definição
Application Programming Interface, que corresponde a Interface de Programação de Aplicações, é uma maneira de integrar sistemas fazendo intercâmbio de dados entre aplicações e linguagens. Para que esse câmbio funcione é preciso que seja em um formato que ambos os sistemas entendam, é aqui que usamos o JSON.

## JSON

Objeto Json é a maneira da qual os sistemas se comunicam, assim como nas linguagens tradicionais existem regras gramaticais e oratórias, os sistemas também respeitam padrões para trocar informações entre si. A maneira mais comum atualmente é um objeto JSON, que é baseado em um objeto javascript porém todos os valores - exeto números - são colocados entre "parênteses".

As diferenças dos dados pode ser observada no output desse código:
```javascript
const objetoJS = {
  nome: "Placeholder",
  idade: 27,
}

const toJSON = JSON.stringify(objetoJS)
const toJS = JSON.parse(toJSON)

console.log(toJSON)
console.log(toJS)
```

### Fetch() x Axios()
Ambos fazem basicamente a mesma coisa, o Axios por exemplo faz a requisição usando Fetch por debaixo dos panos. No caso o Fetch é uma requisção nativa do Javascript, onde pode ser usada de forma pura. Enquanto o Axios é uma biblioteca que trás algumas utilidades de maneira mais simples, porém para ser usado é preciso fazer a importação ou instalação dos pacotes do Axios.

### Promise x Async Await
Situação parecida com o caso do 'Fetch x Axios', no final das contas fazem a mesma coisa. A diferença nesse caso é que Promise retorna uma cadeia de _.then()_ enquanto ao indicar as funções com _await_ torna mais intuitiva a manipulação.

### Fetch() com Promise X Async Await

**Promisse**
```javascript

fetch('https://api.github.com/users/NickolasEdu')
.then( response => response.json() )
.then( data => fetch(data.repos_url) )
.then( res => res.json() )
.then( result => console.log(result))
.catch( err => console.log(err) )
```

**Async Await**
```javascript
async function start() {
  const url = 'https://api.github.com/users/NickolasEdu'
  const user = await fetch(url).then(res = res.json())
  const repos = await fetch(user.repos_url).then(res => res.json())
  console.log(repos)
}

start().catch(e => console.log(e))
```
*Neste exemplo as cadeias .then de conversão de dados estão na mesma linha da chamada, por questões de clean code. Dessa forma o catch fica na chamada na função, retornando o erro de maneira explicita*

### Axios() com Promise X Async Await

**Promise**
```jsx
import axios from 'axios'

axios
  .get('https://api.github.com/users/NickolasEdu')
  .then(response => axios.get(response.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch(err => console.log(err))
```
**Async Await**
```javascript
import axios from 'axios'

async function axiosRes() {
  try {
    const user = await axios.get('https://api.github.com/users/NickolasEdu')
    const repos = repos = await axios.get(user.data.repos_url)
    console.log(repos.data)
  } catch(e) {
    console.log(e)
  }
}

axiosRes()
```

## Verbos HTTP


<dl>
  <dt>OPTIONS</dt>
  <dd>
    Retornar as especificações de request e response da API  
  </dd>
</dl>

<dl>
  <dt>HEAD</dt>
  <dd>
    Informações técnicas de dos dados da API. Não retorna nenhum conteúdo, apenas as informações sobre length, cache, etc sobre os dados.
  </dd>
</dl>

<dl>
  <dt>GET</dt>
  <dd>
    Lê e retorna o conteúdo do corpo da API, este é o conteúdo que chega no formato JSON antes de ser manipulado.
  </dd>
</dl>

<dl>
  <dt>POST</dt>
  <dd>
    Cria um novo recurso - dado de informação - e envia de volta para a API.
  </dd>
</dl>

<dl>
  <dt>PUT</dt>
  <dd>
    Altera os campos de informação dentro de um objeto. Como por exemplo dados de usuário, este verbo faz a requisição dos valores dos campos, que nesse caso serão relacioandos a nome, email, idade, etc.
  </dd>
</dl>

<dl>
  <dt>PATCH</dt>
  <dd>
    Também faz requisição de atualização, porém permite alterar campos únicos, sem precisar acessar toda a informação do objeto. Útil para atualizar informações especificas que podem alterar e receber vários requests em pouco espaço de tempo.
  </dd>
</dl>

<dl>
  <dt>DELETE</dt>
  <dd>
    Excluí alguma informação.
  </dd>
</dl>

## Save & Idempotent
Existem algumas definições para requisição de API, como **Save** que são requests seguros, que não fazem alterações no lado do servidor.
E idempotent que sempre irão retornar a mesma respota, ou seja, que só terá alteração no retorno por fator externo e não diretamente da aplicação.

## CORS
Referente a Cross-origin resource sharing, é um protocolo de segurança que precisa ser configurado para definir uma comunicação segura antre dados que estão partindo de diferentes origens.



## Métodos HTTP na prática

Utilizando uma API configurada localmente de Jakeliny
[API URL](https://github.com/jakeliny/node-api-discover)

## HTTP com Fetch

### Corpo HTML

Onde os dados estão sendo apresentados para visualização

```html
		<p id="userName"></p>
    <p id="userCity"></p>
    <img src="" alt="" id="userAvatar">
```

### GET

Lendo os dados pelo ID

```jsx
const url = "http://localhost:5500/api"

function getUser() {
    fetch(`${url}/1`)
    .then(res => res.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(err => console.error(err))
}

getUser()
```

### POST

Enviado um novo dado

```jsx
const url = "http://localhost:5500/api"

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.error(err))
}

const newUser = { 
    name: "Anna",
    city: "Londrina",
    avatar: "http://pixelsum.com/400/200"
}

addUser()
```

### PUT

Atualizando algum dado de usuário pelo ID

```jsx
const url = "http://localhost:5500/api"

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.error(err))
}

const updatedUser = {
    name: "Tallos",
    city: "Guarujá",
    avatar: "http://pixelsum.com/400/200"
}

updateUser(updatedUser, 9)
```

### DELETE

Excluindo algum dado pelo ID

```jsx
const url = "http://localhost:5500/api"

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.error(err))
}

deleteUser(2)
```

## HTTP com Axios

### Corpo HTML

Elemento para retornar os dados para visualização e importação do Axios

```html
<div id="apiResult">Hello World</div>

    
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### GET

```jsx
function getUsers() {
    axios.get(url)
    .then(res => {
        apiResult.textContent = JSON.stringify(res.data)
    })
    .catch(err => console.error(err))
}

getUsers()
```

POST

```jsx
function addNewUser() {
    axios.post(url, {
        name: "Zagreus",
        city: "Campinas",
        avatar: "https://picsum.photos/200/300"
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))
}

addNewUser()
```

PUT

```jsx
function updateUser(id, ) {
    axios.put(`${url}/${id}`, {
        name: "Alex",
        city: "Vasco",
        avatar: "https://picsum.photos/200/300"
    })
    .then(res => console.log(res))
    .catch(e => console.error(e))
}

updateUser(1)
```

DETELE

```jsx
function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(res => console.log(res))
    .catch(e => console.err(e))
}

deleteUser(2)
```

## Rest x RestFull

**[⬆ voltar ao topo](#index)**

# React
[ intro ]

Para criar projetos em React, existem comandos que á trazem uma pré definição de arquivos. O mais comum é no terminal rodar o comando ‘create-react-app’. Onde irá criar componentes padrões e importar icones placeholders, porém este é um método demorado pelo tamanho do conteúdo. Por conta disso há um comando bseado em Vue.js que trás um formato mais otimizado na criação de projetos, com o comando ‘npm create vite@latest appname --template react’.

Ao rodar o comando no terminal do projeto, ele pedirá a confirmação do template, que varia desde o react ao template Vue. Feito isso o próprio terminal irá retornar os próximos passos, indicando a alteração para o diretório do projeto, e instalação do npm com ‘npm install’ e o comando para rodar o projeto.

## Corpo do React

Para algo ser renderizado no navegador, é necessário um arquivo HTML, e é aqui que vemos a importância dos templates pré definidos pelo comando ‘create app’, pois fica muito mais prático a utilização, já que as importações já vem configuradas.

### index.html

Esse é todo o conteúdo do corpo HTML, uma div de renderização e um script que está lendo tudo o que foi feito em arquivos jsx.

```jsx
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
```

### main.jsx

Onde o conteúdo está sendo processado, passando o método .render( ) para o id da div root. O que está sendo renderizado é o app react, onde o conteúdo é escrito em JSX.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

## JSX

Esse é o formato da syntax do React, onde permite escrever código onde haverá HTML junto de escrita Javascript. No arquivo ‘main.jsx’ ele está renderizando tudo dentro do componente App, no qual podemos observar que é primeiro importado o arquivo, e usado como uma tag ‘<App />’.

É dentro deste componente onde criaremos e colocaremos os outros componentes da aplicação, escritos em JSX, sua syntax padrão é:

```jsx
function Componente() {
	const flag = true

	return (
		<div>
			<h1>Hello World</h1>
		</div>
)
}

export default Componente
```

_Uma função recebe o nome do componente, que deve ser o mesmo do arquivo.

Dentro dessa função podem ser declarados variáveis.

Em ‘return’ será escrito tudo o que irá ser renderizado.

export default é a indicação de exportação do componente, para que seja importado no App ou em outro componente.

Também pode ser feito a exportação na declaração da função. _

## Fragment

Porém cada componente só pode retornar um elemento filho, ou seja, apenas uma tag. Por esse motivo existe o React Fragment, um sinal de tag onde é colocado todo o conteúdo, assim retornando um só elemento filho, com vários outros dentro. O Fragment também pode ser substituido por uma tag de div.

```jsx
function App() {

  return (
    <>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
    </>
  )
}

export default App
```

Assim como a criação de componentes são individuais, a importação de CSS também. Sendo interessante manter um arquivo .css na mesma página de cada arquivo .jsx.

### Styles

CSS - CSS Modules - Styled Components

### Pages x Components

O desenvolvimento em components no React nos permite reutilizar muito código, e para ficar organizados geralmente é feita a separação de páginas e de componentes nos assets do projeto. Mas afinal, se tudo no React é componente, qual a diferença? Simplesmente o fato de que pages serão as páginas da aplicação no qual iremos navegar, enquanto os components são pedaços dessas páginas que podem se repetir ou não, exemplo: header, footer, caixas de conteúdo, etc.

Página chamando um componente repetidas vezes

```jsx
import './style.css'
import { Item } from '../../components/item'

export function App() {

  return (
    <div className='container'>
      <h1>Hello World</h1>
      <input type="text" placeholder='Digite aqui'/>
      <button type='button'>Add</button>
      
      <Item />
      <Item />
      <Item />
    </div>
  )
}
```

Componente criado para reutilização

```jsx
import './style.css'

export function Item() {
    return (
        <div className='item'>
            <p>$name$</p>
            <small>$description$</small>
        </div>
    )
}
```

### Props

Passando como se fosse um argumento de função, e o sinal de ‘{ }’ substituindo as strings literais, onde é declarado os nomes das proprieades que serão passadas ia Props.

```jsx
export function Item(props) {
    return (
        <div className='item'>
            <p>{props.name}</p>
            <small>{props.descript}</small>
        </div>
    )
}
```

Ou Props com destructuring

```jsx
export function Item({ name, descript }) {
    return (
        <div className='item'>
            <p>{name}</p>
            <small>{descript}</small>
        </div>
    )
}
```

Page chamando o componente e preenchendo os campos com novas informações.

```jsx
import { Item } from '../../components/item'

export function App() {

  return (
    <div className='container'>
      <h1>Hello World</h1>
      <input type="text" placeholder='Digite aqui'/>
      <button type='button'>Add</button>
      
      <Item name="Kobe" descript="Black Mamba" />
      <Item name="Young" descript="Ice Man"/>
      <Item name="Giannis" descript="Greek Freak"/>
    </div>
  )
}
```

## Hooks

São métodos de React que são funções e variáveis, voltados para o paradigma de programação funcional, que é concenso de desenvolvimento em React para trabalhar os ciclos de vida da aplicação.

### State

Os states servem para manipular o estado visual da aplicação, sempre que é atualizado ele renderiza o componente. Sua syntax consiste em importar o hook de state a partir do React, atribuir a uma variável que recebe dois valores, um onde serão armazenado o valor desse estado, como uma variável, e o que irá manipulalo, como uma função. Dentro da declaração das varáveis de estado, podemos passar um valor inicial, de como ele iniciará por padrão.

Uma rotina de exemplo para  mostrar a atualização de estado em tempo real, onde o useState está sendo importado;

Seu uso atribuído a uma constante com uma variável e uma função;

Um evento de On Change para escutar toda alteração no input, e toda vez chamar a função declarada a partir do useState;

Esse evento está recebendo o e de event e retornando a função que recebe como argumento event e o valor dele mesmo;

Tag recebendo a variável dentro das chaves literais ‘{ }’;

```jsx
import { useState } from 'react'

export function App() {
  const [inputState, setInputState] = useState('')

  return (
    <>
      <h1>Hello World</h1>
      <input
      type="text"
      placeholder='Digite aqui'
      onChange={e => setInputState(e.target.value)}
      />
      <button type='button'>Add</button>
      
      <p>{inputState}</p>
		</>
```

### Imutabilidade

Recebendo um novo valor de estado, sem alterar o anterior e sim apenas adicionar um novo.

```jsx
export function App() {
  
  const [ inputState, setInputState ] = useState('')
  const [ items, setItems ] = useState([])

  function handleAddItem() {
    const newItem = {
      name: inputState,
      time: new Date().toLocaleDateString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    }

    setItems((prevState) => [...prevState, newItem])
  }
```

### Key Props

É como um id para laços de repetição, por mais que as estruturas geradas de um loop sejam similares, cada uma deve receber um valor único. Para serem melhor identificadas pelo sistema e evitar futuros bugs. Essa key é passada como atributo e recebe um valor.

Como estamos definindo um valor de tempo para cada objeto, ele é um valor que dificilmente não será único, por isso foi passado como key.

```jsx
{
        items.map((item) => ( 
        <Card
          key={item.time}
          name={item.name}
          time={item.time}
        />
      ))
}
```

## Effect

use Effect é um hook de auto execução, ele é chamado assim que a aplicação terminar de ser renderizada. Diferente do state, atualiza parte da aplicação sem precisar fazer uma nova renderização.

A Syntax do hook useEffect consiste na declaração da função, o que irá ser executado, e a condção da execução. Se o último parâmetro estiver vazio ele cumprirá o comportamento padrão de ser executado uma única vez após a renderização, mas podemos passar um state, que o Effect irá escutar e toda vez que ele for alterado, a função é chamada. E caso for escutar mais de um estado, pode ser adcionado e colocados entre virgula.

```jsx
useEffect(() => {
    fetch('https://api.github.com/users/NickolasEdu')
    .then(res => res.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
  }, [])
```

### Async Effect

Não é possivel atribuir um Async Await na declaração do useEffect, deve ser feito normalmente numa função, que pode estar dentro do estado.

```jsx
useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/birobirobiro");
      const data = await response.json();
      console.log("DADOS =>", data);

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);
```

# Programação Avançada

## Programação Funcional
Um paradigma para uma interptração mais simples do código, e abstrair problemas em funções pequenas e especificas. Trabalhando muito com argumentos e com a maneirda de escrita ligeiramente diferente do método tradicional.

**Programação imperativa**
Funções imperativas são as que dão o script de como o processo deve ser feito, cada passo, quando e onde é declarada ou chamada.
```javascript
let number = 2

function square() {
	return number * number
}

number = square()
```

**Programação declarativa**
Já na função Declarativa, ela é declarada e fica lá armazenada para ser usada quando necessário. Recebendo o que será feito, mas tudo com valores neutros pois isso só será definido quando for necessário ser usada.
```javascript
const square = n => n * n
square(2)
```

Nesse contexto o sistema faz o Stateless, ou seja, não guarda o estado de number em momento algum, ele recebe o estado de valor apenas na hora que é chamado. Diferente de Statefull, onde o sistema sempre ficará atento caso a variável *let* tenha seu valor alterado. Dessa forma a função não trabalha com dados externos, e sim apenas com os dados que são entregues.

Esse é um conceito de imutabilidade, todas as variáveis devem ser consideradas como constantes, seus valores não podem ser alterados, mas sim criando novos, sendo recebidos via argumentos e deixando as declarações muito mais simples.

### Funções funcionais

#### Independentes
Funções que só trabalham com dados externos passados via argumentos, e retornam um novo valor. Todo dado externo é imutável para esta função, e também não podem ser feitos uso de loops. Para uso de loops é feito o uso do algoritmo de recursão onde o valor está sendo multiplicado a cada rodada com o seu próprio valor -1, até que chegue no zero.
```javascript
const factorial = x => {
     if(x === 0) {
         return 1
     }
     return x * factorial(x - 1)
}

factorial(6)
```
#### First Class
Funções que são interpretadas como variáveis, podem ser atribuídas a uma constante e sua ação feita sempre que algo for passada como argumento para dentro dela. runFunction( ) sendo usada literalmente para simplesmente rodar outras arrow functions, ou até operações dentro de console.log.
```javascript
const runFunction = rf => rf()
const sayMyName = () => console.log('Heinserberg')

runFunction(sayMyName)
runFunction(() => console.log('Jesse Pikman, bitch'))
```
#### High Order - Currying
PLACEHOLDER

#### Composição
Um encadeamento de funções, onde são passados argumentos que vão de uma função a outra fazendo alterações a cada nível e seguem sendo passados como argumentos. Semelhante a promisses.
```javascript
const people = ['Amanda', 'Daniel', 'Danilo', 'Joab', 'Matheus']
const peopleWithD = people
.filter(person => person.startsWith('D'))
.map(dperson => dperson.toUpperCase())

peopleWithD
```

**[⬆ voltar ao capítulo](#javascript)**

## Oriented Object Programming
O Javascript é uma linguagem de multiparadgima, sendo os paradigmas maneiras de enxergar e interpretar o desenvolvimento de alguma forma especifica para gerar melhor compreendimento e comunicação entre times de devs. Sendo o OOP - Programação Orientada a Objetos - um paradigma muito usado com o objetivo de abstrair reutilizar códigos.

**Vamos aos conceitos**

### Objetos
Possuem **Atributos** e **Métodos**, os atributos são as sua propriedades, aquilo que o define e suas funções. Já os Métodos são o estado e o comportamento daquele objeto, em qual estado ele se encontra e qual é seu comportamento quando alterado para outro estado.

### Objetos Abstratos
Não tem **métodos ou Atributos** claramente definidos, são mais como **processos**, que dependem de um conjunto de métodos e atributos, mas que não tem forma definida. Como processos de **autenticação**, **validação** e **autorização**.

### Classes
Servem como moldes, para que objetos sejam criados a partir delas. Sendo que o comportamento padrão do Javascript, todo objeto herda prototypes dos seus objetos pais.

### Encapsulamento
São agrupados dentro de uma classe alguma função e valores que só serão usados quando essa capsula for requisitada, ficando totalmente independente de todo o resto da aplicação.  Esse conceito de encapsulamento é um dos fatores mais distintos da OOP para programação estrutural.

## Programação Estrutural x Orientada a Objetos

Estrutural
```jsx
let valorHora = 50
let desconto: number
let desconto = valorHora * tempoEstimado * (10 / 100)
let custoEstimado = valorHora * tempoEstimado - desconto
console.log(custoEstimado)
```

OOP
```jsx
const job = new job()
job.valorHora = 50
job.tempoEstimado = 20
job.desconto = 10
const custoEstimado = jobb.calcularEstimativa()
console.log(custoEstimado)
```

## Herança
Maneira de reutilização de código, onde um novo objeto é a extensão do outro e recebe funções do objeto pai.

```jsx
class Veiculo {
rodas = 4

mover(direção){}
virar(direção){}
}

class Moto extends Veiculo {
 constructor() {
		super()
		this.rodas = 2
	}
}
```
*Legenda:*
> A class Veículo foi criada com um padrão de 4 rodas, onde normalmente serão carros

> Funções de direção pré estabelecidas, onde definiram a direção os veículos

> Um novo objeto criado de motos, recebendo extends de veículos 

> Constructor que é uma função reservada onde os atributos do objeto são definidos

> super( ) que faz a importação das funcionalidades e métodos do objeto pai - aqui com as funções de direções

## Polimorfismo
São objetos que se estendem de outros porém seus métodos são semelhantes, porém não serão idênticos. Onde são criadas condições para funções.

```jsx
class Atleta {
	peso
	categoria

	constructor(peso) {
		this.peso = peso
	}

	definirCategoria() {
	if (this.peso <= 50) {
				this.categoria = 'infantil'
		} else if (this.peso <= 65) {
				this.categoria = 'jovem'
		} else {
				this.categoria = 'adulto'
		}
	}
}

class Lutador extends Atleta { 
	constructor(peso) {
		super(peso)
}

	definirCategoria() {
	if (this.peso <= 50) {
				this.categoria = 'Mosca'
		} else if (this.peso <= 60) {
				this.categoria = 'Meio Leve'
		} else {
				this.categoria = 'Médio pesado'
		}
	}
}
```
*Legenda*
> Um objeto onde é declarado peso e altura sem nenhum valor
> Esses valores são passados posteriormente por argumentos
> E também a partir de condições, onde originalmente as funções recebem o peso e depois definem os valores de categoria

# Typescript
O TS foi criado pela Microsoft, e é uma linguagem de superset que faz com que a tipagem no javascript seja possivel. A tipagem bascicamente é uma verificação constante nos tipos de dados usados na aplicação. Exemplos de linguagem fortemente tipadas são Java, C, C++, Rust, entre outras.

Essa abordagem de linguagem nos permite reconhecer e evitar erros no programa de forma mais prática. Exemplo é ao definirmos uma syntax correta, porém em que os métodos não estão, podendo ser um método array em uma função, ou dados errados passados por argumentos. Esses são erros de produção que o Typescript visa evitar.

Além de fazer a verificação de estado dos dados, o Typescript também faz a compilação de TS para JS - assim como funciona em SASS e CSS, por exemplo - ou seja, vamos desenvolver as lógicas e rotinas usando as tipagems em Typescript, e esse código será convertido em JS puro. A vantagem aqui é que o TS gera shortcuts no desenvolvimento, permitindo escrever menos código e a tipagem diminui a complexidade.

### tsconfig

São as configurações padrões do Typescript, para alinhar com as suas preferências de desenvolvimento. Exemplo visual no TS Playground, onde podemos definir a versão de JS, indicar uso de framework (React, Node, etc) ou retirar avisos de erro, como erros de tipagens em geral.

É através da instalação das dependencias do typescrip e da configuração do arquivo ‘tsconfig’ que vamos conseguir usar essa liguagem nos projetos.

## Tipagens

### Tipagem implicita

Atribuindo um tipo de valor, ao tentar atribuir um valor diferente o sistema automaticamente irá retornar um erro, pois automaticamente é definido uma tipagem baseada no valor atribuido inicialmente.

```tsx
let name = 'Rodrigo'

name = 10
```

### Tipagem Explicíta

Declarando um tipo de valor que deve ser atribuído

```tsx
function showUser(user: string, id: number){
	console.log(`Hello ${user}, your ID is: ${id}`)
}

console.log('Artorias', 123)
```
## Valores

### Any
Esse é o parâmetro padrão do JS puro, onde qualquer variável ou argumento pode receber qualquer valor. No TS para usar este mesmo comportamento, é declarado o valor ‘Any’
```tsx
let data: any;

data = []
data = 'Name'
data = true
info = 10
```

### Tipagem em Array
Para definir dados especificos para arrays, existe duas formas:
```tsx
let numbers: number[]
numbers = [ 1, 2, 3, 4, 5 ]

let names: string[]
names = [ 'Amanda', 'Bianca', 'Carol' ]

let data: any[]
data = [ 1, 'b', 3, '4', true ]
```

 OU

```tsx
let numbers: Array<number>
numbers = [ 1, 2, 3, 4, 5 ]

let names: Array<string>
names = [ 'Amanda', 'Bianca', 'Carol' ]

let data: Array<any>
data = [ 1, 'b', 3, '4', true ]
```

### Tipagem em Funções
No geral as tipagens em funções são implicitas, porém há comportamentos que precisamos ficar atentos.

Ao retornar uma valor, automaticamente a função vai considerar esse valor na tipagem, mas podemos declarar um tipo de dado esperado para ser retornado.

Ou até declarar se queremos um retorno ou não.

Se nenhuma tipagem é declarada, é feito a definição implicita.

ex:
Tipagem ‘void’ indica que não é permitido usar um ‘return’ dentro desta função. 
```tsx
function noReturn(text: string): void{
	console.log(text)
}

noReturn('Hello World')
```

Neste caso o retorno espera uma string, porém se um valor de número for retornado o sistema já indicará o erro.
```tsx
function stringReturn(text: string): string{
	return text
}
```

### Union
Operador de ‘ou’, indicando que aquela tipagem recebe um valor ou outro valor.

```tsx
function printUserName(id: number | string){
	console.log(`O nome de usuário é: ${id}`)
}

printUserName('@Igor123')
```
## Manipulação de tipos

### Reutilizando tipagens
Para declarar tipagens padrões que irão se repetir ou como meio de facilitar a manutenção delas, é usado o ‘type’
```tsx
type IDType = string | number

let userId: IDType
let adminId: IDType
```

### Type Assertion
Indicar ao sistema o que ele pode esperar - ou deve considerar - as opções vindo de um objeto vazio. Passando para esse objeto o type do qual ele deve ser cosniderado.
```tsx
type UserResponse = {
	id: number;
	name: string;
	city: string;
}

let userResponse = {} as UserResponse
```

### Type Opicional
Quando o type é definido, é possível definir uma propriedade que por padrão não será obrigatória. Pois se esse parâmetro o sistema estaria retornando um erro, para isso simplesmente é adicionado um ‘?’ na declaração.
```tsx
type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean;
}

let newUser: User = {
    name: 'João',
    email: 'joao@email.com',
    age: 18
}
```

### Type Objects
Declarar a tipagem de objetos como argumentos
```tsx
type Dates = {
    d: number;
    m: string;
    y: number;
}

function showDate(dates: Dates){
    console.log(`São Paulo ${dates.d} de ${dates.m}, de ${dates.y}`)
}

showDate({d: 10, m: 'Agosto', y: 2022})
```

### Type Asserction
Declarar dois Types separadamente, e unir em um único
```tsx
type User = {
    id: number,
    name: string,
}

type Char = {
    nickname: string,
    level: number
}

type PlayerInfo = User & Char;

let info: PlayerInfo = {
    id: 1,
    name: 'João Inácio',
    nickname: 'birobirobiro',
    level: 50
}
```

## Syntax

### Type x Interface
Servem ao mesmo propósito, as diferenças são mínimas. O interface tem uma syntax que lembra o paradigma de OOP - Programação Orientada a Objetos - dessa forma quem tem contato com esse método pode sentir mais facilidade nessa maneira, enquanto o type tem uma manipulação mais simplificada. ex:

### Type Asserction com interface
```tsx
interface User {
    id: number,
    name: string,
}

interface Char {
    nickname: string,
    level: number
}

interface PlayerInfo extends User, Char {}

let info: PlayerInfo = {
    id: 1,
    name: 'João Inácio',
    nickname: 'birobirobiro',
    level: 50
}
```

# SQL

- [SQL x noSQL](#sql-x-nosql)
- [Tipos de campos](#tipos-de-campos)
- [Comandos SQL](#comandos-sql)
- [Operadores](#operadores-sql)
- [Criando tabelas](#command-tables)
- [Relação de tabelas](#relação-de-tabelas)
- [Comandos Avançados](#comandos-avançados)

## Bancos de dados

Um repositório de informações, ou banco de dados, são onde armazenamos e manipulamos tipos de dados. Como exemplo, nos nossos celulares temos o aplicativo de contatos que armazena as informações de números de contato, e os dados consistem em Nome, Número Móvel e Número Fixo.
Estas databases são sequenciais ou não-sequenciais, nos bancos noSQL cada campo de informação tem uma chave própria para que as informações sejam pesquisadas. Por obter uma escrita simples e direta, não há uma organização complexa de dados, porém eles são encontrados mais rápidos e suportam mais acessos.

Enquanto um banco SQL as informações são organizadas em campos dentro de tabelas, a correlação de dados será feito entre as tabelas, onde cada campo de informação terá keys únicas e kays que se repetem.

## SQL x noSQL

O SQL é formado por:

Tabelas > Campos > Infos > Relacionamentos de tabelas

As *tabelas* são os diferentes grupos de dados;
Os *campos* são os títulos das colunas da tabela;
As *informações* são os dados inseridos em cada campo;
Essas infos devem seguir regras de aplicação para serem acessados, esse é o *relacionamento de tabelas*.

{img}

## Tipos de campos

Os campos podem ser preenchidos com qualquer informação, desde que sigam regras de uso do sistema - como uma syntax. Não podem receber acentos, caracteres especiais, espaços e nem começar com número. São declarados com letras, underline e com algum desses valores seguidos de algum número.

<dl>
  <dt>Text</dt>
  <dd>
    Qualquer valor escrito, desde: letras, caracteres especiais, espaços e números
  </dd>
</dl>

<dl>
  <dt>Number</dt>
  <dd>
    Apenas valores numéricos.
  </dd>
</dl>

<dl>
  <dt>Datetime</dt>
  <dd>
    Recebe números e traços, interpretados pelo sistema como data e horário. Ex: dd-mm-yy-hh-mm-ss ou 04-07-2022-10-41-30
  </dd>
</dl>

<dl>
  <dt>Primary Key</dt>
  <dd>
    Um valor de ID que será único para um campo daquela tabela.
  </dd>
</dl>

<dl>
  <dt>Foreign Key</dt>
  <dd>
    É quando uam tabela importa a Primary de outra tabela, enquanto cada uma teu sua própria Primary Key, para ser relacionada em outra tabela ela agora será a Foreign Key, que agora pode se repetir.
  </dd>
</dl>

{Img2}

<dl>
  <dt>Text Unique</dt>
  <dd>
    Um texto que não pode se repetir em mais nenhum campo daquela tabela, mas que também não é uma Primary Key - como @usuario que só poderá haver um.
  </dd>
</dl>

**[⬆ voltar ao capitulo](#sql)**

## Comandos SQL

Os Comandos são as apresentações e manipulações de dados, sempre em letras UpperCase.

<dl>
  <dt>SELECT</dt>
  <dd>
    Selecionar qual o campo
  </dd>
</dl>

<dl>
  <dt>FROM</dt>
  <dd>
    Após selecionar o campo, indicar qual a tabela ele está.
  </dd>
</dl>

<dl>
  <dt>WHERE</dt>
  <dd>
    Uma condição de o que especificamente deve ser procurado. ex: WHERE in = 1 / trazendo tudo no campo do ID 1
  </dd>
</dl>

<dl>
  <dt>like "${key}%"</dt>
  <dd>
    Uma condicional do WHERE, onde procura algum valor que comece com um caractere especifico. ex: SELECT * FROM tabela WEHRE nome like "a%" / Retornando tudo o que começa com A ou "%a%" para retornar algo que tenha A no meio de outros caracteres.
  </dd>
</dl>

EX:
```SQL
SELECT * FROM tabela WHERE nome
```

<dl>
  <dt>INSERT INTO</dt>
  <dd>
    Insere novos dados em uma tabela, recebendo os campos que serão inseridos os dados e os valores.
  </dd>
</dl>

EX:
```SQL
INSERT INTO tabela (nome, ususario, id) VALUES ('Maria Luiza', 'Malu', 123456)
```

<dl>
  <dt>UPDATE</dt>
  <dd>
    Alterar dados de campos já existentes. Recebendo os campos que serão alterados e seus valores, e a condição que será aplicada. 
  </dd>
</dl>

EX:
```SQL
UPDATE tabela SET nome='Marilu' usuario='@malu' WHERE user_id = 3
```

<dl>
  <dt>DELETE</dt>
  <dd>
    Remove o campo e os dados selecionados, recebe a tabela e é sempre necessário uma condição. Pois sem ela, o comportamento padrão é excluir toda a tabela quando não há um campo especifico.
  </dd>
</dl>

EX:
```SQL
DELETE FROM tabela WHERE user_id = 3
```
**[⬆ voltar ao capitulo](#sql)**

## Operadores SQL

### Relacionais

São operadores que fazem camparação entre valores de condicionais. São eles: *=,!=, >, <, <=, >=, <>*

ex:

Retornando cadastros que contém 18 anos de idade ou que contém menos de 18. Juntandos as condições de maior/menor e igual.
```SQL

SELECT * FROM tabela WHERE idade >= 18
SELECT * FROM tabela WHERE idade <= 18
```

Retornando todos valores diferentes de uma condicionais. Com os operadores: *!=, <>*
```SQL

SELECT * FROM tabela WHERE idade != 55
SELECT * FROM tabela WHERE idade <> 13
```
Para comparações com texto não são usados operadores, mas sim a expressão *like*

### Matemáticos

Operadores simples de gramática:

- Adição: +
- Subtração: -
- Multiplicação: *
- Divisão: /
- Módulo (restante de uma divisão): %

### Lógicos

Para condicionais avançadas

*And* para declarar uma condição, mais outra.
```SQL
SELECT * FROM tabela WHERE nome like 'A%' and idade > 18
```
ex: buscando por um usuário cujo o nome comece com a letra A seguida de outros caracteres e também tenha idade superior a 18.

*Or* para executar uma condição ou outra.
```SQL
SELECT * FROM tabela WHERE idade >= 18 or idade >= 14
```
ex: Dados de usuários maiores de 18, se não houver, maiores de 14.

*Between* retorna valores dentro de uma condição.
```SQL
SELECT * FROM tabela WHERE user_id between 100 and 150
```

*Not Between* retornar valores, exeto por aqueles dentro de uma sequência especifíca.
```SQL
SELECT * FROM tabela WHERE user_id NOT BETWEEN 100 and 150
```

*IN* Sequência específica de campos. Recebe os parâmetros de campo que serão retornados
```SQL
SELECT * FROM tabela WHERE user_id IN (3, 5, 8, 13)
```

*NOT IN* para fazer o oposto, retornando todos os valores exeto os declarados.
```SQL
SELECT * FROM tabela WHERE user_id NOT IN (3, 5, 8, 13)
```

*IS NULL* retornando dados de campos com valores vazios ou nulos (undefined)
```SQL
SELECT * FROM tabela WHERE user_id IS NULL
```

*IS NOT NULL* para retornar a negação ao undefined
```SQL
SELECT * FROM tabela WHERE user_id IS NOT NULL
```

**[⬆ voltar ao capitulo](#sql)**

## Command Tables

Para criar um novo banco do zero, é criado um arquivo .txt vazio e então alterado para .SQL e seu import feito no manipulador de SQL.

<dl>
  <dt>CREATE TABLE</dt>
  <dd>
    Recebe o nome de tabela, os campos e as configurações deles
  </dd>
</dl>

```SQL
CREATE TABLE alunos {
  matricula INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  cpf INTEGER UNIQUE,
}
```

<dl>
  <dt>ALTER TABLE 'nomeAtual' RENAME TO 'novoNome'</dt>
  <dd>
    Alterar os nomes de tabelas, ou para alterar o nome de campos com ALTER TABLE nome RENAME COLUMN campo TO 'novoNome'
  </dd>
</dl>

<dl>
  <dt>DROP TABLE</dt>
  <dd>
    Excluir toda a tabela e seus registros.
  </dd>
</dl>

**[⬆ voltar ao capitulo](#sql)**

## Relação de tabelas

<dl>
  <dt>JOIN</dt>
  <dd>
    Faz o relacionamento das tabelas através de dados especificos.
  </dd>
</dl>

<dl>
  <dt>ON</dt>
  <dd>
    Este parâmetro se refere aos valores das diferentes tabelas que devem ser iguais para que seja feita a relação.
  </dd>
</dl>

ex:
```SQL
SELECT * FROM funcionarios JOIN setor ON setor.area_id = funcionarios.func_id
WHERE setor.area_id = 1
```

_Neste caso buscando os funcionarios que tem relação com o setor de id 1_

<dl>
  <dt>LEFT OUTER JOIN</dt>
  <dd>
   Faz a relação de todos os campos, mesmo aquelas com valor null.
  </dd>
</dl>

ex:
```SQL
SELECT * FROM funcionarios LEFT OUTER JOIN setor ON usuario.id = servidor.id
```

<dl>
  <dt>AS</dt>
  <dd>
    Criar um nome alternativo aos nomes de tabelas e campos que manipulamos.
  </dd>
</dl>

ex:
```SQL
SELECT  tabela.nome as "Name" FROM funcionarios as Func JOIN departamentos as Dept ON Func.id = Dept.id
```

_Trazendo as mesmas informações do ultimo exemplo, dessa vez sem os valores null e com os nomes alternativos_

**[⬆ voltar ao capitulo](#sql)**

## Comandos Avançados

<dl>
  <dt>ORDER BY</dt>
  <dd>
    Definir a ordem da apresentação crescente da apresentação, ou ordem decrescente com o comando DESC
  </dd>
</dl>

ex:
```SQL
SELECT * FROM tabela ORDER BY Nome
SELECT * FROM tabela ORDER BY Nome DESC
```

<dl>
  <dt>LIMIT</dt>
  <dd>
    Definir um limite para a quantidade de dados apresentados.
  </dd>
</dl>

ex:
```SQL
SELECT * FROM tabela LIMIT 50
```

<dl>
  <dt>OFF SET</dt>
  <dd>
    Desconsiderer os primeiros 'x' números de resultados, antes de apresentar os dados - ou seja, pula a apresentação destes dados.
  </dd>
</dl>

ex:
```SQL
SELECT * FROM tabela LIMIT 50 OFF SET 5
```

<dl>
  <dt>COUNT()</dt>
  <dd>
    Retorna uma função que faz a contagem de dados.
  </dd>
</dl>

<dl>
  <dt>GROUP BY</dt>
  <dd>
    Faz a contagem de campos.
  </dd>
</dl>

<dl>
  <dt>HAVING</dt>
  <dd>
    Gera mais uma segunda condição após o WHERE, para trazer mais especificidade para a apresentação dos dados.
  </dd>
</dl>

EX:
```SQL

SELECT departamentos.descrição, COUNT(funcionarios.id_departamentos)
FROM funcionarios
JOIN depertamentos
ON funcionarios.id_departamentos = departamentos.id_dept
GROUP BY departamento.id_dept
HAVING COUNT (funcionarios.id_departamentos) >= 2
```

**[⬆ voltar ao topo](#index)**