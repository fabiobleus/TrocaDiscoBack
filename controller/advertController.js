import advertModel from "../model/advertModel.js";

export const createAdvert = async (req, res) => {
    try {
        const { idUser, title, description, interest, type, category, status, photo } = req.body;
        const advertCreate = await advertModel.create({ idUser, title, description, interest, type, category, status, photo });
        res.status(200).json({ advertCreate: advertCreate._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const alterAdvert = async (req, res) => {
    try {
        const { _id, idUser, title, description, interest, type, category, status, photo } = req.body;
        const advertAlter = await advertModel.updateOne({ idUser, title, description, interest, type, category, status, photo });
        res.status(201).json({ advertAlter: advertAlter._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteAdvert = async (req, res) => {
    try {
        const { _id } = req.body;
        const advertDelete = await advertModel.deleteOne({ _id });
        res.status(200).json({ advertDelete: advertDelete._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllAdvert = async (req, res) => {
    try {
        const allAdvert = await advertModel.find();
        res.status(200).json({ allAdvert });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAdvert = async (req, res) => {
    try {
        const { id } = req.params;
        const advert = await advertModel.findOne({ _id: id });
        res.status(200).json({ advert });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const findAdvert = async (req, res) => {
    try {
        const { nameAdvert } = req.params;
        
        const advert = await advertModel.find({
            title: {
                $regex: nameAdvert,
                $options: "i"
            }
        });
        res.status(200).json({ advert: advert });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};