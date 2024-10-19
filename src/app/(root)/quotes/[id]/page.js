async function SingalQuote({ params }) {
  let quote = await fetch(`https://dummyjson.com/quotes/${params.id}`, {
    cache: "no-cache",
  });
  quote = await quote.json();
  console.log("yhan is ko check kro ye kya krh rha hai", quote);

  return (
    <>
      <h1 className="uppercase text-center font-bold py-10">quotes</h1>
      <div className="container mx-auto flex justify-center items-start">
        <div
          key={quote.id}
          className="flex flex-col justify-between items-center  p-4 border border-gray-400 rounded-lg bg-purple-400 cursor-pointer"
        >
          <h1 className="text-center capitalize text-5xl font-semi">{quote.quote}</h1>
          <h3 className="text-center text-2xl mt-5">{quote.author}</h3>
        </div>
      </div>
    </>
  );
}
export default SingalQuote;
