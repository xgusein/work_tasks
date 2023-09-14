import React, { Fragment } from "react";

import Animation from './Cool-CSS-Loader.gif'

export const Loader = () => {
    return
    <Fragment>
        <img src={Animation} style={{ display:'block', margin: 'auto'}} />
    </Fragment>
};

export default Loader;