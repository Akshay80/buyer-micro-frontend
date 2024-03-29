
/* eslint-disable */

export interface SuccessCardProps {image:string,category:string,heading:string,text:string}

export function SuccessCard({image,category,heading,text}: SuccessCardProps) {
  return (
    <div className="card">
    <img src ={image} className="w-100"/>
    <i className="mt-3">{category}</i>
    <h6 className="mt-3">{heading}</h6>
    <p className="mt-3">{text}</p>
  </div>
  );
}

export default SuccessCard;
