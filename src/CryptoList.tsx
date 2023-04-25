import useSWR from "swr";
import { getHeaders } from "./utils";
import { Button } from "react-daisyui";

export type TickerPrice = {
  symbol: string;
  price: number;
};

const fetchCryptos = () =>
  fetch("https://api.binance.com/api/v3/ticker/price", {
    headers: getHeaders(),
  }).then((res) => res.json());

function openCrypto(symbol: string) {
    window.open(`./crypto/${symbol}`);
}

export default function CryptoList() {
  const { data, error, isLoading } = useSWR<Array<TickerPrice>>(
    "/cryptos",
    fetchCryptos
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>No cryptos</div>;
  return (
    <div className="bg-base-100 p-2">
      <ul>
        {data.map((crypto) => (
          <li key={crypto.symbol}>${crypto.symbol}<Button onClick={e => openCrypto(crypto.symbol)}>open</Button></li>
        ))}
      </ul>
    </div>
  );
}
