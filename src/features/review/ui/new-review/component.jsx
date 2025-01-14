import { useReducer } from "react";
import { SetRate } from "../../../rate/ui/set-rate/component";

import styles from "./styles.module.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { userName: action.payload, text: "", rating: 0 };
    case "changeText":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export const NewReview = ({ onSubmit }) => {
  const [state, dispatch] = useReducer(reducer, {
    userName: "DefaultName",
    text: "text",
    rating: 0,
  });

  return (
    <div className={styles.root}>
      <span className={styles.title}>Set Your review here!</span>
      <div className={styles.formElement}>
        <span className={styles.elementTitle}>Name</span>
        <input
          value={state.userName}
          onChange={(event) => {
            dispatch({ type: "changeName", payload: event.target.value });
          }}
        />
      </div>
      <div className={styles.formElement}>
        <span className={styles.elementTitle}>Review</span>
        <input
          value={state.text}
          onChange={(event) => {
            dispatch({ type: "changeText", payload: event.target.value });
          }}
        />
      </div>
      <div className={styles.formElement}>
        <SetRate rating={state.rating} onChange={(value) => {
            dispatch({ type: "setRating", payload: value });
        }} />
      </div>
      <button onClick={() => onSubmit(state)}>Submit</button>
    </div>
  );
};
