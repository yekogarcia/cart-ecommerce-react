import { Container, Row } from "react-bootstrap";
import { Loading } from "../Loading/Loading";
import { Product } from "../Product/Product";

import "./Products.scss";

export const Products = (props) => {
  const {
    products: { result, loading, error },
    addProductCart,
  } = props;
  return (
    <Container>
      <Row>
        {loading || !result ? (
          <Loading />
        ) : (
          result.map((product, index) => (
            <Product
              key={index}
              product={product}
              addProductCart={addProductCart}
            />
          ))
        )}
      </Row>
    </Container>
  );
};
