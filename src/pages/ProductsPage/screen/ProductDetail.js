import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import products from "../../../data/product_data";
import ProductModal from "../../../components/ProductModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneProduct } from "../../../http/catalogAPI";
import { getProductsByName } from "../../../redux/actions/products";

function ProductDetail() {
  const [singleProduct, setSingleProduct] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector(({ products }) => {
    return {
      products: products.items,
      productsLoad: products.isLoaded,
    };
  });

  const findProduct = async () => {
    let product = await fetchOneProduct(id);
    setSingleProduct(product);
  };

  useEffect(() => {
    findProduct();
  }, [id]);

  useEffect(() => {
    dispatch(getProductsByName(singleProduct.productName));
  }, [singleProduct]);

  return (
    <Wrapper>
      <p className="section-hierarchy">
        {"Главная > "}
        {/* {singleProduct?.type} */}
        {/* {" > "} */}
        {singleProduct?.categoryName}
        {" > "}
        {singleProduct?.productName}
      </p>

      <ProductModal product={singleProduct} similarProducts={state.products} />

      <div className="about-content">
        <div className="product-characteristics">
          <h2 className="about-title title">ХАРАКТЕРИСТИКИ</h2>
          <ul>
            <li className="about-item">{singleProduct?.material}</li>
            <li className="about-item">{singleProduct?.brandName}</li>
            <li className="about-item">{singleProduct?.characteristic1}</li>
            <li className="about-item">{singleProduct?.characteristic2}</li>
          </ul>
        </div>

        <div className="product-id">
          <h2 className="about-title title">КОД ТОВАРА</h2>
          <p className="about-item">{singleProduct?.id}</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  padding: 1.875vw 13.125vw 11.25vw;

  .section-hierarchy {
    font-size: 1vw;
    font-weight: 500;
    color: var(--clr-primary-4);
  }

  .about-content {
    display: flex;
    margin: 5.625vw 0 0 6.25vw;
  }

  .product-characteristics,
  .product-id {
    width: 17.5vw;
  }

  .about-title {
    font-size: 1.375vw;
    font-weight: 500;
    color: var(--clr-primary-4);
  }

  .about-item {
    font-size: 1.125vw;
    font-weight: 400;
    margin: 0.625vw 0 0.84375vw;
    list-style: inside;
  }

  @media (max-width: 480px) {
    background-color: var(--clr-primary-6);
    padding: 1.875rem 5.556vw 3.75rem;

    .section-hierarchy {
      display: none;
    }

    .about-content {
      flex-direction: column;
      margin: 1.875rem 0 0;
    }

    .product-characteristics,
    .product-id {
      width: 100%;
      margin-top: 0.625rem;
    }

    .about-title {
      font-size: 20px;
      margin-bottom: 0.625rem;
    }

    .about-item {
      font-size: 16px;
      line-height: 1.875rem;
      margin: 0;
    }
  }
`;

export default ProductDetail;
