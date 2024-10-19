import LoaderImg from "@/assets/images/output-onlinegiftools.gif";
console.log(LoaderImg);

function Loader() {
  return (
    <div className="loader fixed left-0 top-0 flex justify-center items-center w-screen h-screen z-10 ">
      <h1 className="text-7xl">Loding....</h1>
    </div>
  );
}
export default Loader;
