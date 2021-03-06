// console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS GRID MEDIA QURIES</title>
      <style>
          .container {
              display: grid;
              grid-gap: 1rem;
              grid-template-areas:
                  'navbar navbar navbar navbar'
                  'section section section aside'
                  'footer footer footer footer';
          }
          .bdr {
                  border: 2px solid black;
                  padding: 10px 23px;
                  background-color: white;
              }
          nav{
              grid-area: navbar;
          }
          section{
              grid-area: section;
          }
          aside{
              grid-area: aside;
          }
          footer{
              grid-area: footer;
              text-align: center;
          }
  
          @media only screen and (max-width: 300px) {
              body {
                  background-color: red;
              }
              .container{
                  grid-template-areas:
                      'navbar navbar navbar navbar'
                      'section section section section'
                      'aside aside aside aside'
                      'footer footer footer footer';
              }
              aside{
                  display: none;
              }
              span{
              display: block;
              text-align: center;
          }
          }
                
  
          @media only screen and (min-width: 300px) and (max-width:500px) {
              body {
                  background-color: yellow;
              }
              .container{
                  grid-template-areas:
                      'navbar navbar navbar navbar'
                      'section section section section'
                      'footer footer footer footer';
              }
              aside{
                    display: none;
                }
                span{
              display: block;
              text-align: center;
          }
  
          }
  
          @media only screen and (min-width: 500px) and (max-width:800px) {
              body {
                  background-color: green;
              }
              .container{
                  grid-template-areas:
                      'navbar navbar navbar navbar'
                      'section section section section'
                      'aside aside aside aside'
                      'footer footer footer footer';
              }
              span{
              display: block;
              text-align: center;
          }
          }
          @media only screen and (min-width: 800px) {
              body {
                  background-color: purple;
              }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <nav class="bdr">
              <span>HOME</span>
              <span>ABOUT</span>
              <span>SERVICE</span>
              <span>CONTACT</span>
          </nav>
          <section class="bdr"> <h2>learn css in urdu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quasi deserunt impedit, error eligendi adipisci alias nihil quia amet velit aspernatur doloremque aut architecto! Quibusdam, sequi tempora reiciendis quos facilis veniam, ipsum soluta magni, quia pariatur exercitationem libero ratione autem cupiditate. Minima, maiores quisquam vero fugiat, quaerat quo cum molestiae cupiditate non, earum soluta odio atque necessitatibus dicta ratione nobis fugit repudiandae eum. Enim debitis nihil voluptatem necessitatibus blanditiis voluptatum repudiandae! Aliquid laborum eius voluptate reprehenderit odio a et officiis eos quibusdam earum! Magni amet quasi nulla, itaque distinctio ullam pariatur dignissimos voluptatem illo consequatur natus voluptate beatae nobis quisquam suscipit iure rem, harum incidunt. Quidem laborum eaque veniam dolor iure? Ratione dicta minima velit vel atque. Voluptates dolorum maxime corrupti ipsum perspiciatis distinctio odit voluptate ipsam, sequi, earum voluptatum!</h2></section>
          <aside class="bdr"><h1>More About Us</h1></aside>
          <footer class="bdr">copyright codewithharry 2020</footer>
      </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});