import React from "react";
import ClassComponents from "./ClassComponents.jsx";
import FunctionalComponent from "./FunctionalComponents.jsx";

class IndexComponent extends React.Component {
    render () {
        return (
            <div>
                <ClassComponents nama="Sinur" />
                <div>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
                <FunctionalComponent />
            </div>
        )
    }
}

export default IndexComponent;