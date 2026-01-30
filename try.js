const saludo="hola Cesar"
export function try_catch(){
    
    try{
        console.log(saludo)
        console.log("como saludo SI EXISTE entonces esto saldra en consola")
    }catch(e){
        console.log("el ERROR es: ",e)
    }
} 