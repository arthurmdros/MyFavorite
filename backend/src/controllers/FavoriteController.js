const connection = require('../database/connection');

module.exports = {
    async index (req,res){
        const { page = 1 } = req.query;

        const [ count ] = await connection('favorites').count();

        const favorite = await connection('favorites')
        .join('users', 'users.id', '=', 'favorites.user_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'favorites.*',            
            'favorites.title',
            'favorites.description',
            'favorites.url'
        ]);

        res.header('Total-Count', count['count(*)']);
        return res.json(favorite);
    },

    async create (req,res){
        const { title, description, url } = req.body;
        const user_id = req.headers.authorization;
       

        const [id] = await connection('favorites').insert({            
            title,
            description,
            url,
            user_id,
        });

        return res.json({ id });
    },

    async delete (req,res){
        const { id } = req.params;
        const user_id = req.headers.authorization;

        const favorite = await connection('favorites')
            .where('id', id)
            .select('user_id')
            .first();

        if (favorite.user_id !== user_id){
            return res.status(401).json({ error: "Operação não permitida!"});
        }

        await connection('favorites').where('id', id).delete();

        return res.status(204).send();
    },

    async update (req,res){
        const { id } = req.params;

        const { title, description, url } = req.body;

        await connection('favorites').where('id', id)
        .update({
            title,
            description,
            url,
        })

        return res.json({ id });
    }
}