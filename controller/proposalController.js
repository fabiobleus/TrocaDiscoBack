import proposalModel from "../model/proposalModel.js";

export const createProposal = async (req, res) => {
    try {
        const { idAdvert, idAdvertUser, idUserProposal, idAdvertProposal, description } = req.body;
        const proposalCreate = await proposalModel.create({ idAdvert, idAdvertUser, idUserProposal, idAdvertProposal, description });
        res.status(200).json({ proposalCreate: proposalCreate._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const alterProposal = async (req, res) => {  
    try {
        const { _id, idAdvert, idAdvertUser, idUserProposal, idAdvertProposal, description } = req.body;
        const proposalAlter = await proposalModel.updateOne({ idAdvert, idAdvertUser, idUserProposal, idAdvertProposal, description });
        res.status(201).json({ proposalAlter: proposalAlter._id }); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteProposal = async (req, res) => {         
    try {
        const { _id } = req.body;
        const proposalDelete = await proposalModel.deleteOne({ _id });
        res.status(200).json({ proposalDelete: proposalDelete._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllProposal = async (req, res) => {
    try {                   
        const allProposal = await proposalModel.find();         
        res.status(200).json({ allProposal });
    } catch (error) {
        res.status(500).json({ error: error.message }); 
        