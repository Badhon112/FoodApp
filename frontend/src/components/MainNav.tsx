import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <Button
      variant={"ghost"}
      className="font-bold hover:text-orange-500 hover:bg-white text-orange-400"
    >
      Log In
    </Button>
  );
};

export default MainNav;
