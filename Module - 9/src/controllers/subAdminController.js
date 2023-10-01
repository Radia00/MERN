// Functionalities for the message section

exports.create = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for creating subAdmin"})
};

exports.read = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for reading subAdmin"})
};

exports.delete = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for deleting subAdmin"})
};

exports.update = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for updating subAdmin"})
};
