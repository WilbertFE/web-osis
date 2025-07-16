import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";

export default function page() {
  return (
    <div className="min-h-screen flex pt-28">
      <div className="w-full flex flex-col">
        <h1 className="text-xl font-bold tracking-wider text-center">
          DOKUMENTASI OSIS
        </h1>
        <p className="text-sm text-muted-foreground text-center">
          tekan untuk mengakses link google drive
        </p>
        <CardHoverEffectDemo />
      </div>
    </div>
  );
}
