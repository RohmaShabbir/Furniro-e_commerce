import { Heart, Search, ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="w-full border-b-2 border-gray-300 p-4 ">
      <div className="max-w-7xl mx-auto w-full  flex justify-between">
        <div className="flex items-center gap-2 ">
            <img src="Logos-05.svg" alt="" />
          <h1 className="text-2xl font-bold text-gray-700">
            Furniro
          </h1>
        </div>
        <div className="gap-x-24 hidden md:flex items-center justify-center mx-auto ">
          <a href={"/"} className="text-md font-normal">
            Home
          </a>
          <a href={"/shop"} className="text-md font-normal flex items-center">
            Shop
          </a>
          <a href={"/blog"} className="text-md font-normal">
            Blog
          </a>
          <a href={"/contact"} className="text-md font-normal">
            Contact
          </a>
        </div>
        <div className=" gap-4 hidden md:flex">
          <div className="p-2 gap-2 flex ">
            <span>
              <User />
            </span>
          </div>
          <Button variant={"outline"} size={"icon"} className="rounded-full">
            <Heart />
          </Button>
          <Button variant={"outline"} size={"icon"} className="rounded-full">
            <ShoppingCart />
          </Button>
          <Button variant={"outline"} size={"icon"} className="rounded-full">
            <Search />
          </Button>
        </div>
        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Button variant={"outline"} size={"icon"}>
              <Menu className="size-4 text-gray-400" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"}>
            <SheetHeader className="flex items-center">
              <SheetTitle>Furniro</SheetTitle>
            </SheetHeader>
            <div className=" flex flex-col gap-4 mt-6">
              <a href={"#"} className="text-md font-normal">
                Home
              </a>
              <a href={"#"} className="text-md font-normal">
                Shop
              </a>
              <a href={"#"} className="text-md font-normal">
                About
              </a>

              <a href={"#"} className="text-md font-normal">
                Contact
              </a>

              <div className="mt-4">
                <div className="p-2 gap-2 flex  ">
                  <span>
                    {" "}
                    <User />
                  </span>
                </div>
                <div className="flex mt-6 gap-4">
                  <Button
                    variant={"outline"}
                    size={"icon"}
                    className="rounded-full"
                  >
                    <Heart />
                  </Button>
                  <Button
                    variant={"outline"}
                    size={"icon"}
                    className="rounded-full"
                  >
                    <ShoppingCart />
                  </Button>
                  <Button
                    variant={"outline"}
                    size={"icon"}
                    className="rounded-full"
                  >
                    <Search />
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
export default Navbar;
