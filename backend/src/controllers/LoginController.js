const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { login, senha } = req.body;

        const user = await connection('users')
            .where('login', login)
            .andWhere('senha',senha)
            .select('*')
            .first();                     
            
        if(!user){
            return res.status(400).json({ error: 'Nenhum usuário cadastrado com esse login e/ou senha.'});
        }

        return res.json(user);

    }
};