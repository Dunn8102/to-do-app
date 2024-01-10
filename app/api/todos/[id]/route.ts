import { tasks } from "@/app/lib/placeholder-data";
import { Task } from "@/app/lib/type";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

//tìm id
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // let task = tasks.find((task) => task.id === params.id);
  const task = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  //Chưa xử lý được lỗi khi ko tìm thấy id task
  return NextResponse.json(task);
}
//Xóa
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const deleteTask = await prisma.post.delete({
    where: {
      id: Number(params.id),
    },
  });
}
// const elementIndex = tasks.findIndex((task) => task.id === params.id);

// if (elementIndex != -1) {
//   tasks.splice(elementIndex, 1);
//   return NextResponse.json({ message: "xóa thành công" });
// } else {
//   return NextResponse.json({ message: "xóa ko thành công" });
// }
//Cập nhật
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const updateTask = await prisma.post.update({
    where: {
      id: Number(params.id),
    },
    data: {
      name: body.name,
      isDelete: body.isDelete,
      isDone: body.isDone,
    },
  });
  // const elementIndex = tasks.findIndex((task) => task.id === params.id);
  // if (elementIndex != -1) {
  //   const task: Task | undefined = tasks.at(elementIndex);
  //   const body = await request.json();
  //   if (task != undefined) {
  //     task.name = body.name;
  //     task.isDone = body.isDone;
  //     task.isDelete = body.isDelete;
  //     return NextResponse.json(task);
  //   }
  // } else {
  //   return NextResponse.json({ message: "cập nhật ko thành công" });
  // }
}
