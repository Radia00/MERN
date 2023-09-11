// Functionalities for the Portfolio section

exports.create = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for creating Portfolio"})
};

exports.read = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for reading Portfolio"})
};

exports.delete = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for deleting Portfolio"})
};

exports.update = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for updating Portfolio"})
};
