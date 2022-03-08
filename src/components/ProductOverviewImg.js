import { Link } from "react-router-dom";

export const ProductOverviewImg = ({
    imgName,
    pageNumber,
    className = "overview_img",
    containerClass = "overview_img_container",
    productName
  }) => {
    return (
      <div className={containerClass}>
        <div className="productname">{productName}</div>
        <Link to={`../productpage/${pageNumber}`}>
          <img
            className={className}
            src={require(`../images/photo/${imgName}`)}
          />
        </Link>
      </div>
    );
  };