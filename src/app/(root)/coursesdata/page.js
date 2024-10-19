export default async function CoursesData() {
  let data = await fetch("http://localhost:3000/api/courses");
  data = await data.json();
  let coursesData = data.course;

  return (
    <div className="container flex flex-col  gap-4 bg-green-300 h-screen w-full">
      {coursesData.map((data) => {
        return (
          <div
            key={data.id}
            className="card bg-red-400 w-2/3 h-20 mx-auto rounded flex flex-col justify-center items-center"
          >
            <p className="text-2xl font-bold text-center font-mono capitalize">
              {data.course}
            </p>
            <p className="text-base font-medium text-center uppercase">
              {data.duration}
            </p>
          </div>
        );
      })}
    </div>
  );
}
