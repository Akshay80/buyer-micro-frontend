/* eslint-disable*/
export interface LogCardProps {from:string, to:string, price:string, days:string,weight:string,logistics:string}

function LogCard({from, to, price, days, weight, logistics}: LogCardProps) {
  return (
    <div className="card py-2 bg-light">
      <div className="row">
        <div className="col-3"><b className="text-primary"><i className="bi bi-geo-alt-fill"></i>{from}</b></div>
        <div className="col-6"></div>
        <div className="col-3"><b className="text-primary">{`USD ${price}`}</b></div>
      </div>
      <div className="row mt-4">
        <div className="col-4">
          <i>{`Est. ${days} business days`}</i>
        </div>
        <div className="col-4">

        </div>
        <div className="col-4">
          <i>{`(Default load: ${weight})`}</i>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <b className="text-primary"><i className="bi bi-geo-alt-fill"></i>{to}</b>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <u>{logistics}</u>
        </div>
      </div>
    </div>
  );
}

export default LogCard;
