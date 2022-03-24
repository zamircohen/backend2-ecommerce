const Product = ({name, price, discountPrice, image}) => (
    <div className="col mb-5">
        <div className="card h-100">
            {discountPrice &&
              <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
            }
            <img className="card-img-top" src={image} alt={name} />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{name}</h5>
                    {discountPrice
                      ? <><span className="text-muted text-decoration-line-through">{price}</span> {discountPrice}</>
                      : price
                    }:-
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
                </div>
            </div>
        </div>
    </div>
);

export default Product;
