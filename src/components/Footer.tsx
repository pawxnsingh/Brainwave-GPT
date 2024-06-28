import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
   return (
      <Section className="!px-0 !py-10" crosses>
         <div className="container flex sm:justify-between items-center flex-row justify-center max-sm:flex-col gap-10">
            <p className="caption text-n-4 lg:block">
               © {new Date().getFullYear()}. All rights reserved.
            </p>

            <div className="flex gap-5 flex-wrap">
               {socials.map((item) => (
                  <a
                     className="border flex items-center justify-center p-3 rounded-full bg-n-7 border-n-7 hover:border-n-6 "
                     key={item.id}
                     href={item.url}
                  >
                     <img
                        width={16}
                        height={16}
                        src={item.iconUrl}
                        alt={item.title}
                     />
                  </a>
               ))}
            </div>
         </div>
      </Section>
   );
};

export default Footer;
