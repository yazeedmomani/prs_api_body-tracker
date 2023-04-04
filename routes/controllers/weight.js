const Weight = require("./models/weight");

exports.createWeight = (request, response) => {
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

exports.getWeight = async (request, response) => {
  try {
    const data = await Weight.find({}, { __v: 0 });

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

exports.deleteWeight = (request, response) => {
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
