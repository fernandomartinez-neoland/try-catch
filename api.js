export function pokeapi() {
  let jolteon = document.getElementById("jolteon");
  // usamos fetch cuando queremos consultar un servicio externo
  // es seguro que los servicios externos nos responden con promesas con lo cual debemos usar el async para preparar en el then una funcion que pueda recibirla y un await para poder leerla
  fetch("https://pokeapi.co/api/v2/pokemon/jolteon")
    .then(async (response) => {
      // en este caso usamos ".json()" sobre "response" para poder llegar directamente al mensaje de respuesta que buscamos, que en este caso es un json
      // .json() nos devuelve una promesa con toda la informacion en formato json y usamos await para poder leerlo correctamente
      const pokerespuesta = await response.json();

      console.log(pokerespuesta);

      jolteon.src =
        pokerespuesta.sprites.versions["generation-viii"][
          "brilliant-diamond-shining-pearl"
        ].front_default;
    })
    .catch();

  // console.log(consulta)
}
