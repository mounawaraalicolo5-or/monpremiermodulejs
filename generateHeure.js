//

//

function monHeure(){
    let date = new Date();
    let heure = date.getHours();

    console.log("###Coucou, je passe a la TV a", heure, "heures###");

    return heure;
}
//
export default {
    monHeure
};
