import React from 'react'
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from './Asset';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
        <Asset
        src={NoResults}
        message={`Sorry, the page your're looking for doesn't exist`}
        />
        </div>
  )
}

export default NotFound