const apiKey = process.env.OPENAI_API_KEY;
import { OpenAI } from "openai";

if (!apiKey) {
  throw Error("OpenAi api key is not defined");
}

const openai = new OpenAI({ apiKey });

export default openai;

export async function getEmbedding(text: string) {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: text,
  });

  const embedding = response.data[0].embedding;

  console.log(embedding);

  if (!embedding) {
    throw Error("Error generating embedding");
  }

  return embedding;
}
