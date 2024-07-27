import React from "react";
import SkeletonElements from "./SkeletonElements";
import Shimmer from "./Shimmer";

const SkeletonArticles = ({ theme }) => {
    const themeClass = theme || 'light'
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <SkeletonElements type='title' />
                <SkeletonElements type='text' />
                <SkeletonElements type='text' />
                <SkeletonElements type='text' />
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonArticles;