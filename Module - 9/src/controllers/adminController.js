// Functionalities for the comment section

exports.create = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for creating ADMIN"})
};

exports.read = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for reading ADMIN"})
};

exports.delete = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for deleting ADMIN"})
};

exports.update = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for updating ADMIN"})
};
