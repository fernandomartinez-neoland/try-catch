const saludo="hola Cesar"
export function try_catch(){
    // el try catch es una especie de boton de emergencia, sirve para capturar cualquier tipo de error inesperado, evitando asi que tu aplicacion estalle
    // el try consiste en permitir que el codigo funcione con normalidad y en caso de que algo falle se interrumpira el flujo y lo mandara al catch, omitiendo el resto de lineas de codigo que puedan existir debajo de la linea que tiene el error
    try{
        console.log(saludo)
        console.log("como saludo SI EXISTE entonces esto saldra en consola")
    }catch(e){
        // el catch se escribe usando los parentesis y colocando ahi un parametro que capturara los errores (en este caso usamos la letra "e" que simbolisa al error, puede llamarse como ustedes quieran pero sean practicos con este tema ya que otros compañeros deben entender que hace y para que existe cada variable que ustedes hagan)
        // podemos usar ese parametro "e" para verificar que error hay y con esto controlar el comportamiento de nuestra aplicación.
        console.log("el ERROR es: ",e)
    }
} 