import { pocket } from "../../../lib/pocketbase";

type Issue = {
  title: string;
  isPublished: boolean;
  publishDate: string;
};

export default defineEventHandler(async () => {
  const issues = await pocket.collection("Issues").getFullList<Issue>({
    sort: "createdAt",
  });

  return issues;
});
