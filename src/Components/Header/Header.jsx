import React from "react";

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
import { Link } from "react-router-dom";
import { SearchNormal1, ShoppingCart, User } from "iconsax-react";
 
const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};
 
const BranchesMnnuItems = [
  {
    color: "blue",
    icon: FlagIcon,
    title: "شعبه اکباتان",
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "orange",
    icon: ChatBubbleOvalLeftIcon,
    title: "شعبه سهروردی",
    description: "News and writings, press releases, and resources",
  },
  {
    color: "green",
    icon: UsersIcon,
    title: (
      <div className="flex items-center gap-1">
        Careers{" "}
        <Chip
          size="sm"
          color="green"
          variant="ghost"
          value="We're hiring!"
          className="capitalize"
        />
      </div>
    ),
    description: "We are always looking for talented people. Join us!",
  },
  {
    color: "blue-gray",
    icon: FolderIcon,
    title: "شعبه آرژانتین",
    description: "All the stuff that we dan from legal made us add.",
  },
  {
    color: "purple",
    icon: RocketLaunchIcon,
    title: "شعبه شهرک غرب",
    description: "Checkout our products that helps a startup running.",
  },
  {
    color: "teal",
    icon: FaceSmileIcon,
    title: "شعبه جنوب شهر",
    description: "Set of beautiful icons that you can use in your project.",
  },
  {
    color: "cyan",
    icon: PuzzlePieceIcon,
    title: "شعبه ونک ",
    description: "High quality UI Kits helps you to 2x faster.",
  },
  {
    color: "pink",
    icon: GiftIcon,
    title: "شعبه فاطمی ",
    description: "List of all our open-source projects, it's all free.",
  },
];
 
function BranchesMnnu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
  const renderItems = BranchesMnnuItems.map(({ icon, title, description, color }, key) => (
      <Link to="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              className="flex items-center text-sm text-nautral-500"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
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
    title: "غذای اصلی",
  },
  {
    id: 2,
    to: "",
    title: " پیش غذا",
  },
  {
    id: 3,
    to: "",
    title: " دسر ",
  },
  {
    id: 4,
    to: "",
    title: " نوشیدنی ",
  },
];
 
function RestaurantMenusMnnu() {
  const [isRestaurantMenuOpen, setRestaurantIsMenuOpen] = React.useState(false);
  const [isRestaurantMobileMenuOpen, setIsRestaurantMobileMenuOpen] = React.useState(false);
 
  const renderItems = RestaurantMenusMnnuItems.map(({ id, to ,  title }) => (
      <Link key={id} to={to} >
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div>
            <Typography
              variant="h6"
              className="flex items-center text-sm text-nautral-500"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );
 
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
    to:"",
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
]
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          صفحه اصلی
        </ListItem>
      </Typography>
      <RestaurantMenusMnnu />
      <BranchesMnnu />
      {
        NavListItems.map(({id , to , title}) => {
          return(
      <Link
      key={id}
       to={to}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
         {title}
        </ListItem>
      </Link>

          )
        })
      }
    </List>
  );
}
 
const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
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
        <img src={Logo} alt="ترخینه" className="lg:hidden w-28"/>
         <div className="flex lg:hidden justify-end items-center gap-1">
        <Button className="bg-brand-50 rounded-lg p-0 w-9 h-9 flex justify-center items-center">
            <ShoppingCart size="28" className="text-PrimaryBrandColor"/>
          </Button>
          <Button className="bg-brand-50 rounded-lg p-0 w-9 h-9 flex justify-center items-center">
          <User size="28" className="text-PrimaryBrandColor"/>
          </Button>
        </div>
      </section>
         <img src={Logo} alt="ترخینه" className="hidden lg:block border border-nautral-500 border-dashed p-3"/>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center">
          <NavList />
        </div>
        <div className="hidden lg:flex lg:justify-between items-center gap-3">
          <Button className="bg-brand-50 rounded-lg p-0 w-10 h-10 flex justify-center items-center">
            <SearchNormal1 size="29" className="text-PrimaryBrandColor"/>
          </Button>
          <Button className="bg-brand-50 rounded-lg p-0 w-10 h-10 flex justify-center items-center">
            <ShoppingCart size="32" className="text-PrimaryBrandColor"/>
          </Button>
          <Button className="bg-brand-50 rounded-lg p-0 w-10 h-10 flex justify-center items-center">
          <User size="32" className="text-PrimaryBrandColor"/>
          </Button>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
       
      </Collapse>
    </nav>
    </header>
    </>
  );
}

export default Header;