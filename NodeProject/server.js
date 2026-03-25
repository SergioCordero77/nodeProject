const express = require("express");
const convert = require("xml-js");
const fetch = require("node-fetch");

const app = express();
const PORT = 3000;

// permet rebre JSON
app.use(express.json());

// servir fitxers estàtics (HTML, JS, CSS)
app.use(express.static("public"));


// endpoint d'exemple
app.post("/convert", (req, res) => {
  const { data } = req.body;

  const result = data.toUpperCase(); // prova simple

  res.json({ result });
});

// json to XMl
app.post("/jsonToXml", (req, res) => {
    const jsonData = req.body.data; // el JSON enviat desde frontend

    try {
        const xml = convert.json2xml(jsonData, {compact: true, spaces: 4});
        res.json({ result: xml });
    } catch (error) {
        res.status(400).json({ error: "JSON inválido" });
    }
});

// XML to json
app.post("/xmlToJson", (req, res) => {
    const xmlData = req.body.data;

    try {
        const json = convert.xml2json(xmlData, {compact: true, spaces: 4});
        res.json({ result: json });
    } catch (error) {
        res.status(400).json({ error: "XML inválido" });
    }
});

app.listen(PORT, () => {
  console.log(`Servidor a http://localhost:${PORT}`);
});

// endpoinnt d'exemple
  app.post("/convertPokemon", async (req,res) => {
    const { data } = req.body; // nom del pokemon

    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${data}`);
    const pokeJson = await response.json();

    const result = pokeJson;

      res.json({ result: pokeJson });
    });