import classes from "../WhatWeDo/WhatWeDo.module.css";
import WhatWeDoSection1 from "./WhatWeDoSection1";
import WhatWeDoSection2 from "./WhatWeDoSection2";
import WhatWeDoSection3 from "./WhatWeDoSection3";

const WhatWeDo = () => {
  return (
    <div className={classes.WhatWeDo}>
      <div className={classes.WWDsection1}>
        <WhatWeDoSection1 />
      </div>

      <div className={classes.WWDsection2}>
     
        <WhatWeDoSection2/>
      </div>

      <div className={classes.WWDsection3}>
        <WhatWeDoSection3/>
      </div>
    </div>
  );
};
export default WhatWeDo;
