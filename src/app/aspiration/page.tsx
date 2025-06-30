import React from "react";
import { TabsDemo } from "./components/TabsDemo";

export default function page() {
  return (
    <div className="min-h-screen mt-32 flex flex-wra px-8">
      <div className="flex w-full flex-col items-center">
        <h1 className="text-center text-xl tracking-wider font-bold">
          ASPIRATION SPACE
        </h1>
        <p className="text-center text-sm">
          tuangkan permintaan dan harapanmu kepada OSIS Methodist-6
        </p>
        <div className="my-4"></div>
        <TabsDemo />
      </div>
    </div>
  );
}
