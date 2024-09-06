import React, { act } from "react";
import { Button, Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import Image from "next/image";
import logo from "@/public/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

interface Props {
  handleThemeChange: () => void;
  headerList: Array<any>;
  isActive: (href: string) => boolean;
}

export default function NavbarLab(props: Props) {
  const { handleThemeChange, headerList, isActive } = props;

  return (
    <Navbar
      isBordered
      maxWidth="full"
      className="rounded-md rounded-t-none py-4"
    >
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Image src={logo} alt="icon" width={80} height={80} />
          <p className="hidden md:block text-2xl font-bold dark:text-foreground text-foreground">
            Hind Medical Hall
          </p>
        </NavbarBrand>
        <NavbarContent className="md:flex hidden gap-10">
          {headerList?.map((each, index) => (
            <NavbarItem
              key={`${each?.name}_${index}`}
              isActive={isActive(each?.href)}
            >
              <Link
                aria-current="page"
                href={each?.href}
                className={`${
                  isActive(each?.href)
                    ? "text-blue-450"
                    : "text-foreground hover:text-cyan-400"
                } font-semibold`}
              >
                {each?.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center gap-6" justify="end">
        {/* <Input
          classNames={{
            base: "w-1/2 h-10 md:block hidden",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        /> */}
        <Button className="md:block hidden bg-blue-450">Get in Touch</Button>
        {/* cart with items */}
        <div className="relative">
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            3
          </span>
          <FontAwesomeIcon
            icon={faCartShopping}
            className="w-12 text-foreground"
          />
        </div>
        <Switch
          defaultSelected={false}
          size="lg"
          color="secondary"
          onChange={handleThemeChange}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <SunIcon className={className} />
            ) : (
              <MoonIcon className={className} />
            )
          }
        />
        <Dropdown
          placement="bottom-end"
          className="dark:text-foreground text-foreground"
        >
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="profile">My Profile</DropdownItem>
            <DropdownItem key="orders">Orders</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
