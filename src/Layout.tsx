import { Button, Navbar } from "react-daisyui";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <div className="bg-base-200 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
          <Navbar className="">
            <Button className="text-xl normal-case" color="ghost">
              Crypto Info
            </Button>
          </Navbar>
        </div>
        <div className="container mx-auto"><Outlet /></div>
      </>
    );
  };

export default Layout;
