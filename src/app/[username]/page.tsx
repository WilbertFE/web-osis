import { LayoutWrapper } from "./components/LayoutWrapper";

export default async function page({
  params,
}: {
  params: { username: string };
}) {
  const { username } = await params;

  return <LayoutWrapper username={username} />;
}
