// Funció JsonToXML que esperi un json com aquest
//{
//  "id": 1,
//  "nom": "Anna",
//  "edat": 20,
//  "curs": "DAW"
//}


function toXML(){
    // Declaració del text rebut
    let text = '{"id":1,"nom":"Anna","edat":20,"curs":"DAW"}';
    
    // Filtrem text
    text = text.replace("{", "");
    text = text.replaceAll("\"", "");
    text = text.replace("}", "");

    //Declaració d'array
    let valors = [];
    valors = text.split(",");

    let xml = ""

    xml += "<arrel>";
    for (let i = 0; i<valors.length; i++){

        let valor = valors[i].split(":");

        xml += "<";
        xml += valor[0];
        xml += ">";

        xml += valor[1],

        xml += "</";
        xml += valor[0];
        xml += ">";

    }
    xml += "</arrel>";
    
    console.log(xml);  
}

toXML();