import React, { useEffect, useState } from "react";
import "./ProductReview.css";
import { useProducts } from "../context/ProductContextProvider";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider"; // Import your authentication context

const ProductReview = () => {
  const { user } = useAuthContext(); // Assuming you have an authentication context
  const { addComment, oneProduct, getComments, comments, getOneProduct } =
    useProducts();
  const [obj, setObj] = useState({
    comment: "",
  });
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
    getComments(id);
  }, [id]);

  const handleAdd = () => {
    if (!user) {
      // Check if the user is logged in before allowing to add comments
      alert("Please log in to add comments.");
      return;
    }

    const newComment = [...oneProduct.comments, obj];
    let updatedObj = {
      ...oneProduct,
      comments: newComment,
    };
    addComment(id, updatedObj);
    setObj({ comment: "" });
  };

  return (
    <div className="main-container">
      <h2 className="comment-text">Comments</h2>
      {Array.isArray(comments) &&
        comments.map((elem) => (
          <div key={elem.id} className="comment-container">
            {elem.comment}
          </div>
        ))}

      {user && (
        <div className="comment-flexbox">
          <textarea
            value={obj.comment}
            onChange={(e) => setObj({ ...obj, comment: e.target.value })}
            className="input-box"
          />
          <button className="comment-button" onClick={handleAdd}>
            Add Comment
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductReview;
