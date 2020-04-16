import React from "react";
import styles from "./Error.module.css";

const Error = props => {
	
	return (
		<div className={styles.container}>
      <h1 className={styles.header}> 404 </h1>
      <h2 className={styles.message}>Page Not Found!</h2>
      <img className={styles.error} alt="404" src="/images/404.jpg" />
    </div>		
	);
};

export default Error;