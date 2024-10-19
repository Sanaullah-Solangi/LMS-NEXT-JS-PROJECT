import "../globals.css";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <div className="max-h-full w-1/2 uppercase text-4xl font-medium flex justify-center items-center bg-red-500">
            {" "}
            side Menu
          </div>

          <div className="max-h-full w-1/2 uppercase text-4xl font-medium flex justify-center items-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
