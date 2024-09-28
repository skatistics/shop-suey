import CartListItem from "../CartListItem";

function CartList() {
  return (
    <div>
      <div className="h-[600px] fixed w-72 right-7 overflow-hidden hover:overflow-y-scroll transition-all hover:scrollbar-thin hover:scrollbar-webkit border-black border-2 top-[110px] hover:w-[303px] hover:right-[13px]">
        <div>
          <CartListItem />
          <CartListItem />
          <CartListItem />
          <CartListItem />
          <CartListItem />
          <CartListItem />
          <CartListItem />
          <CartListItem />
        </div>
      </div>
    </div>
  );
}

export default CartList;
