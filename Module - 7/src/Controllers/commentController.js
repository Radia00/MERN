// Functionalities for the comment section

exports.create = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for creating comments"})
};

exports.read = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for reading comments"})
};

exports.delete = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for deleting comments"})
};

exports.update = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for updating comments"})
};
