import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  const burgerMenuStyles = `ml-2 text-4xl`;
  return (
    <nav className="bg-slate-200 min-h-[3.438rem] flex items-center">
      <BurgerMenu styles="ml-2 text-4xl" />
    </nav>
  );
};

export default Navbar;
