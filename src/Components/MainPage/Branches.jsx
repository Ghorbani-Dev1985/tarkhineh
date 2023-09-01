import BranchesCard from "../../Common/BranchesCard";

import BarnchInfo from './../../util/Branches';
const Branches = () => {
  return (
    <section className="w-full grid grid-cols-12 gap-3 md:gap-6">
      {BarnchInfo.map(
        ({ id, imgSrc, imgAlt, branchTitle, branchAddress, branchLink }) => {
          return (
            <div key={id} className="col-span-12 md:col-span-3 h-full flex">
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
