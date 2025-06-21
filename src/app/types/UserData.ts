export type UserData = {
  username: string;
  id?: string;
  name: string;
  email: string;
  image: string;
  info: string;
  type: "google";
  role: "user" | "admin";
  created_at?: string;
  updated_at?: string;
};
