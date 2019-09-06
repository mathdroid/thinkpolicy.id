const {
  SHEET_TITLES,
  addRow,
  getWorksheetIndexFromTitle
} = require("../util/sheets");

exports.handler = async function(event, context, callback) {
  const body = JSON.parse(event.body);
  console.log(body);

  return callback(null, {
    statusCode: 200,
    body: "Beep, boop, you just got serverless."
  });
};
