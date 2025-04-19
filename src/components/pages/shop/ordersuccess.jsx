import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center p-4 bg-white shadow-lg rounded">
        <h2 className="text-success">🎉 Order Placed Successfully!</h2>
        <p className="text-muted">Thank you for shopping with us!</p>
        <Link to="/" className="btn btn-primary mt-3">Go back to Home</Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
