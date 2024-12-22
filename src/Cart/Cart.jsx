function Cart(isActive, onShow) {
  return (
    <>
      {isActive ? (
        <button>Hello</button>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
    </>
  );
}

export default Cart;
