// Functionalities for the Blog section

exports.create = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for creating USER"})
};

exports.read = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for reading USER"})
};

exports.delete = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for deleting USER"})
};

exports.update = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for updating USER"})
};
