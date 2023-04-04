const Weight = require("./models/weight");

exports.createWeight = async (request, response) => {
  try {
    const data = await Weight.create({
      date: request.body.date,
      weight: request.body.weight,
    });

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

exports.deleteWeight = async (request, response) => {
  try {
    await Weight.deleteOne({
      _id: request.params.id,
    });

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
