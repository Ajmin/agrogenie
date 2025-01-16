import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const dat = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(dat), { status: 200 });
  } catch (error) {
    return new Response("Failed to retrieve prompts", { status: 500 });
  }
};
