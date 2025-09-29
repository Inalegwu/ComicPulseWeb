

export default defineEventHandler(async()=>{

    const pb=usePocketbase();

    const issues=await pb.collection("Issues").getFullList<Issue>();

    console.log({issues});

    return issues
})