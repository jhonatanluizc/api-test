const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano4 = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    var str_data = dia + '/' + (mes + 1) + '/' + ano4;
    var str_hora = hora + ':' + min + ':' + seg;
    var dataAtual = ('Hoje é ' + str_data + ' às ' + str_hora);
    res.send(JSON.stringify(dataAtual));
});

app.get("/SaoPaulo", function (req, res) {
    var data = new Date();
    data = data.toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo' });
    res.send(JSON.stringify(data));
});

app.listen(port, () => {
    console.info("Aplicação rodando em http://localhost:3000");
});
