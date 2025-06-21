/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getUserByUsername, updateUserData } from "@/lib/firebase/service";
import { FormEvent, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserData } from "@/app/types/UserData";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, LogOut, MoveRight, SquareUserRound } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function LayoutWrapper({ username }: { username: string }) {
  const [user, setUser] = useState<null | UserData>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const { data: session, update }: any = useSession();
  const router = useRouter();

  console.log("session : ", session);

  const getUser = async (username: string) => {
    const response = await getUserByUsername(username);
    if (response.status) {
      setUser(response.data);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);

    const data = new FormData(e.currentTarget);
    const username = data.get("username");
    const info = data.get("info");

    if (username && info && user) {
      const response = await updateUserData(info, username, user);
      if (response?.status) {
        update({
          ...session,
          user: {
            ...session.user,
            username: response.data?.username,
            info: response.data?.info,
          },
        });
        setIsDisabled(false);
        toast("Data berhasil diupdate");
        router.push(`/${response.data?.username}`);
        return;
      } else {
        setIsDisabled(false);
        return toast(response?.message);
      }
    } else {
      setIsDisabled(false);
      return toast("Tidak boleh kosong");
    }
  };

  useEffect(() => {
    getUser(username);
  }, [username]);

  console.log("user : ", user);

  return (
    user && (
      <>
        {/* {hero} */}
        <div className="w-full flex pt-32 flex-col px-4 items-center">
          <Avatar className="w-16 h-16">
            <AvatarImage alt={user.name} src={user.image} />
            <AvatarFallback>WFE</AvatarFallback>
          </Avatar>
          <div className="my-2"></div>
          <div className="text-center">
            <h1 className="font-bold text-lg tracking-wide line-clamp-1">
              {user.name}
            </h1>
            <span className="line-clamp-1 text-sm">@{user.username}</span>
          </div>
          <div className="my-2"></div>
          <div className="text-center">
            <p className="line-clamp-2 text-sm">{user.info}</p>
          </div>
          <div className="my-2"></div>
        </div>
        {session && user.username === session.user.username && (
          <>
            <>
              <div className="w-full flex flex-col px-4 gap-y-2">
                <span>Profile</span>
                <div className="flex flex-col border p-3 rounded-lg">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="flex gap-x-2 cursor-pointer">
                        <SquareUserRound />
                        <span className="flex-1 line-clamp-1">Info</span>
                        <MoveRight />
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] max-w-[320px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Edit profilmu. Simpan perubahan jika sudah yakin.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                              Username
                            </Label>
                            <Input
                              id="username"
                              name="username"
                              className="col-span-3"
                              defaultValue={user.username}
                            />
                          </div>
                          <div className="flex flex-col gap-4">
                            <Label htmlFor="info" className="text-left">
                              Bio
                            </Label>
                            <Textarea
                              defaultValue={user.info}
                              id="info"
                              name="info"
                              placeholder="Type your message here."
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit" disabled={isDisabled}>
                            {isDisabled ? (
                              <>
                                <Loader2 className="animate-spin" />
                                Please wait
                              </>
                            ) : (
                              "Save changes"
                            )}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              {}
            </>
            <div className="w-full flex flex-col px-4 gap-y-2">
              <span>Settings</span>
              <div className="flex flex-col border p-3 rounded-lg">
                <div
                  className="flex gap-x-2 cursor-pointer"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  <LogOut color="#ff0000" />
                  <span className="flex-1 line-clamp-1 text-red-600">
                    Log out
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    )
  );
}
