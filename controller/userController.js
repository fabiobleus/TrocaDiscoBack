import userModel from "../model/userModel.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, phone, password, cpf, birthdate,address,  cep, city,uf } = req.body;
        const userCreate = await userModel.create({ name, email, phone, password, cpf, birthdate,address,  cep, city,uf });
        res.status(200).json({ userCreate: userCreate._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const alterUser = async (req, res) => {
    try {
        const { _id, name, email, phone, password, cpf, birthdate,address,  cep, city,uf } = req.body;
        const userAlter =  await userModel.updateOne({ name, email, phone, password, cpf, birthdate,address,  cep, city,uf });
        res.status(201).json({ userAlter:userAlter._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getUser = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await userModel.findOne({ email: email });
        res.status(200).json({ user: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const loginUser = async (req, res) => {
    // try {
    //     const { email, password } = req.body;
    //     const user = await userModel.findOne({ email, password });
    //     res.status(200).json({ user });
    // } catch (error) {
    //     res.status(500).json({ error: error.message });
    // }
try {
    if (!email || !password) {
        return response.status(400).json({ message: "Invalid request body" });
      }
    
      const userLogin = await User.findOne({ email, password });
      if (!userLogin) {
        return response.status(404).json({ message: "User or password invalid" });
      }
      else if ((userLogin.email != request.body.email) || (userLogin.password != request.body.password)) {
        return response.status(404).json({ message: "User or password invalid 88" });
    
      };
      return response.status(200).json(userLogin._id);
    
}
catch (error) {
        res.status(500).json({ error: error.message });
    }
};
