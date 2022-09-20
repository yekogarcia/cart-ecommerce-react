
import { Spinner } from "react-bootstrap";
import "./Loading.scss";

export const Loading = () => {
  return (
    <div className="loading">
        <Spinner animation="border" role="status" />
        <h5>Cargando...</h5>
    </div>
  )
}
