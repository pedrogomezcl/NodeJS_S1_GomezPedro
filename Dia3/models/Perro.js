const Animal = require("./Animal");

class Perro extends Animal{
    //Sobreescritura de método
    hablar(){
        console.log(`${this.nombre} está ladrando.`);
    }
}
/*
Aquí, Perro hereda de Animal, lo cual
evita la duplicación de código, facilitando
el mantenimiento del mismo y la extensión de
comportamientos con facilidad.
*/
module.exports=Perro;