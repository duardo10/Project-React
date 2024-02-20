import React from "react";
import ComponentProps from "./componentprops";

function AppProps() {
    return(
        <div>
            <h1>Compoente Pai</h1>
            < ComponentProps nome="Luis" idade={20} />
        </div>
    );
}

export default AppProps;