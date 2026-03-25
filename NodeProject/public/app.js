
const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {

  const text = document.getElementById("input").value;

  // Fem una petició HTTP al servidor (Express)
  // fetch() envia una request al backend
  const res = await fetch("/convert", {
    // Tipus de petició
    // POST = enviem dades al servidor
    method: "POST",
    // Capçaleres HTTP
    // Indiquem que estem enviant dades en format JSON
    headers: {
      "Content-Type": "application/json"
    },

    // Cos de la petició (les dades que enviem)
    // Convertim l’objecte JS a text JSON
    body: JSON.stringify({ data: text })
  });

  // El servidor respon amb JSON
  // Convertim la resposta a objecte JavaScript
  const json = await res.json();
  
  // Mostrem el resultat a la textarea de sortida
  document.getElementById("output").value = json.result;
});

// Botón convertir JSON a XML
const btnToXML = document.getElementById("btnToXML");

btnToXML.addEventListener("click", async() => {
  let text = document.getElementById("input").value;

  //Avisme al servidor '/jsonToXML'
  const res = await fetch("/jsonToXml", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // parseamos el texto del input para enviar JSON válido
      body: JSON.stringify({ data: JSON.parse(text) })
  });

  const json = await res.json();
  document.getElementById("output").value = json.result;

  /*
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
  

  // Mostrar resultat
  document.getElementById("output").value = xml;*/
});

const btnToJson = document.getElementById("btnToJson");

  btnToJson.addEventListener("click", async () => {
    const text = document.getElementById("input").value;

      //Avisme al servidor '/xmlToJson'
      const res = await fetch("/xmlToJson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: text })
      });

      const json = await res.json();
      document.getElementById("output").value = json.result;

  });

const btnPoke = document.getElementById("btnPoke");
btnPoke.addEventListener("click", async () => {
  const text = document.getElementById("input").value;

  const res = await fetch("/convertPokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data: text })
  });

  const json = await res.json();
  console.log(json);

  //Crear imagen
  let imatge = document.createElement("img");
  imatge.src = json.result.sprites.front_shiny;
  document.body.appendChild(imatge);

  //Para escribir en el output
  document.getElementById("output").textContent = JSON.stringify (json.result.abilities);
  });
