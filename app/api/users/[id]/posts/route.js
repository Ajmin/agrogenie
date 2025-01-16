import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const dat = await Prompt.find({ creator: params.id }).populate("creator");
    return new Response(JSON.stringify(dat), { status: 200 });
  } catch (error) {
    return new Response("Failed to retrieve prompts", { status: 500 });
  }
};
