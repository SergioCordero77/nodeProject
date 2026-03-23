//<?xml version="1.0" encoding="UTF-8"?>
//<alumne>
//  <id>1</id>
//  <nom>Anna</nom>
//  <edat>20</edat>
//  <curs>DAW</curs>
//</alumne>

function toJson() {
    // Declaració del text rebut
    let text = `<?xml version="1.0" encoding="UTF-8"?>
                <alumne>
                    <id>1</id>
                    <nom>Anna</nom>
                    <edat>20</edat>
                    <curs>DAW</curs>
                </alumne>`;
    
    let index = '<?xml version="1.0" encoding="UTF-8"?>';            

    text = text.replaceAll(index, "");
    text = text.replaceAll(" ", "");
    text = text.replaceAll("\n", "");

    let obertura = [];
    let tancament = [];

    for (let i=0; i<text.length; i++){
        let c = text.charAt(i);

        //Guardem les posició de '<'
        if (c === '<'){
            obertura.push(i);
        }
        //Guardem la posició de '>'
        else if(c === '>'){
            tancament.push(i);
        }
    }

    //Obrim json
    let json = "{";

    for (let i = 1; i < obertura.length - 1; i += 2) {

        // nom etiqueta (< >)
        let key = text.substring(obertura[i] + 1, tancament[i]);

        // valor entre > y <
        let value = text.substring(tancament[i] + 1, obertura[i + 1]);

        json += `"${key}":"${value}",`;
    }

    // Treiem l'última coma y tanquem el JSON
    if (json.endsWith(',')) {
        json = json.slice(0, -1);
    }

    //Tanquem el json
    json += "}";
    
    console.log(json);
}

toJson();