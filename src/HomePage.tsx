import { Button, Navbar } from "react-daisyui";
import CryptoList from "./CryptoList";

function HomePage() {

  return (
    <>
    <div className="bg-base-200 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar className="">
        <Button className="text-xl normal-case" color="ghost">
          Crypto List
        </Button>
      </Navbar>
    </div>
    <div className="bg-base-100 p-2">
      <CryptoList />
    </div>
    </>
  );
}

export default HomePage;