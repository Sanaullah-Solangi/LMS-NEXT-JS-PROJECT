import "../../globals.css";
export default function Layout({ children }) {
  return (
    <html>
      <body>
        <div className="flex h-screen w-full">
          <SideMenu />
          <div className="w-3/4 bg-red-500 h-full flex justify-center items-center text-6xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
