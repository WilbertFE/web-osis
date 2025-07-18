import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex justify-center my-4 gap-x-2">
      <Avatar className="w-16 h-16">
        <AvatarImage
          className="object-cover"
          src="/person/wilbert.png"
          alt="@wilbert"
        />
        <AvatarFallback>PS</AvatarFallback>
      </Avatar>
      <Avatar className="w-16 h-16">
        <AvatarImage
          className="object-cover"
          src="/person/purna.jpeg"
          alt="@purna"
        />
        <AvatarFallback>PS</AvatarFallback>
      </Avatar>
      <Avatar className="w-16 h-16">
        <AvatarImage
          className="object-cover"
          src="/person/adel.jpeg"
          alt="@adelyn"
        />
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>
      <Avatar className="w-16 h-16">
        <AvatarImage
          className="object-cover"
          src="/person/jacob.jpeg"
          alt="@jacob"
        />
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>
    </div>
  );
}
