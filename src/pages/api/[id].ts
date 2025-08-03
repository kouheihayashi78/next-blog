import { supabase } from "@/utils/supabaseClient";
import { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const { id } = req.query;
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        return res.status(500).json({ error: error.message });
      }

      if (!data) {
        notFound();
      }

      return res.status(200).json(data);

    case "DELETE":
      const { deleteId } = req.query;
      const { error: deleteError } = await supabase
        .from("posts")
        .delete()
        .eq("id", deleteId);

      if (deleteError) {
        return res.status(500).json({ error: deleteError.message });
      }

      return res.status(200).json({ message: "削除は成功しました。" });
    case "PUT":
      const {updateId, title, content} = req.body;
      const { data: updateData, error: updateError } = await supabase
        .from("posts")
        .update({ title: title, content: content })
        .eq("id", updateId)
        .select();

      if (!updateData) {
        notFound();
      }

      if (updateError) {
        return res.status(500).json({ error: updateError });
      }

      return res.status(200).json({ message: "更新は成功しました。" });
  }
}
