import { query } from "./_generated/server";

export const getAllTask = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});
