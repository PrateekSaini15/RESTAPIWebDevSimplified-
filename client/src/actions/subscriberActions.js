import {
  GET_SUBSCRIBERS,
  ADD_SUBSCRIBER,
  DELETE_SUBSCRIBER,
} from "./actionTypes";
import axios from "axios";

export const getSubscribers = () => (dispatch) => {
  axios
    .get(`http://localhost:5000/subscribers`)
    .then((res) => dispatch({ type: GET_SUBSCRIBERS, payload: res.data }))
    .catch((error) => console.log(error.message));
};

export const addSubscriber = (subscriber) => (dispatch) => {
  axios
    .post("http://localhost:5000/subscribers", { subscriber })
    .then((res) => dispatch({ type: ADD_SUBSCRIBER, payload: res.data }))
    .catch((error) => console.log(error.message));
};

export const deleteSubscriber = (subscirberId) => (dispatch) => {
  axios
    .delete("http://localhost:5000/subscribers/" + subscirberId)
    .then((res) => dispatch({ type: DELETE_SUBSCRIBER, payload: res.data }))
    .catch((error) => console.log(error.message));
};
