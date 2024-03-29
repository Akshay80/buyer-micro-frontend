
/* eslint-disable */
export interface BlogCardProps {image:string,heading:string, text:string,date:string, readtime:string}

 function BlogCard({image,heading,text,date,readtime}: BlogCardProps) {
  return (
    <div className="card cursor-pointer py-3">
    <div className="mb-4">
        <div className="img-zoom">
          <img src={image} className="img-fluid w-100" />
        </div>
    </div>
    <div>
      <h2 className="h5 ">{heading}</h2>
      <p>{text}</p>
      <div className="d-flex justify-content-between text-muted mt-4"><span><small>{date}</small></span><span><small>Read time: <span className="text-dark fw-bold">{readtime}</span></small></span>
      </div>
    </div>
  </div>
  );
}

export default BlogCard;
