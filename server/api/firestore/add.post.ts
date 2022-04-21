import { useQuery, useBody } from "h3";
import { add } from "../../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = useQuery(event.req);
    const body = await useBody(event.req);

    const docRef = await add(query.col as string, body);

    return { result: docRef };
  } catch (error) {
    return { error: error.message }
  } 
});
