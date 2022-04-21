import { useQuery } from "h3";
import { queryByCollection } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = useQuery(event.req);
    const docs = await queryByCollection(query.col as string);
    return { result: docs };
  } catch (error) {
    return { result: [], error: error.message };
  } 
});
