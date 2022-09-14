# RepoProvas
<div align="center">
	<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/memo_1f4dd.png">
</div>


<p align = "center">
   <img src="https://img.shields.io/badge/author-NinaS23-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/NinaS23/repoProvas?color=4dae71&style=flat-square" />
</p>


<div align="center">
  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/JWT-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" height="30px"/>
  
</div>

<!-- Getting Started -->

# Getting Started

To clone the project, run the following command:

```git
git clone https://github.com/NinaS23/repoProvas.git
```

Then, navigate to the project folder and run the following command:

```git
npm install
```

Finally, start the server:

```git
npm start
```

## Routes 

### [users](#users) _`users`_

- POST _`/sign-up`_
- POST _`/sign-in`_


### [tests](#tests) _`tests`_

- POST _`/test`_
- GET _`/tests`_


<!-- REQUESTS -->
### &nbsp; ☰ &nbsp; Request

###### Body _`/sign-up`_


```json
{
  "email": "na@gmail.com",
  "password": "12345",
  "passwordRef":"12345"
}
```


###### Body _`/sign-in`_


```json
{
  "email": "na@gmail.com",
  "password": "12345"
}
```

###### Body _`/test`_ (autenticada)


```json
{
  "name": "Prática e Projeto sobre CSS e HTML",
  "pdfUrl": "https://github.com/NinaS23?tab=repositories",
  "discipline":"HTML e CSS",
  "category": "Projeto,Prática",
  "teacher": "Diego Pinho"
}
```


