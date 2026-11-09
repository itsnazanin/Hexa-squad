import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getCartApi,
  addToCartApi,
  removeFromCartApi,
  checkoutApi,
  payOrderApi,
} from "@/core/services/api/cart.api";

import { useAuth } from "@/components/Auth/AuthContext";

import {
  getGuestCart,
  addGuestCartItem,
  removeGuestCartItem,
} from "@/features/cart/utils/guestCart";

const getGuestCartData = () => {
  const items = getGuestCart();

  return {
    cart: {
      id: null,
      status: "PENDING",
      items: items.map((item) => ({
        id: item.courseId,
        courseId: item.courseId,
        price: item.price,
        course: item.course,
      })),
      totalPrice: items.reduce(
        (total, item) => total + item.price,
        0
      ),
    },
  };
};

export const useCart = () => {
  const { user, isAuthenticated, loading } = useAuth();

  return useQuery({
    queryKey: ["cart", isAuthenticated ? user?.id : "guest"],

    queryFn: () => {
      return isAuthenticated
        ? getCartApi()
        : getGuestCartData();
    },

    enabled: !loading,
    staleTime: 1000 * 60,
  });
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const { isAuthenticated } = useAuth();

  return useMutation({
    mutationFn: (course) => {
      if (isAuthenticated) {
        return addToCartApi(course.id);
      }

      return addGuestCartItem(course);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
};

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();
  const { isAuthenticated } = useAuth();

  return useMutation({
    mutationFn: (courseId) => {
      if (isAuthenticated) {
        return removeFromCartApi(courseId);
      }

      return removeGuestCartItem(courseId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
};

export const useCheckout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: checkoutApi,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });

      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });
};



export const usePayOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (orderId) => payOrderApi(orderId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });

      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });

      queryClient.invalidateQueries({
        queryKey: ["purchased-courses"],
      });
    },
  });
};
