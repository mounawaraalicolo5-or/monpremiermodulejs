//

//

function monHeure(){
    let date = new Date();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();

    console.log("###Coucou, je passe a la TV a", heure, "heures###");
     
    return {
        heure,
        minute,
        seconde
    };
}
//
export default {
    monHeure
};
