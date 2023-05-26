# Backend de um Blog

# Tecnologias<hr>
<img src='https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor' style="width:50px;heigth:50px;"/>
<h1>Typescript</h1>
<p>Todo backend foi feito utilizando Typescript , me permitiu uma experiência singular no quesito produtividade , pois diversas falhas de código foram detectadas logo no desenvolvimento , sem que eu precise rodar ou colocar em produção para descobri-las.</p>
<img src='https://icongr.am/devicon/postgresql-original.svg?size=128&color=currentColor' style="width:50px;heigth:50px;"/>
<h1>Postgres</h1>
<p>Para o sistema de banco de dados do blog , foi utilizado o Postgres SQL , me permitiu uma experiência e interação bastante relevante em todos os quesitos , sendo que foi uma das primeiras vezes que utilizei ele em um projeto  </p>
<img src="https://img.icons8.com/?size=512&id=aqb9SdV9P8oC&format=png" style="width:50px;heigth:50px;"/>
<h1>Prisma ORM</h1>
<p> Nem tenho palavras para descrever o quão incrível é este ORM , para quem quer facilidade e simplicidade de uso , eu o recomendo . Me permitiu criar uma estrutura relacional com poucos passos e sua integração com o sistema em si foi maravilhosa .
<hr>

# Descrição 

<p>Projeto de uma api simples , com o intuito de ser o backend de um Blog , aonde temos níveis de privilégio de ADMIN e USER . </p>
<p>O ADMIN pode :</p>
<ul>
  <li>Criar ,Consultar ,Excluir e editar usuários</li>
  <li>Criar, Excluir e Editar Postagens</li>
  <li>Toda parte administrativa do Blog</li>
</ul>
<p>O USER pode:</p>
<ul>
  <li>Criar excluir e editar a sua própia conta </li>
  <li>Curtir um Post</li>
  <li>Comentar um Post (*em implementação)</li>
  
</ul>

# Utilização 

<h2> Instalação </h2>

  <div class="stackedit__html"><p>Escolha uma pasta em seu Computador e faça o clone do repositório a partir do comando :</p>
<pre><code>git clone https://github.com/Ilgnerbecheleni/backendBlog.git
</code></pre>
<p>Para instalação dos pacotes em sua IDE :</p>
<pre><code>yarn install
</code></pre>
<p>Apos instalado os pacotes necessários , você precisa ter o Postgres instalado em sua máquina para que possa configurar o arquivo .env , achou que eu ia disponibilizar minhas chaves ?<br>
Nada disso !<br>
Mas fique tranquilo , como bom defensor da disseminação de informações , irei disponibilizar aqui o formato do arquivo .env para que possa cria-lo em sua maquina :</p>
<p>crie um novo arquivo na raiz do projeto com o nome .env , dentro desse arquivo coloque suas informações da seguinte forma :</p>
<pre><code>DATABASE_URL= "postgresql://janedoe:mypassword@localhost:5432/mydb?schema=sample"
JWT_SECRET="sua palavra secreta para o JWT"
</code></pre>
<p>Se chegou até aqui , já está apto a usar o sistema , basta executar o comando no terminal para que o prisma possa criar as tabelas:</p>
<pre><code>yarn prisma migrate dev --name first-migration
</code></pre>
<p>Pode nomear sua migração como quiser , e após executar o comando , se estiver tudo configurado certo , pode verificar em seu banco que as tabelas e relações estão todas criadas .</p>
<p>Até que enfim podemos dar o comando tão esperado , que é o de rodar a aplicação :</p>
<pre><code>yarn dev
</code></pre>
<p>Com tudo certo , nossa API irá rodar na porta 3333 ou outra de sua preferência ,basta adequar para sua aplicação .</p>
</div>


