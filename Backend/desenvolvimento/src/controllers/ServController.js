// const axios = require('axios');
// Importando Schema
// const Dev = require('../models/Dev');

module.exports = {
  store(req, res) {

    const totalContratos = parseInt(req.body.contratoMiniDolar)
      + parseInt(req.body.contratoMiniIndice);

    const gastoTotal = parseFloat(req.body.iss)
      + parseFloat(req.body.corretagem)
      + parseFloat(req.body.taxaBmf)
      + parseFloat(req.body.taxaRegistroBmf);

    const {
      data,
      ganho,
      contratoMiniIndice,
      contratoMiniDolar,
      iss,
      corretagem,
      taxaRegistroBmf,
      taxaBmf,
      taxaOutras
    } = req.body;

    const ganhoLiquido = parseFloat(ganho) - gastoTotal;

    const result = `
    Data: ${data}
    Ganho: ${ganho}
    Contrato Mini Indice: ${contratoMiniIndice}
    Contrato Mini Dolar: ${contratoMiniDolar}
    Total de Contratos: ${totalContratos}
    ISS: ${iss}
    Taxa Corretagem: ${corretagem}
    Taxa Registro BM&F: ${taxaRegistroBmf}
    Taxa BM&F: ${taxaBmf}
    Outras Taxas: ${taxaOutras}
    Gasto Total: ${gastoTotal}
    Liquido: ${ganhoLiquido}
    `;

    return res.send( result );
  },
};
