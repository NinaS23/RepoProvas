# RepoProvas
<div align="center">
	<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/memo_1f4dd.png">
</div>

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
<h1> Table of Contents </h1>

- [Getting Started](#getting-started)
  - [Models](#models)
    - [ users ](#users-model-user)
   -[Routes](#routes)
     - [users](#users)
   
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

<!-- Models -->

## Models

### users model _`user`_

- `id`: unique identifier for each user. 'serial primary key'
- `email`: The user's email. An email may only be registered once. `text`
- `password`: The user's password. `text`
- `createdAt`: The date and time when the user was created. `timestamp`


## Routes 

### [users](#users) _`users`_

- [sing-un](#---sing-up)
- [Sign In](#---sign-in)


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



