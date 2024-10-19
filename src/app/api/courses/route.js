let courses = [
  {
    id: 1,
    course: "Web Development",
    duration: "3 months",
  },
  {
    id: 2,
    course: "App Development",
    duration: "3 months",
  },
  {
    id: 3,
    course: "python programming",
    duration: "3 months",
  },
  {
    id: 4,
    course: "Flutter developmetn",
    duration: "3 months",
  },
];

export async function GET(request) {
  return Response.json({
    course: courses,
    msg: "kaam ho gaya",
  });
}

export async function POST(request) {
  const data = await request.json();
  const obj = {
    ...data,
    id: courses.length + 1,
    duration: "5 months",
  };
  courses.push(obj);
  return Response.json({
    data: courses,
    msg: "Todo Added Successfully",
  });
}
