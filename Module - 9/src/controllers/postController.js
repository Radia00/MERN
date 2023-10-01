// Functionalities for the product section

exports.create = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for creating  POST"})
};

exports.read = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for reading  POST"})
};

exports.delete = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for deleting  POST"})
};

exports.update = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for updating  POST"})
};
