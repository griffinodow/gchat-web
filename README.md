[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <h3 align="center">G-Chat API</h3>
  <p align="center">
    G-Chat is a real time web chat
    <br />
    <a href="https://g-chat.griffindow.com">View Website</a>
    ·
    <a href="https://github.com/griffinodow/gchat-web/issues">Report Bug</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project
![Screenshot](./docs/gchat-screenshot.png)

Real-time web chat. Enter the client with your own ID and send messages to anyone else if you know their IDs. Supports giving contact names to IDs and group chats.
### Features
- Socket connection for broadcasting chat messages to relevant chat groups of two or more users.
- Local storage for contacts and messages
- Create, Read, Delete messages in real-time among clients

### Ambition

The goal of this project was to learn real-time communication with sockets through the means of real-time chat messages.

### Built With

* [TypeScript](https://www.typescriptlang.org/)
* [React.js](https://reactjs.org/)
* [Sass](https://sass-lang.com/)
* [Socket.io](https://socket.io/)
* [Docker](https://www.docker.com/)

<!-- GETTING STARTED -->
## Getting Started
### View Demo Site

[g-chat.griffindow.com](https://g-chat.griffindow.com/)

### Develop Locally

```bash
# Serve with hot reload at localhost:5000
npm run dev

# Build for production
npm run build
```

### Deploy Container

Deploy the front-end micro-service container with the following command.

```bash
docker run -p 3000:3000 griffinodow/gchat-web
```

This will allow the app to be served at: http://localhost:3000

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/griffinodow/gchat-web.svg?style=for-the-badge
[contributors-url]: https://github.com/griffinodow/gchat-web/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/griffinodow/gchat-web.svg?style=for-the-badge
[forks-url]: https://github.com/griffinodow/gchat-web/network/members
[stars-shield]: https://img.shields.io/github/stars/griffinodow/gchat-web.svg?style=for-the-badge
[stars-url]: https://github.com/griffinodow/gchat-web/stargazers
[issues-shield]: https://img.shields.io/github/issues/griffinodow/gchat-web.svg?style=for-the-badge
[issues-url]: https://github.com/griffinodow/gchat-web/issues
[license-shield]: https://img.shields.io/github/license/griffinodow/gchat-web.svg?style=for-the-badge
[license-url]: https://github.com/griffinodow/gchat-web/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/griffinodow