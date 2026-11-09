const GUEST_CART_KEY = "guest-cart";

export const getGuestCart = () => {
  try {
    const cart = localStorage.getItem(GUEST_CART_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

export const addGuestCartItem = (course) => {
  const cart = getGuestCart();

  const alreadyExists = cart.some(
    (item) => item.courseId === course.id
  );

  if (alreadyExists) {
    throw new Error("این دوره از قبل در سبد خرید شما وجود دارد.");
  }

  const updatedCart = [
    ...cart,
    {
      courseId: course.id,
      price: course.price,
      course,
    },
  ];

  localStorage.setItem(
    GUEST_CART_KEY,
    JSON.stringify(updatedCart)
  );

  return updatedCart;
};

export const removeGuestCartItem = (courseId) => {
  const updatedCart = getGuestCart().filter(
    (item) => item.courseId !== courseId
  );

  localStorage.setItem(
    GUEST_CART_KEY,
    JSON.stringify(updatedCart)
  );

  return updatedCart;
};

export const clearGuestCart = () => {
  localStorage.removeItem(GUEST_CART_KEY);
};