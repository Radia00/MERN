// Functionalities for the message section

exports.create = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for creating messages"})
};

exports.read = async (req, res) => {
  res.status(200).json({status:"success", data: "This function is for reading messages"})
};

exports.delete = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for deleting messages"})
};

exports.update = async (req, res) => { 
  res.status(200).json({status:"success", data: "This function is for updating messages"})
};
