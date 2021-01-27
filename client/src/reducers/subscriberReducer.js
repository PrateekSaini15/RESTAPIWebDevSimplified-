import {
  GET_SUBSCRIBERS,
  ADD_SUBSCRIBER,
  DELETE_SUBSCRIBER,
  UPDATE_SUBSCRIBER,
} from "../actions/actionTypes";

const initialState = {
  subscribers: [],
  subscriber: {
    name: "",
    subscribedToChannel: "",
    subscribeDate: "",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SUBSCRIBERS:
      return {
        ...state,
        subscribers: action.payload,
      };
    case ADD_SUBSCRIBER:
      return {
        ...state,
        subscribers: [...state.subscribers, action.payload],
      };
    case DELETE_SUBSCRIBER:
      return {
        ...state,
        subscribers: state.subscribers.filter(
          (subscriber) => subscriber._id !== action.payload._id
        ),
      };
    case UPDATE_SUBSCRIBER:
      return state;
    default:
      return state;
  }
}
