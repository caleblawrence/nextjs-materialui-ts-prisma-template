import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") return;

  const { name, keyboardLink, keyboardName, keyboardSwitch } = req.body;
  if (!name || !keyboardName) {
    res.statusCode = 400;
    res.json({
      error: "name, keyboardName are required.",
    });
  }

  const keyboard = await prisma.keyboard.create({
    data: {
      name: name,
      keyboardLink: keyboardLink,
      keyboardName: keyboardName,
      keyboardSwitch: keyboardSwitch,
    },
  });
  res.statusCode = 200;
  res.json({ keyboard: keyboard });
};
