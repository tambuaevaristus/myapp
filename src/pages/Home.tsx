import React from "react";
import { ProductList } from "../components/ProductList";
interface Props {
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}
export const Home = (props: Props) => {
  return (
    <div>
      <ProductList setTotal={props.setTotal} />
    </div>
  );
};
