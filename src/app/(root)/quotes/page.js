import Link from "next/link";

async function Quotes() {
  let quotes = await fetch("https://dummyjson.com/quotes", {
    cache: "no-cache",
  });
  quotes = await quotes.json();

  return (
    <>
      <h1 className="uppercase text-center font-bold py-10">quotes</h1>
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quotes.quotes.map((quote) => {
          return (
            <Link href={`quotes/${quote.id}`}>
              <div
                key={quote.id}
                className="flex flex-col justify-between items-center m-h-[300px] h-[100%] p-4 border border-gray-400 rounded-lg hover:bg-purple-100 cursor-pointer"
              >
                <h1 className="text-center text-2xl">{quote.quote}</h1>
                <h3 className="text-center text-[18px] mt-3">{quote.author}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default Quotes;
