import productModel from "../model/productModel.js";

export const productCreate = async (req, res) => {
    try {
        const { idUser, title, description, interest, type, category, status, photo } = req.body;
        const product = await productModel.create({ idUser, title, description, interest, type, category, status, photo });
        res.status(200).json({ productInsert: product._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const productUpdate = async (req, res) => {
    try {
        const { _id, idUser, title, description, interest, type, category, status, photo } = req.body;
        const product = await productModel.updateOne({ idUser, title, description, interest, type, category, status, photo });
        res.status(201).json({ product: product._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const productDelete = async (req, res) => {
    try {
        const { _id } = req.body;
        const product = await productModel.deleteOne({ _id });
        res.status(200).json({ product: product._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const productGetAll = async (req, res) => {
    try {
        const product = await productModel.find();
        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const productGet = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findOne({ _id: id });
        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const productFindName = async (req, res) => {
    try {
        const { productName } = req.params;
        
        const product = await productModel.find({
            title: {
                $regex: productName,
                $options: "i"
            }
        });
        res.status(200).json({ product: product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const productFindUser = async (req, res) => {
    try {
        const { idUser } = req.params;
        
        const product = await productModel.find(iduser.idUser, idUser);
        res.status(200).json({ product: product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};