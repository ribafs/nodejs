# NdeJS

Um aplicativo Node.js é executado em um único processo, sem criar um novo thread para cada pedido. O Node.js fornece um conjunto de primitivas de E/S assíncronas em seu biblioteca padrão que impede o bloqueio do código JavaScript e, geralmente, bibliotecas em Node.js são escritas usando paradigmas sem bloqueio, tornando
o comportamento de bloqueio é a exceção e não a norma.

Quando o Node.js realiza uma operação de E/S, como ler da rede, acessar um banco de dados ou o sistema de arquivos, em vez de bloquear o thread e desperdiçando ciclos de CPU esperando, o Node.js retomará as operações quando o resposta volta.

Isso permite que o Node.js lide com milhares de conexões simultâneas com um servidor único sem introduzir o fardo de gerenciar threads simultaneidade, que pode ser uma fonte significativa de bugs.

Node.js tem uma vantagem única porque milhões de desenvolvedores de front-end que escrever JavaScript para o navegador agora são capazes de escrever o código do lado do servidor em adição ao código do lado do cliente sem a necessidade de aprender um Língua diferente.

O node tem uma grande quantidade de bibliotecas disponíveis. Atualmente (07/2023) o NPM tem mais de 2 milhões de pacotes. São mais de 17 milhões de programadores a redor do mundo.


## Aviato Creavite

Node.js🎲: por que você deve conhecer essa tecnologia👨🏻‍💻🤓?
Neste artigo, Matondo João , da Aviato Creative, esclarece o que vem a ser o Node.js, onde a sua utilização pode ser vantajosa e quando é melhor ou não contar com ele🤓.
Você provavelmente já ouviu falar de Node.js: a tecnologia figurou na Stack Overflow Developer Survey de 2017 entre as mais amadas entre desenvolvedores (em segundo lugar, com 62.1%) e a que os devs mais querem trabalhar (em primeiro lugar, 22.2%). A pesquisa do Stack Overflow também demonstrou que Node.js vem crescendo de forma impressionante: de 2013 a 2017, passou de 8% a 26% em popularidade.

Dentre os principais motivos desse crescimento está a comunidade dedicada ao #Node.js. Por ser uma tecnologia open source, o Node.js mantém uma comunidade ativa e muito presente: é possível acompanhar (e contribuir) via #GitHub, auxiliar com a documentação ou mesmo produzir tutoriais. 
🔻O que é o Node.js?

Nem linguagem, nem framework: Node.js é um runtime de JavaScript que leva a #renderização e processamento do código JavaScript para o lado do servidor, desvinculando-o totalmente do browser, possibilitando que você desenvolva aplicações de rede rápidas e estáveis.

Desenvolvido sobre o motor #JavaScript V8 - engine criada pelo #Google e utilizada nos navegadores #Chrome e #Chromium (open source), Node.js é direcionado a eventos (event driven) e o processamento de requisições I/O (input e output) é não-bloqueante, garantindo estabilidade e pouco consumo de recursos. 

O desenvolvimento da tecnologia teve como objetivo “fornecer uma maneira fácil para construir aplicações escaláveis”, conforme o site oficial.

Criado em 2009 por Ryan Dahl, o Node.js, apesar de recente, já é utilizado por grandes empresas como #LinkedIn, #Groupon e #PayPal (mais para frente você poderá ver mais sobre como essas empresas estão usando Node). Entre as principais vantagens está justamente o uso de JavaScript: uma linguagem versátil que possui uma curva de aprendizado relativamente baixa, além de ser uma das linguagens mais populares na atualidade.

🔻Quando devemos utilizar o Node.js?

Levando em consideração esses pontos positivos, pode ser fácil se empolgar e já começar a querer mudar todos os seus projetos para Node. Apesar de estar fazendo a diferença para muita gente, Node.js não é a solução para todos os problemas. Existem casos em que optar por essa tecnologia é uma boa, mas outros em que ela talvez 
não te ajude tanto.

Por isso, Node é a pedida caso você necessite:

