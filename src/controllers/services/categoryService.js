const db = require("../../database/models/index");

const findAllCategories = async () => {
    try {
        const categories = await db.Category.findAll();
        return categories;
    } catch (err) {
        console.log('Error al obtener las categorias', err);
        throw new Error('Error al obtener las categorias')
    }
};

const findOneCategory = async (categoryName) => {
    try {
        const category = await db.Category.findOne({ where: { name: categoryName } });
        return category;
    } catch (err) {
        console.log('Error al obtener la categoria', err);
        throw new Error('Error al obtener la categoria', err)
    }
}

const saveCategory = async (category) => {
    try {
        const newCategory = await db.Category.create(category);
    } catch (err) {
        console.log('Error al crear la categoria', err);
        throw new Error('Error al crear la categoria', err)
    }
}

const updateCategory = async (id, updatedCategory) => {
    try {
        await db.Category.update(updatedCategory, { where: { id } });
        return db.Category.findByPk(category.id)
    } catch (err) {
        console.log('Error al actualizar la categoria', err);
        throw new Error('Error al actualizar la categoria', err)
    }
}

const deleteCategory = async (id) => {
    try {
        await db.Category.destroy({ where: { id } });
    } catch (err) {
        console.log('Error al borrar la categoria', err);
        throw new Error('Error al borrar la categoria', err)
    }
}

module.exports = {
    findAllCategories,
    findOneCategory,
    saveCategory,
    updateCategory,
    deleteCategory
}