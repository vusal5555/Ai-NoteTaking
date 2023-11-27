const apiKey = process.env.PINECONE_API_KEY;
import { Pinecone } from "@pinecone-database/pinecone";

if (!apiKey) {
  throw Error("PineCone api key is not defined");
}

const pinecone = new Pinecone({
  environment: "gcp-starter",
  apiKey,
});

export const notesIndex = pinecone.index("next-js-ai-note-app");
