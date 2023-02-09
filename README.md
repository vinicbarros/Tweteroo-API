<div align="center"><img src="https://i.imgur.com/LCHMDbI.png"></img></div>
<hr>
<h2 align=center>Tweteroo - My Frist Api!</h2>
<h3 align=center>Back-End Project</h3>
<hr>
<h4 align=center>This is the first api that i made in Driven full stack web development bootcamp. It's based on the famous web site Twitter!</h4>
<h4 align=center>In this project i Node with Express to create the routes.</h4>
<br>
<div align=center style="display:flex; justify-content: center; gap:5%">
    <img src="https://i.imgur.com/P02vAzP.png">
</div>

## Features

- Log in with name and picture url
- Post a message
- Get all the messages
- Get messages from specific user
- Load more messages

## API Documentation

### User

* Sign Up
  
  ```http
  POST /sign-up
  ```

  ##### Request:

  | Body       | Type     | Description                     |
  | :--------- | :------- | :------------------------------ |
  | `username` | `string` | **Required**. valid username    |
  | `avatar`   | `string` | **Required**. valid picture url |

### Tweets

* Post a new tweet

  ```http
  POST /tweets
  ```

  #### Request body:

  ```json
  {
    "tweet": "string"
  }
  ```

  #### Headers:

  | Name   | Description            |
  | :----- | :--------------------- |
  | `user` | **Required**. username |

* Get all tweets

  ```http
  GET /tweets
  ```

  #### Response:

  ```json
  [
    {
      "username": "string",
      "avatar": "string",
      "tweet": "string"
    },
    {
      "username": "string",
      "avatar": "string",
      "tweet": "string"
    }
  ]
  ```

* Get tweets from specific user

  ```http
  GET /tweets/:username
  ```

  #### Path params:

  | Parameter  | description |
  | :--------- | :---------- |
  | `username` | username    |

  #### Response:

  ```json
  [
    {
      "username": "string",
      "avatar": "string",
      "tweet": "string"
    },
    {
      "username": "string",
      "avatar": "string",
      "tweet": "string"
    }
  ]
  ```
  
 ### Built with

![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

### How to run

Clone the project

```bash
  git clone https://github.com/vinicbarros/Tweetero-API.git
```

Go to the project directory

```bash
  cd Tweetero-API
```

Install dependencies

```bash
  npm install
```

Go to src directory

```bash
  cd src
```

Start the server

```bash
  node index.js
```

## Contact

Feel free to contact me in Linkedin!

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/ovinibarros/
