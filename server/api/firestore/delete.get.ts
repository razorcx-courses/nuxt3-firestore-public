import { useQuery } from "h3";
import { del } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const { col, id } = useQuery(event.req);

    await del(col, id);

    return { result: id }
  } catch (error) {
    return { error: error.message }
  }
});
