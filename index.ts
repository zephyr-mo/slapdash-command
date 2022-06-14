import { CommandResponse } from "@slapdash/command-response-types";


const CONFIG = { ACCESS_TOKEN: "access-token" };

export default async (req: any, res: any) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    Object.values(CONFIG).join(", ")
  );

  res.json({
    view: {
      type: "list",
      options: [
        {
          title: 'slapdash',
          action: {
            type: "open-url",
            url: "https://slapdash.com",
          },
        },
        {
          title: "Copy Heart Emoji",
          action: {
            type: "copy",
            value: "❤️",
          },
        },
      ],
    }
  } as CommandResponse)
};