import path from "path";

import { getSiteDataFromSheet } from "./util/sheets";

const googleSheetID = process.env.SHEETS_ID;
const serviceAccount = {
  client_email: process.env.SHEETS_CLIENT_EMAIL,
  private_key: Buffer.from(
    process.env.SHEETS_PRIVATE_KEY_BASE64,
    "base64"
  ).toString("utf-8")
};

export default {
  getSiteData: async () => {
    const sheetData = await getSiteDataFromSheet(googleSheetID, serviceAccount);
    return {
      ...sheetData
    };
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages")
      }
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap")
  ]
};
