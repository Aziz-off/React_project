import React, { useEffect, useState } from 'react';
import './ProductReview.css'; // Import your CSS file
import { useProducts } from '../context/ProductContextProvider';
import { useParams } from 'react-router-dom';

const ProductReview = () => {
  const { addComment, oneProduct, getComments, comments, getOneProduct } = useProducts();
  const [obj, setObj] = useState({
    comment: ''
  });
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
    getComments(id)
  }, [id]);
  
  const handleAdd = () => {
    const newComment = [...oneProduct.comments, obj]
    let updatedObj = {
      ...oneProduct,
      comments: newComment
    }
    addComment(id, updatedObj)
    setObj({ comment: '' });
  };
  
  return (
    <div className='main-container'>
      <h2 className='comment-text'>Comments</h2>
      {Array.isArray(comments) &&
  comments.map((elem) => (
    <div key={elem.id} className='comment-container'>
      {elem.comment}
    </div>
  ))}

      <div className='comment-flexbox'>
        <textarea
          value={obj.comment}
          onChange={(e) => setObj({...obj, comment: e.target.value})}
          className='input-box'
        />
        <button className='comment-button' onClick={handleAdd}>
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default ProductReview;
