import { TabsDemo } from "./components/TabsDemo";

export default function page() {
  return (
    <div className="min-h-screen mt-32 flex flex-wra px-8">
      <div className="flex w-full flex-col items-center">
        <h1 className="text-center text-xl tracking-wider font-bold">
          REPORT ROOM
        </h1>
        <p className="text-center text-sm">
          tulis laporan tentang apapun tanpa takut diketahui
        </p>
        <div className="my-4"></div>
        <TabsDemo />
      </div>
    </div>
  );
}
