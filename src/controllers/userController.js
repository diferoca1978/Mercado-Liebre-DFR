const fs = require("fs");
const path = require("path");

const users = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../dataBase/user.json"))
);

module.exports = {
  login: (req, res) => {
    return res.render("login");
  },
  register: (req, res) => {
    return res.render("register");
  },
  processRegister: (req, res) => {
    const user = {
      id: users.length + 1, // With this line we add a new id.
      nombre: req.body.nombre,
      usuario: req.body.usuario,
      foto: req.body.foto,
      nacimiento: req.body.nacimiento,
      direccion: req.body.direccion,
      perfil: req.body.perfil,
      intereses: req.body.intereses,
      contrasenia: req.body.contrasenia,
    };

    fs.writeFileSync(
      path.resolve(__dirname, "../dataBase/user.json"),
      JSON.stringify([...users, user], null, 2)
    );

    console.log(req.body);
    // Through the lines above we are pass as a first parameter of (fs.writeFileSync) that write the data onto json file, then as a second parameter we indicate to transform the data obtained to json data format.

    return res.redirect("/");
  },
};
