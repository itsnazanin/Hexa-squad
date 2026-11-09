import { apiClient } from "@/core/api/apiClient";
import { getApiLanguage } from "@/core/utils/language";


export const getCartApi = async () => {
    const language = getApiLanguage(
        localStorage.getItem("language") || "fa"
    )

    const response = await apiClient.get("/orders/cart" , {
        params: {
            lang:language
        }
    })

    return response.data
}


export const addToCartApi = async ( courseId ) => {
 const response = await apiClient.post("/orders/cart", {
    courseId
 })

 return response.data
}


export const removeFromCartApi = async ( courseId) => {
    const response = await apiClient.delete(`/orders/cart/${courseId}`)

    return response.data
}


export const checkoutApi = async () => {
    const response = await apiClient.post("/orders/checkout")

    return response.data
}

export const guestCheckoutApi = async (data) => {
  const response = await apiClient.post("/orders/guest-checkout", data);

  return response.data;
};

export const guestPayOrderApi = async ({ orderId, guestCheckoutToken }) => {
  const response = await apiClient.post(
    `/orders/guest/${orderId}/pay`,
    {},
    {
      headers: {
        "x-guest-checkout-token": guestCheckoutToken,
      },
    }
  );

  return response.data;
};



export const payOrderApi = async (orderId) => {
  const response = await apiClient.post(`/orders/${orderId}/pay`);

  return response.data;
};
