## About TX Blog Project

An application used by TX engineers to check my knowledge while reading some blog posts :) Built with Node, Express And React.

The project consists of two parts (Server and Client). Each part has its own folder where you can find implementation!

---
## Features
* List all Blog Posts with titles and number of comments
* Select one blog to see the title, full text and all comments
* Create/Update/Delete comments
### 
---
## How to run App?

Clone this repository and run:
```bash
$ docker-compose up --build
```

After the build is completed open `localhost:3000` in your default browser.

---

## How to run tests?
```bash 
$ docker-compose run --rm blog_server npm test
```

---

## Additional Documentation
You can find detailed api docs on the following [link](./server/README.md)