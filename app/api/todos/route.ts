import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import TaskSchema from "@/app/api/todos/TaskSchema";

export async function GET(request: NextRequest) {
  const task = await prisma.post.findMany();
  return NextResponse.json(task);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // tasks.push(body);

  const result = TaskSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(result.error.errors, { status: 400 });
  } else {
    //add new task to mysql db
    const task = await prisma.post.create({
      data: {
        name: body.name,
        isDone: false,
        isDelete: false,
      },
    });
    return NextResponse.json(task);
  }
}
