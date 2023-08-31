import { Typography } from "@material-tailwind/react";
const Section = ({children , sectionTitle}) => {
    return ( 
        <section className="container p-1 md:p-0 flex flex-col items-center mx-auto my-8 text-nautral-700">
        <Typography variant="h2" className="mb-3 md:mb-6">{sectionTitle}</Typography>
       {children}
      </section>
     );
}
 
export default Section;