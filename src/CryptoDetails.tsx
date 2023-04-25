import useSWR from "swr";
import { getHeaders } from "./utils";
import { useParams } from "react-router-dom";

export type TickerStats = {
  symbol: string;
  priceChange: number; // Absolute price change
  priceChangePercent: number; // Relative price change in percent
  weightedAvgPrice: number; // QuoteVolume / Volume
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  lastPrice: number;
  volume: number;
  quoteVolume: number; // Sum of (price * volume) for all trades
  openTime: number; // Open time for ticker window
  closeTime: number; // Current Time of the Request
  firstId: number; // Trade IDs
  lastId: number;
  count: number;
};

const fetchDetails = ([, symbol]: Array<string>) =>
  fetch(`https://api.binance.com/api/v3/ticker?symbol=${symbol}`, {
    headers: getHeaders(),
  }).then((res) => res.json());

export default function CryptoDetails() {
  const { symbol } = useParams();
  const { data, error, isLoading } = useSWR<TickerStats>(
    ["cryptos", symbol],
    fetchDetails
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>No cryptos</div>;
  return (
    <div className="max-w-xl m-4 p-4">
      <div className="grid gap-4 grid-cols-2">
        <span>Symbol:</span>
        <span>{data.symbol}</span>

        <span>Price:</span>
        <span>{data.lastPrice}</span>
      </div>
    </div>
  );
}
