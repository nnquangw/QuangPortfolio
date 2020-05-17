import React from "react";
import Welcome from "./contents/Welcome";
import GeneralInformation from "./contents/GeneralInformation";

export default function Containers({ selectedContainer }) {
    if (selectedContainer === "Welcome") {
        return <Welcome />
    }
    return (<div>sdsadas</div>);
}
