const BP = require("./models/bp.js");

exports.createBP = (request, response) => {
  try {
    response.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getBP = async (request, response) => {
  try {
    const data = await BP.find({}, { __v: 0 });
    console.log(data);
    response.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteBP = (request, response) => {
  try {
    response.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    response.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
