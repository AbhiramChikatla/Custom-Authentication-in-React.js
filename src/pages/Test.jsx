import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Test = () => {
    return (
        <div>
            <p>
                <Skeleton count={3} />
            </p>
        </div>
    );
};

export default Test;
