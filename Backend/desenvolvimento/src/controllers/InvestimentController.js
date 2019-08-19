/**
 * Autenticação (token):
 *
 * [x] Fase Desenvolvimento: Sem autenticação
 * [ ] Fase Homologação/Produção: Com autenticação
 *
 */

module.exports = {
  getAll(req, res) {
    // (get) localhost:3000/investment

    // 1. Lista todos os investimentos.
    return res.send('investment: Mostra todos os investimentos');

  },

  save(req, res) {
    // (post) localhost:3000/investment
    const totalContratos = parseInt(req.body.contratoMiniDolar) +
      parseInt(req.body.contratoMiniIndice);

    const gastoTotal = parseFloat(req.body.iss) +
      parseFloat(req.body.corretagem) +
      parseFloat(req.body.taxaBmf) +
      parseFloat(req.body.taxaRegistroBmf);

    const {
      fkPessoa,
      dataTransacao,
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
      Pessoa: ${fkPessoa}
      Data: ${dataTransacao}
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

    return res.send(result);
  },
};
