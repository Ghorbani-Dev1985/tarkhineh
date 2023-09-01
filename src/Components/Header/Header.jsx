import React, { useState } from "react";

import Logo from "../../assets/Images/Logo/logo.png";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import {
  Heart,
  LogoutCurve,
  Location,
  SearchNormal1,
  ShoppingCart,
  User,
  Wallet2,
} from "iconsax-react";


import BranchesMnnuItems from './../../util/Branches' 

function BranchesMnnu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = BranchesMnnuItems.map(
    ({ id, branchTitle, branchAddress, imgSrc , imgAlt , branchLink}) => (
      <Link to={branchLink} key={id} className="hover:bg-green-50 rounded-lg transition-all ease-linear duration-300">
        <MenuItem className="flex flex-col items-center gap-5 rounded-lg">
         <div><img src={imgSrc} alt={imgAlt} className="rounded-xl"/></div> 
          <div className="flex flex-col items-center">
            <Typography
              variant="h6"
              className="flex items-center my-4 text-center text-sm text-nautral-700"
            >
              {branchTitle}
            </Typography>
            <Typography variant="paragraph" className="font-normal text-center text-nautral-700">
              {branchAddress}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              شعبه
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

const RestaurantMenusMnnuItems = [
  {
    id: 1,
    to: "",
    image: "src/assets/Images/Menu/menu1.png",
    title: "غذای اصلی",
  },
  {
    id: 2,
    to: "",
    image: "src/assets/Images/Menu/menu2.png",
    title: " پیش غذا",
  },
  {
    id: 3,
    to: "",
    image: "src/assets/Images/Menu/menu3.png",
    title: " دسر ",
  },
  {
    id: 4,
    to: "",
    image: "src/assets/Images/Menu/menu4.png",
    title: " نوشیدنی ",
  },
];

function RestaurantMenusMnnu() {
  const [isRestaurantMenuOpen, setRestaurantIsMenuOpen] = useState(false);
  const [isRestaurantMobileMenuOpen, setIsRestaurantMobileMenuOpen] =
    useState(false);

  const renderItems = RestaurantMenusMnnuItems.map(({ id, to, title, image}) => (
    <Link key={id} to={to} className="hover:bg-green-50 rounded-lg transition-all ease-linear duration-300">
      <MenuItem className="flex flex-col items-center gap-3 rounded-lg">
        <div className="flex flex-col items-center">
          <img src={image} alt="رستوران‌های ترخینه" className="w-12 h-12 object-fill"/>
          <Typography
            variant="h6"
            className="flex my-4 items-center text-sm text-nautral-500"
          >
            {title}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <>
      <Menu
        open={isRestaurantMenuOpen}
        handler={setRestaurantIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isRestaurantMenuOpen || isRestaurantMobileMenuOpen}
              onClick={() => setIsRestaurantMobileMenuOpen((cur) => !cur)}
            >
              منو
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isRestaurantMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isRestaurantMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isRestaurantMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

function NavList() {
  const NavListItems = [
    {
      id: 1,
      to: "",
      title: "اعطای نمایندگی",
    },
    {
      id: 2,
      to: "",
      title: " درباره ما",
    },
    {
      id: 3,
      to: "",
      title: " تماس با ما",
    },
  ];
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography as="a" href="#" variant="small" className="font-normal">
        <NavLink end to="/" className="flex items-center gap-2 py-2 pr-4">
          صفحه اصلی
        </NavLink>
      </Typography>
      <RestaurantMenusMnnu />
      <BranchesMnnu />
      {NavListItems.map(({ id, to, title }) => {
        return (
          <NavLink key={id} to={to}>
            <ListItem className="flex items-center gap-2 py-2 pr-4">
              {title}
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openUsersMenu, setOpenUsresMenu] = useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const UsersMenuItems = [
    {
      id: 1,
      icon: <User size="16" className="text-nautral-600 ml-1" />,
      title: "پروفایل",
    },
    {
      id: 2,
      icon: <Wallet2 size="16" className="text-nautral-600 ml-1" />,
      title: "پیگیری سفارش",
    },
    {
      id: 3,
      icon: <Heart size="16" className="text-nautral-600 ml-1" />,
      title: "علاقه مندی‌ها",
    },
    {
      id: 4,
      icon: <Location size="16" className="text-nautral-600 ml-1" />,
      title: "آدرس‌های من",
    },
    {
      id: 5,
      icon: <LogoutCurve size="16" className="text-nautral-600 ml-1" />,
      title: "خروج از حساب",
    },
  ];
  return (
    <>
      <header className="bg-white">
        <nav className="mx-auto max-w-screen-xl p-4 lg:p-8 rounded-none shadow-none text-nautral-500">
          <div className="w-full flex items-center justify-between">
            <section className="w-full lg:hidden flex justify-between items-center gap-3">
              <IconButton
                variant="text"
                className="lg:hidden text-PrimaryBrandColor"
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                ) : (
                  <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                )}
              </IconButton>
              <img src={Logo} alt="ترخینه" className="lg:hidden w-28" />
              <div className="flex lg:hidden justify-end items-center gap-1">
                <Button className="bg-brand-50 rounded-lg p-0 w-9 h-9 flex justify-center items-center">
                  <ShoppingCart size="28" className="text-PrimaryBrandColor" />
                </Button>
                <Button className="bg-brand-50 rounded-lg p-0 w-9 h-9 flex justify-center items-center">
                  <User size="28" className="text-PrimaryBrandColor" />
                </Button>
              </div>
            </section>
            <img
              src={Logo}
              alt="ترخینه"
              className="hidden lg:block border border-nautral-500 border-dashed p-3"
            />
            <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center">
              <NavList />
            </div>
            <div className="hidden lg:flex lg:justify-between items-center gap-3">
              <Button className="bg-brand-50 rounded-lg p-3 flex justify-center items-center">
                <SearchNormal1 size="24" className="text-PrimaryBrandColor" />
              </Button>
              <Button className="bg-brand-50 rounded-lg p-3 flex justify-center items-center">
                <ShoppingCart size="24" className="text-PrimaryBrandColor" />
              </Button>
              <Menu
                open={openUsersMenu}
                handler={setOpenUsresMenu}
                animate={{
                  mount: { y: 8, x: 49 },
                  unmount: { y: 25, x: 20 },
                }}
              >
                <MenuHandler>
                  <Button className="bg-brand-50 rounded-lg p-3 flex justify-center items-center">
                    <User size="24" className="text-PrimaryBrandColor ml-1" />
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`h-4 w-4 transition-transform text-PrimaryBrandColor ${
                        openUsersMenu ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </MenuHandler>
                <MenuList className="w-36 p-2">
                  {UsersMenuItems.map(({ id, icon, title }) => {
                    return (
                      <MenuItem
                        key={id}
                        className="border-b last:border-b-0 border-nautral-100 rounded-none"
                      >
                        <Typography
                          variant="paragraph"
                          className="flex items-center text-nautral-600"
                        >
                          {icon}
                          {title}
                        </Typography>
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </div>
          </div>
          <Collapse open={openNav}>
            <NavList />
          </Collapse>
        </nav>
      </header>
    </>
  );
};

export default Header;