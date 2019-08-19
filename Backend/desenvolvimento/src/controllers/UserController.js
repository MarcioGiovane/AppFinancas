/**
 * Autenticação (token):
 *
 * [x] Fase Desenvolvimento: Sem autenticação
 * [ ] Fase Homologação/Produção: Com autenticação
 *
 */

 module.exports = {
  getAll(req, res) {
    // (get) localhost:3000/user

    // 1. Lista todos os usuarios.
    return res.send('user: Mostra todos os usuários');
  },

  find(req, res){
    // (get) localhost:3000/user/:id
    const id = req.params.id;

    // 1. Buscar na base de dados

    // 2. Caso exista exibe, senão exibe erro.

    // 3. Exibe resultado.
    return res.send(`user: Exibe o usuario id: ${id}`);
  },

  save(req, res){
    // (post) localhost:3000/user

    // 1. Recebe os dados
    const {
      tipoPessoa,
      nome,
      cpf,
      email,
      password,
      corretora,
      dataNascimento,
      tipoInvestimento
    } = req.body;

    // 2. Se tudo estiver ok, salva no banco de dados

    // 3. Exibe resultado.
    const result =
    {
      tipoPessoa,
      nome,
      cpf,
      email,
      password,
      corretora,
      dataNascimento,
      tipoInvestimento
    };

    return res.json( result );

  }
};
