import z from "zod";

const TaskSchema = z.object({
  name: z.string().min(6, { message: "Dộ dài ngắn nhất là 6" }).max(225),
});
export default TaskSchema;
