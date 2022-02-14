import { Link } from "react-router-dom";

export const ProductOverviewImg = ({
    imgName,
    pageNumber,
    className = "overview_img",
    containerClass = "overview_img_container",
  }) => {
    return (
      <div className={containerClass}>
        <Link to={`../productpage/${pageNumber}`}>
          <img
            className={className}
            src={require(`../images/photo/${imgName}`)}
          />
        </Link>
      </div>
    );
  };