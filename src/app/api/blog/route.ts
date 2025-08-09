import { supabase } from "@/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
    const { data, error } = await supabase.from("posts").select("*");
    if(error) {
        return NextResponse.json(error);
    }

    return NextResponse.json(data, { status: 200 })
} 