export default function CategoryLoader()  { 
    return (
        <>
            <div className="container-fluid my-5">
            <div className="row mt-5">
               <div className="col-lg-2 mb-5 m-0 p-1">
               <div className="card-product skelton" style={{height: '500px'}}> </div>
               </div>
               <div className="col-lg-10 m-0 p-1">
               <div className="row">
               <div className="card mb-4 bg-light border-0 skelton py-5 mx-5">
                <div className=" card-body p-9">
                    <h2 className="mb-0 fs-1"></h2>
                </div>
                </div>
               {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((item:any, index: number) =>{                  
                        return (
                            <div className="col-xl-2 col-lg-3 col-sm-3 col-md-4 col-6 mb-4 " key={index}>
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
            </div>
            </div>
        </>
      )
    }
    
    