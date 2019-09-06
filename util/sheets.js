require("dotenv").config();

if (
  !process.env.SHEETS_ID ||
  !process.env.SHEETS_CLIENT_EMAIL ||
  !process.env.SHEETS_PRIVATE_KEY_BASE64
) {
  throw new Error("Missing environment variables");
}

const GoogleSpreadsheet = require("google-spreadsheet");
const googleSheetID = process.env.SHEETS_ID;
const doc = new GoogleSpreadsheet(googleSheetID);

export const SHEET_TITLES = Object.freeze({
  CMS: "CMS",
  data: "Data",
  rute: "rute-form"
});

export async function addRow(sheetId, rowData) {
  await new Promise(resolve => {
    doc.addRow(sheetId, rowData, resolve);
  });
}

export async function getWorksheetIndexFromTitle(doc, title) {
  const { worksheets } = await getInfo(doc);
  return 1 + worksheets.findIndex(sheet => sheet.title === title);
}

async function getCMSData(doc) {
  const CMS_INDEX = await getWorksheetIndexFromTitle(doc, SHEET_TITLES.CMS);
  return new Promise(resolve => {
    doc.getCells(
      CMS_INDEX,
      {
        "min-row": 2,
        "max-col": 2
      },
      (err, cells) => {
        if (err) {
          throw new Error("Error getting CMS data");
        }
        const keys = cells.filter(({ col }) => col === 1);
        const values = cells.filter(({ col }) => col === 2);
        const data = {};
        for (let i = 0; i < keys.length; i++) {
          data[keys[i].value] = values.find(
            value => value.row === keys[i].row
          ).value;
        }
        resolve(data);
      }
    );
  });
}

async function getInfo(doc) {
  return new Promise((resolve, reject) =>
    doc.getInfo((error, info) => {
      if (error) {
        return reject(error);
      }
      resolve(info);
    })
  );
}

async function getSiteDataFromSheet(serviceAccount) {
  await new Promise(resolve =>
    doc.useServiceAccountAuth(serviceAccount, resolve)
  );
  return getCMSData(doc);
}

module.exports = { getSiteDataFromSheet };
