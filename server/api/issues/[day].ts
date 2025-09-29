import { pocket } from "~~/lib/pocketbase";

type Issue = {
  title: string;
  isPublished: boolean;
  publishDate: string;
};

export default defineEventHandler(async (_) => {
  const day = getRouterParam(_, "day");

  console.log({ day });

  const issues = await pocket.collection("Issues").getFullList<Issue>();

  console.log({ issues });

  return issues.filter((issue) => issue.publishDate === day);
});
