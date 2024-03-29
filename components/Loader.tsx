

export default function Loader()  { 
    return (
        <>
            <div className="container-fluid my-5">
            <div className="row g-5 mt-5">
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((item:any, index: number) =>{                  
                        return (
                            <div className="col-xl-2 col-lg-3 col-sm-3 col-md-4 col-6 mb-4 " key={index} >
                                <div className="card-product skelton" style={{height: '200px'}}>
                                </div>
                                  <div className="card-body py-3 mt-3 skelton skeleton-text">
                                    <p className="text-truncate skelton skeleton-text mb-3" style={{fontSize: '16px'}}></p>
                                    <div className="d-flex justify-content-center skelton skeleton-text mb-3">
                                    <p className="text-truncate skelton skeleton-text mb-3 me-3" style={{fontSize: '14px'}}></p>
                                    <p className="text-truncate skelton skeleton-text" style={{fontSize: '14px'}}></p>
                                    </div>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
            </div>
        </>
      )
    }
    
    