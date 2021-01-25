import { GET_SUBSCRIBERS, ADD_SUBSCRIBER } from "../actions/actionTypes";

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
      console.log("inside the get subscriber reducer");
      return {
        ...state,
        subscribers: action.payload,
      };
    case ADD_SUBSCRIBER:
      return {
        ...state,
        subscribers: [...state.subscribers, action.payload],
      };
    default:
      return state;
  }
}
