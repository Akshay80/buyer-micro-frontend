"use client"
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const createProductFeedback = /* GraphQL */ `
  mutation CreateProductFeedback(
    $input: CreateProductFeedbackInput!
    $condition: ModelProductFeedbackConditionInput
  ) {
    createProductFeedback(input: $input, condition: $condition) {
      id
      productId
      buyerUserId
      comment
      isVerified
      rating
      media
      createdAt
      updatedAt
      productFeedbackSellerId
      __typename
    }
  }
`;

interface AddReviewProps {
    userId?: string;
    productId: string;
    // list?:any
}

const AddReview: React.FC<AddReviewProps> = ({productId, userId}) => {
    const [show, setShow] = useState<any>(null);
    const [rating, setRating] = useState<any>(0)
    const [comments, setComments] = useState<string>("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleStarClick = (selectedRating: number) => {
        setRating(selectedRating);
      };
    
      const renderStars = () => {
        const maxRating = 5;
        const stars = [];

        for (let i = 1; i <= maxRating; i++) {
            stars.push(
              rating >= i ? (
                <i className={`bi bi-star-fill text-warning me-2 cursor-pointer`} key={i}  onClick={() => handleStarClick(i)} />
              ) : (
                <i className={`bi bi-star text-warning me-2 cursor-pointer`} key={i}  onClick={() => handleStarClick(i)} />
              )
            );
          }
    
        return stars;
      };

      const handleSubmit = async (e:any) =>{
         e.preventDefault();
         handleClose();
         setRating(null)
         setComments("")
        
         const data = {
          buyerUserId: userId,
          productId: productId,
          comment: comments,
          rating: rating,
         }

         await API.graphql<GraphQLQuery<any>>({
          query: createProductFeedback,
          variables: { input: data }
        });
      }

  return (
    <>
    <Modal show={show} onHide={handleClose} centered>
            <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Create Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <label htmlFor="validationTextarea" className="form-label">Comments</label>
            <div>{renderStars()}</div>
            </div>

           <div className='mt-3'>
           <label htmlFor="validationTextarea" className="form-label">Comments</label>
            <textarea
             className="form-control" 
             id="validationTextarea" 
             placeholder='What Did you like or dislike?' 
             rows={4} required  
             value={comments} onChange={(e:any)=> setComments(e.target.value)} 
             />
           </div>
            
            {/* <div className="invalid-feedback">
                Please enter a message in the textarea.
            </div> */}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className='btn btn-dark' type='submit'>
            Save Changes
          </button>
        </Modal.Footer>
            </form>
      </Modal>
    <button className="btn btn-dark mt-3" onClick={handleShow} style={{width: 'fit-content'}}>Write a Product Review</button>
    </>
  )
}

export default AddReview