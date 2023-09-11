// Functionalities for the product section

exports.create = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for creating Products"})
};

exports.read = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for reading Products"})
};

exports.delete = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for deleting Products"})
};

exports.update = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for updating Products"})
};
