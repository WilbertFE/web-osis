"use client";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { aspirationRequest } from "@/lib/firebase/service";
import { useRef } from "react";

export function TabsDemo() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNormalButtonLoad, setIsNormalButtonLoad] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleSubmitNormal = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsNormalButtonLoad(true);

    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const room = data.get("room");
    const request = data.get("request");

    if (!name || !room || !request) return toast("Tidak boleh ada yang kosong");

    const response = await aspirationRequest(name, room, request);

    setIsNormalButtonLoad(false);
    if (response.status) {
      formRef.current?.reset();
      return toast(response.message);
    }
  };

  if (isLoading) return null;

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="normal">
        <TabsList className="mx-auto">
          <TabsTrigger value="normal">Normal</TabsTrigger>
        </TabsList>
        <TabsContent value="normal">
          <form ref={formRef} onSubmit={(e) => handleSubmitNormal(e)}>
            <Card>
              <CardHeader>
                <CardTitle>Aspiration Space</CardTitle>
                <CardDescription>
                  Beri tahu permintaan dan harapanmu
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-name">Name</Label>
                  <Input
                    id="tabs-demo-name"
                    name="name"
                    placeholder="Tulis nama mu"
                  />
                </div>
                <div className="grid gap-3">
                  <Label>Kelas</Label>
                  <Select name="room">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Pilih kelas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Kelas</SelectLabel>
                        <SelectItem value="10-1">10-1</SelectItem>
                        <SelectItem value="10-2">10-2</SelectItem>
                        <SelectItem value="10-3">10-3</SelectItem>
                        <SelectItem value="11-1">11-1</SelectItem>
                        <SelectItem value="11-2">11-2</SelectItem>
                        <SelectItem value="11-3">11-3</SelectItem>
                        <SelectItem value="12-1">12-1</SelectItem>
                        <SelectItem value="12-2">12-2</SelectItem>
                        <SelectItem value="12-3">12-3</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <div className="grid w-full gap-3">
                    <Label htmlFor="request">Permintaan</Label>
                    <Textarea
                      placeholder="Tulis permintaan dengan lengkap"
                      id="request"
                      name="request"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  disabled={isNormalButtonLoad ? true : false}
                  type="submit"
                >
                  Kirim
                </Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
