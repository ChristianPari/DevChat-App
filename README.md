# DevChat App
A React based Frontend application that utilizes CSS and Bootstrap for styling, and Socket.io for communication over a server.

## Technologies
  - React
  - Node.js
  - Express
  - Socket.io
  - HTML
  - CSS
  - Bootstrap4

## Get It Up and Running
Unfortunately I was unable to get this application deployed on Heroku or GitHub pages, there is something happening within the Socket.io not connecting to the server and I've yet to find a fix. That being said, cloning this repo and running as is off your localhost displays its abilities. To show multi-sockets at work, you can connect to your localhost at port 3000 on mulitple different devices and communicate smoothly back and fourth.

### Clone Repo
Once cloned, ensure you are within the project directory in the terminal and run...

### `npm install`
This will install all packages within the main directory. Once complete run one additional command...

### `npm run postinstall`
This will go into the server subdirectory and install the necessary packages within its package.json. Next you just have to run...

### `npm start`
To have the program start the server and the React development server at the same time which will also open the window of the React application. If the window does not appear simply open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Challenges Faced
  - Working with Socket.io was a very confusing process, even now my knowledge of it could be a lot better but just have the practice and understanding of the methods and processes feels very exciting.
  - The biggest challenge (which I have yet to overcome) is making this application public. I have done hours and hours of research and testing, rewriting code and yet nothing seems to prove profitable. Breaking for it for now to foucs on other resume projects but planning on coming back again...
  - Bootstrap was another difficult grasp. I can say now I am familiar with it and if asked of me I could research and come up with a layout and styling along with CSS that can work but it has not became my favorite tool (seeing more and more of why I like Java so much, I'm definitely a backend dev)

## Overall Notes
Working on this project opened my eyes to the process of creating web sockets to allow communications across the world at a single domain. It truly is amazing to build out (simple in scale) something that you have used so many times on other sites, for example like communicating with a customer service rep on MetroPCS website via online chat.

### Project Notes
- Sockets
  - Provides real-time transport and communication between two programs, client and server
  - Can be used to implement any kind of communcation / not restricted to browsers or HTTP protocol
- Socket: a fundamental class for interacting with the server
  - .on("EVENT"): registers a new handler for the given event
  - .emit(): emits an event to the socket, [Emmit Cheat Sheet](https://socket.io/docs/v3/emit-cheatsheet/)
  - .broadcast.to(): sends a message to everyone except for the socket that starts it