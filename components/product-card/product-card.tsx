import Link from 'next/link';

export function ProductCard(props: any) {
  return (
    <div className="col" key={props.key}>
      <div className="card cursor-pointer h-100">
        <Link href={`/product/${props.product.id}`}>
          <div className="card-body">
            <div className="text-center position-relative">
              {/* <div className=" position-absolute top-0 start-0 d-flex gap-1">
                <span className="badge bg-success">{discount}</span>
                <span className="badge bg-danger">{badgeText}</span>
              </div> */}
              <img src={props.product.image} alt="Product" className="mb-3 img-fluid" style={{ height: '200px', objectFit: 'contain' }} />
            </div>
            <div className="text-small mb-1">
              <a href="#!" className="text-decoration-none text-muted">
                <small>{props.product.productSubCategory?.name}</small>
              </a>
            </div>
            <h2 className="fs-6 mb-0">
              <span className="text-inherit text-decoration-none text-primary">
                {props.product.name}
              </span>
            </h2>

            <div>
              <span className='small text-warning'>
                {
                  [1, 2, 3, 4, 5].map((star, index) => <i key={index} className={`bi bi-star${props.product.rating >= star ? '-fill' : ''} me-1`} />)
                }
              </span>
              <span className='small text-muted'>({props.product.rating || 0})</span>
            </div>

            <div className="d-flex justify-content-between mt-2">
              {
                props.product.priceRange ?
                  <div>
                    <span className="text-dark">{props.product.priceRange}</span>{' '}
                  </div>
                  : <div>
                    <span className="text-dark">${props.product.listPrice}</span>{' '}
                    {
                      props.product.unitPrice && <span className="text-decoration-line-through text-muted">
                        ${props.product.unitPrice}
                      </span>
                    }
                  </div>
              }
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;