🔻Criar aplicações de chat e mensagens instantâneas:
Apps como chats e ferramentas de colaboração multi-usuários tornam-se um dos melhores usos para Node: alto tráfego e uso intenso de dados em tempo real rodando em diferentes dispositivos. Como o Node.js consegue lidar muito bem com comunicação assíncrona e já consegue lidar com WebSockets (através de bibliotecas como #Socket.IO), ele se mostra como uma das melhores opções neste tipo de cenário. Um exemplo de chat construído usando Node.js éo  chat no nosso site, que usa Socket.io e Express;

🔻Criar APIs que sejam facilmente escaláveis:

Também por decorrência da abordagem não-bloqueante do Node.js, ele pode ser uma excelente opção quando for necessário criar APIs que sejam escaláveis de maneira rápida e simples. Em tempos onde a criação de aplicações #SPA (Single Page Application) é muito comum, a questão da escalabilidade e do tempo de resposta de APIs (RESTful ou não) torna-se importantíssima; já que, nesse tipo de cenário, existe uma grande possibilidade de que o I/O de rede cresça consideravelmente e, portanto, o servidor tenha que lidar com uma quantidade de requisições maior ao mesmo tempo sem perder performance ou consumir grandes quantidades de recursos (como memória e processador) do servidor. O Node.js já foi criado exatamente para resolver esse tipo de situação;

🔻Dados em streaming:

Outro bom uso do Node.js é para dados em #streaming: novamente, por causa da sua abordagem de I/O não bloqueante. O Node.js é uma opção que economiza muito tempo e recursos para processar dados de fontes diversas. Na verdade, em quaisquer situações onde haja uma carga muito grande de leitura e escrita de dados (como acontece com streaming), o Node.js conseguirá entregar um resultado muito satisfatório com menos esforço, tanto no sentido de codificação, como no sentido de hardware necessário para suporte;

🔻IoT:

Uma pesquisa realizada pela Node.js Foundation em 2016 mostrou que 96% dos envolvidos em projetos de IoT estão usando JavaScript/Node para o desenvolvimento. E os desenvolvedores de IoT também são os mais experientes, com 40% dos participantes tendo mais de 10 anos de experiência.
Outros casos de uso para o Node.js que podem ser interessantes:
Criação de dashboard para monitoramento de aplicações, criação de sistemas para corretores de ações e até mesmo #backend para jogos!

🔻Projetos e empresas que utilizam Node.js

No seu Guia para Convencer seu Chefe a adotar Node.js, Felix Geisendörfer fala que muitas vezes a barreira para adotar uma nova tecnologia open source é a dúvida sobre o comprometimento a longo prazo com a manutenção. No caso do Node, essa questão foi respondida com a Node Foundation e o apoio de grandes empresas, como #Microsoft, #Joyent e #IBM, que garantem o desenvolvimento da tecnologia ao longo dos anos.
A maior prova de que #Node.js está aqui para ficar é a quantidade de grandes projetos que já adotam a tecnologia:

🔻#LinkedIn: O LinkedIn foi uma das primeiras grandes empresas a adotar Node.js em 2011. O app mobile lançado pela rede social que usava Node conseguiu aumentos de performance com um uso muito menor de recursos. Além disso, de acordo com Kiran Prasad, líder de desenvolvimento mobile do LinkedIn na época, o projeto foi desenvolvido de forma muito rápida;

🔻PayPal: O PayPal mudou parte de suas aplicações de Java para Node.js em 2013 ao perceber que, com Node e a possibilidade de escrever tudo em JavaScript, eles poderiam ganhar mais produtividade e performance. O PayPal inclusive criou o Kraken.js, hoje open source, uma layer de convenções e configurações criada para dar mais estrutura a projetos criados em Express;

🔻Groupon: O Groupon mudou do Ruby on Rails para o Node.js ao perceber que a aplicação monolítica que tinham estava difícil de manter e escalar. Além disso, após realizarem aquisições na Europa e América do Sul, era importante para a empresa ter uma plataforma de desenvolvimento para toda as equipes de desenvolvimento, independente da localização. Além dos ganhos de performance nas páginas do site, o Groupon também percebeu um aumento na velocidade da entrega de novas features por parte dos times de desenvolvimento;

Ghost: A plataforma Ghost de blogging que hoje também é voltada ao jornalismo independente, roda sob o Node.JS. Desde à sua criação, já foram feitos quase dois milhões downloads. Ela é open source e mantida por uma organização sem fins lucrativos.

🔻Tecnologias utilizadas em conjunto com Node.js
Em 2016, a *Node.js Foundation, *em parceria com a Linux Foundation, criou uma pesquisa sobre o uso de #Node.js, que foi respondida por 1760 pessoas ao redor do mundo. A pesquisa demonstrou quais são as principais tecnologias utilizadas junto com o Node.js:

🔻#MongoDB é a primeira escolha para banco de dados. Dois terços dos participantes afirmaram que MongoDB é o banco utilizado com suas aplicações Node, pois ambas são tecnologias não-bloqueantes que aguentam um alto throughput de I/O.

Containers são a tecnologia perfeita para rodar aplicações em Node.js. Quase metade dos participantes está usando container. Dentre as opções, Docker é a principal escolha - 73% de quem usa alguma tecnologia baseada em containers, está usando #Docker.

Na #Umbler, você consegue hospedar uma aplicação Node.js usando tecnologia de Containers e tem #MongoDB disponível para criar com as melhores ferramentas.
Você já utiliza Node.js? Tem interesse em usar? Conte para a gente nos comentários o que você acha dessa tecnologia🙂.
Gostou deste post deixe seu like🙏👍 e siga a nossa pagina para não perder os próximos conteúdos📕
clique no link se deseja fazer parte da nossa comunidade ficaríamos feliz em recebe-lo🙂

https://free.facebook.com/groups/1661399400869509/?refid=27&_rdc=1&_rdr&__tn__=%2Cg

