import { Schema, model } from "mongoose";

const ProposalSchema = new Schema({
   idAdvert: {
       type: String,
       required: true   
   },
   idAdvertUser: {
       type: String,
       required: true
   },
   idUserProposal: {
       type: String,
       required: true
   },
   idAdvertProposal: {
    type: String,
    required: true   
},
description: {
    type: String,
    required: true
},
});

const User = model("Proposal", ProposalSchema);

export default Proposal;