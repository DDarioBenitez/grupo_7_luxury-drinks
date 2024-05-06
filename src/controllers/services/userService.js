const db = require("../../database/models");

const findAll = async () => {
    try {
        const users = await db.User.findAll();
    } catch (err) {
        console.log('Error al obtener los usuarios', err);
        throw new Error('Error al obtener los usuarios')
    }
}

const findById = async (id) => {
    try {
        const user = await db.User.findByPk(id);
        return user
    } catch (err) {
        console.log('Error al obtener el usuario', err);
        throw new Error('Error al obtener el usuario')
    }
}

const findByEmail = async (email) => {
    try {
        const user = await db.User.findOne({ where: { email: email } });
        return user
    } catch (err) {
        console.log('Error al obtener el usuario', err);
        throw new Error('Error al obtener el usuario')
    }
}

const updateUser = async (id, updatedUser) => {
    try {
        const user = await db.User.update(updatedUser, { where: { id: id } });
        return user
    } catch (err) {
        console.log('Error al actualizar el usuario', err);
        throw new Error('Error al actualizar el usuario')
    }
}

const patchUser = async (id, updateData) => {
    try {
        const user = await db.User.update(updateData, { where: { id: id } });
    } catch (err) {
        console.log('Error al actualizar el usuario', err);
        throw new Error('Error al actualizar el usuario')
    }
}

const saveUser = async (user) => {
    try {
        await db.User.save(user)
        return db.User.findByEmail(user.email)
    } catch (err) {
        console.log('Error al crear el usuario', err);
        throw new Error('Error al crear el usuario')
    }
}

const deleteUser = async (id) => {
    try {
        await db.User.destroy({ where: { id } })
    } catch (err) {
        console.log('Error al borrar el usuario', err);
        throw new Error('Error al borrar el usuario')
    }
}

module.exports = {
    findAll,
    findById,
    findByEmail,
    updateUser,
    patchUser,
    saveUser,
    deleteUser
}