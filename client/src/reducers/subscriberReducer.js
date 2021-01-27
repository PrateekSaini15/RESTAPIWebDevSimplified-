import {
  GET_SUBSCRIBERS,
  ADD_SUBSCRIBER,
  DELETE_SUBSCRIBER,
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
      console.log("inside delete subscriber reducer");
      console.log(action.payload._id);
      return {
        ...state,
        subscribers: state.subscribers.filter(
          (subscriber) => subscriber._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
}
