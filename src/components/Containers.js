import React from "react";

import Welcome from "./contents/Welcome";
import AboutMe from "./contents/AboutMe";
import VirtualPiano from "./contents/VirtualPiano";
import Sorting from "./contents/Sorting";

const func = {
  "Welcome": <Welcome/>,
  "AboutMe": <AboutMe/>,
  "VirtualPiano": <VirtualPiano/>,
  "Sorting": <Sorting/>,
};
export default function Containers({ selectedContainer }) {
  if (func[selectedContainer]) {
    return func[selectedContainer];
  } else {
      return <div>sdsadas</div>;
  }
}
