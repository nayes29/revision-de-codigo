const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username,) { //la funcion no esta declarada como async
  $n.textContent = 'cargando...';
  const response = await 
fetch(`${usersEndpoint}/${username}`); 
  console.log(response);
  const data = await response.json(); // la variable data no esta definida en la funcion displayUser por lo que en console.log(data) dara error
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //la variable n no esta definida 
}

displayUser('stolinski',usersEndpoint).catch(handleError); // falta agregar el usersEndpoint