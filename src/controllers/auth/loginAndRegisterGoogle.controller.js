const db = require("../../database/models");

module.exports = async (req, res) => {
    try {

        const {user: {_json, provider} } = req.session.passport
        const {sub, given_name, family_name, picture, email} = _json;

        const [user, isCreate] = await db.User.findOrCreate({
        where:{
            socialId: sub
        },
        default: { 
            socialId: sub,
            provider,
            name: given_name,
            surname:family_name,
            email,
            avatar:picture
        },
    })

    req.session.userLogin = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      avatar: user.avatar,
      role: "REGULAR" // user.role.name,
    }
    
    res.cookie("userLogin", req.session.userLogin, { maxAge: (60000 * 10 ) * 6})

    res.redirect("/");
  } catch (error) {
    res.json(error);
  }
};