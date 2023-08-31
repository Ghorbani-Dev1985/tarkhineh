import BranchesCard from "../../Common/BranchesCard";

const branchesInfo = [
  {
    id: 1,
    imgSrc: "src/assets/Images/Branch/branch1.png",
    imgAlt: "شعبه اکباتان",
    branchTitle: "شعبه اکباتان",
    branchAddress: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    branchLink: "",
  },
  {
    id: 2,
    imgSrc: "src/assets/Images/Branch/branch2.png",
    imgAlt: "شعبه چالوس",
    branchTitle: "شعبه چالوس",
    branchAddress:"چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    branchLink: "",
  },
  {
    id: 3,
    imgSrc: "src/assets/Images/Branch/branch3.png",
    imgAlt: "شعبه اقدسیه",
    branchTitle: "شعبه اقدسیه",
    branchAddress: "خیابان اقدسیه، نرسیده به میدان خیام، پلاک ۸",
    branchLink: "",
  },
  {
    id: 4,
    imgSrc: "src/assets/Images/Branch/branch4.png",
    imgAlt: "شعبه ونک",
    branchTitle: "شعبه ونک",
    branchAddress: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    branchLink: "",
  },
];
const Branches = () => {
  return (
    <section className="w-full grid grid-cols-12 gap-3 md:gap-6">
      {branchesInfo.map(
        ({ id, imgSrc, imgAlt, branchTitle, branchAddress, branchLink }) => {
          return (
            <div className="col-span-12 md:col-span-3 h-full flex">
              <BranchesCard
                key={id}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                branchTitle={branchTitle}
                branchAddress={branchAddress}
                branchLink={branchLink}
              ></BranchesCard>
            </div>
          );
        }
      )}
    </section>
  );
};

export default Branches;
