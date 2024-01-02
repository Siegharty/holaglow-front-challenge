export interface Currency {
  id: string;
  name: string;
  symbol: string;
  rank: Number;
  is_new: boolean;
  is_active: boolean;
  type: "token" | "coin";
}
