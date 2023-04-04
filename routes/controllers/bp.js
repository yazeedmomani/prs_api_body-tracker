const BP = require("./models/bp.js");

exports.createBP = async (request, response) => {
  try {
    const data = await BP.create({
      date: request.body.date,
      time: request.body.time,
      high: request.body.high,
      low: request.body.low,
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

exports.deleteBP = async (request, response) => {
  try {
    await BP.deleteOne({ _id: request.params.id });

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
