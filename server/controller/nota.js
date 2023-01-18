import { db } from '../db.js';

export const getNotas = (_,res) =>{
    const query = "SELECT * FROM notas";
    
    db.query(query, (err, data) =>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const addNotas = (req, res) =>{
    const query = "INSERT INTO notas(`titulonota`, `textonota`) VALUES(?)";

    const values =[
        req.body.titulonota,
        req.body.textonota,
    ]

    db.query(query, [values],(err) =>{
        if (err) return  res.json(err);

        return res.status(200).json("Usuário criado com sucesso!");
    })
}

export const updateNotas = (req, res) => {
    const q = "UPDATE notas SET `titulonota` = ?, `textonota` = ? WHERE `idnota` = ?";

    const values = [
        req.body.titulonota,
        req.body.textonota,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso!");
    });
};

export const deleteNota = (req, res) => {
    const q = "DELETE FROM notas WHERE `idnota` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso!");
    });
};