import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLeft2, Gallery } from "iconsax-react";
import { Link } from "react-router-dom";

const BranchesCard = ({
  children,
  imgSrc,
  imgAlt,
  branchTitle,
  branchAddress,
  branchLink,
}) => {
  return (
    <Link to={branchLink} className="w-full group">
      <Card className="w-full flex flex-row md:flex-col overflow-hidden cursor-pointer hover:shadow-lg border hover:border hover:border-PrimaryBrandColor transition-all ease-linear duration-300 mb-3 md:mb-12">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-1/3 relative md:w-full md:shrink-0 rounded-l-none md:rounded-b-none"
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-full object-cover group-hover:brightness-50"
          />
          <Gallery size="90" className="hidden group-hover:block text-nautral-50 absolute mx-auto my-auto left-0 right-0 top-0 bottom-0 bg-opacity-30 bg-white outline-4 border-[12px] border-opacity-20 border-white rounded-full p-3" />
        </CardHeader>
        <CardBody className="w-3/4 md:w-full flex flex-col items-center justify-evenly h-full">
          <Typography
            variant="h3"
            className="text-sm md:text-2xl mb-4 text-nautral-700"
          >
            {branchTitle}
          </Typography>
          <Typography
            variant="p"
            className="text-sm md:text-2xl font-medium mb-2 text-center text-nautral-700"
          >
            {branchAddress}
          </Typography>
          <Button
            variant="text"
            className="hidden md:opacity-0 md:flex md:group-hover:opacity-100 bg-transparent border py-1 md:text-lg text-PrimaryBrandColor hover:bg-green-100 border-PrimaryBrandColor items-center gap-2"
          >
            صفحه شعبه
            <ArrowLeft2 size="32" className="text-PrimaryBrandColor" />
          </Button>
          {children}
        </CardBody>
      </Card>
    </Link>
  );
};

export default BranchesCard;
