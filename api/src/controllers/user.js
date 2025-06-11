const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');

const Login = (req, res) => {
    const { email, password } = req.body;
    const correctPassword = ((email === "usuario@gmail.com") && (password === "a1b2@b3c4"));

    try {
        if(!correctPassword) return res.status(401).send({message:'E-mail or Password incorrect !'});

        const token = jsonwebtoken.sign(
            {
                id: crypto.randomUUID(),
                name: "Fulano da Silva",
                avatar: "https://cdn-icons-png.flaticon.com/128/1326/1326377.png"
            },
            process.env.SECRET_JWT,
            { expiresIn: "2min" }
        );

        res.status(200).json({ token : token }).end();
    }catch(err) {
        res.status(500).send(err).end();
    }
};

module.exports = {
    Login
}