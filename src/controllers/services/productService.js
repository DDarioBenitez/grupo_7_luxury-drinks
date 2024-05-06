const db = require("../../database/models");




const findAllProducts = async () => {
    try {
        const products = await db.Product.findAll();
        return products;
    } catch (err) {
        console.log('Error al obtener los productos', err);
        throw new Error('Error al obtener los productos')
    }
};

const getProductById = async (id) => {
    try {
        const product = await db.Product.findByPk(id);
        return product;
    } catch (err) {
        console.log('Error al obtener el producto', err);
        throw new Error('Error al obtener el producto', err)
    }
};

const saveProduct = async (product) => {
    try {
        const newProduct = await db.Product.create(product);
    } catch (err) {
        console.log('Error al crear el producto', err);
        throw new Error('Error al crear el producto', err)
    }
}

const updateProduct = async (id, updatedProduct) => {
    try {
        await db.Product.update(updatedProduct, { where: { id } });
        return db.Product.findByPk(product.id)
    } catch (err) {
        console.log('Error al actualizar el producto', err);
        throw new Error('Error al actualizar el producto', err)
    }
}

const patchProduct = async (id, updateData) => {
    try {
        await db.Product.update(updateData, { where: { id } });
        return db.Product.findByPk(product.id)
    } catch (err) {
        console.log('Error al actualizar el Producto', err);
        throw new Error('Error al actualizar el Producto', err)
    }
}

const deleteProduct = async (id) => {
    try {
        await db.Product.destroy({ where: { id } })
    } catch (err) {
        console.log('Error al borrar el Producto', err);
        throw new Error('Error al borrar el Producto', err)
    }
}

module.exports = {
    findAllProducts,
    getProductById,
    saveProduct,
    updateProduct,
    patchProduct,
    deleteProduct
}