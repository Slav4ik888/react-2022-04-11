import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts/routes";
import styles from './styles.module.scss';

export const NotFoundPage = () => {

  return (
    <div className={styles.root}>
      <div>Page not found</div>
      <Link
        to={ROUTES.Restaurants}
        className={styles.link}
      >
        Go main
      </Link>
    </div>
  )
}