import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
import Description from "../Components/Description/Description";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { id } = useParams();
  // console.log(productId);
  const product = all_product.find((e) => e.id === Number(id));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDetail product={product} />
      <Description />
      <RelatedProducts />
    </div>
  );
};

export default Product;
