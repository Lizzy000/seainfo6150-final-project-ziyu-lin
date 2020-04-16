import React from 'react';
import styles from "./Photo.module.css";

const Photo = (props) => {
    return (
        <div className={styles.container}>
        	<h1>Photo</h1>
        	<img className={styles.pic1} alt="pic1" src="/images/test1.jpg" />
        	<img className={styles.pic2} alt="pic2" src="/images/test2.jpg" />
        	<img className={styles.pic3} alt="pic3" src="/images/test3.jpg" />
        	<img className={styles.pic4} alt="pic4" src="/images/test4.jpg" />
        </div>
    );
};

export default Photo;