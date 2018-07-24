const btn = document.querySelector('button');
const img = document.getElementById('photo');
const url = 'https://dog.ceo/api/breeds/image/random';

const getJSON = (url, callback) => {
  // Crear instancia del objeto XMLHttprequest
  const request = new XMLHttpRequest();

  request.onload = () => {
   //Readystate metodo de la llamada AJAX, 4 es porque la respuesta está lista 
   //y 200 es OK
    if(request.readyState === 4 && request.status === 200) {
      callback(request.responseText);
    }  
  }
  //open
  request.open('GET', url);
  //send
  request.send();
};

btn.addEventListener ('click', () => {
  getJSON (url, response => {
    let doggie = JSON.parse(response).message;
    console.log(doggie);
    img.src = doggie;
  })
});