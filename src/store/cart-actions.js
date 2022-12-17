import { cartActions } from "./cartSlice";
import { uiSliceActions } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-http-e1a14-default-rtdb.europe-west1.firebasedatabase.app/cartItem.json"
      );
      const data = await res.json();
      return data;
    };

    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          open: true,
          message: "Sending Request Failed!",
          type: "error",
        })
      );
    }
  };
};

export const sendCardData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      // Send state as Sending Request
      dispatch(
        uiSliceActions.showNotification({
          open: true,
          message: "Sending Request",
          type: "warning",
        })
      );

      const res = await fetch(
        "https://redux-http-e1a14-default-rtdb.europe-west1.firebasedatabase.app/cartItem.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      dispatch(
        uiSliceActions.showNotification({
          open: true,
          message: "Sent Request to Database Successfully",
          type: "success",
        })
      );
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          open: true,
          message: "Sending Request Failed!",
          type: "error",
        })
      );
    }
  };
};
