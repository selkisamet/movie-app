import React from "react";
import Loading from "@/app/components/loading";
import styles from "./styles.module.css";

function FeatureMovieLoading() {
    return (
        <div style={{ height: 278 }} className={styles.movieWrapper}>
            <Loading />
        </div>
    );
}

export default FeatureMovieLoading;
