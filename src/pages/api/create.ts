import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { id, title, content } = req.body;

    if (!id || !title || !content) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const createdAt = new Date().toISOString();

    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          id: id,
          title: title,
          content: content,
          createdAt: createdAt,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
