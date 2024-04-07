const { loadDataUser, saveDataUser } = require("../../data");


module.exports = (req, res)=>{
    const {id} = req.params;
    const {name, email, password} = req.body;
    const users = loadDataUser();
    const usersMapped = users.map(u => {
        if(u.id == +id){
            const userUpdate = {
                ...u,
                name: name.trim(),
                lastname: lastname.trim(), 
                email: email,
                password: password
            }
            return userUpdate
        }
        return u
    })

    saveDataUser(usersMapped)

    res.redirect('/');
}