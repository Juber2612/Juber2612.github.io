import React, { useState, useEffect } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  // Load feedbacks from localStorage on mount
  useEffect(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    if (savedFeedbacks) {
      setFeedbacks(JSON.parse(savedFeedbacks));
    }
  }, []);

  // Save feedbacks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert("Please enter both name and message!");
      return;
    }

    const newFeedback = {
      id: Date.now(),
      name,
      message,
    };

    setFeedbacks([newFeedback, ...feedbacks]); // newest first
    setName("");
    setMessage("");
  };

  // Delete feedback
  const handleDelete = (id) => {
    setFeedbacks(feedbacks.filter((fb) => fb.id !== id));
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Customer Feedback</h2>
        <p className="text-muted">
          Your opinion matters! Share your thoughts with us.
        </p>
      </div>

      {/* Feedback Form */}
      <div className="card shadow-lg p-4 mb-5">
        <h4 className="mb-3">Leave a Feedback</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your feedback..."
              rows="3"
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Feedback List */}
      <h4 className="mb-3">What People Say</h4>
      {feedbacks.length === 0 ? (
        <p className="text-muted">No feedback yet. Be the first to share!</p>
      ) : (
        <div className="row">
          {feedbacks.map((fb) => (
            <div key={fb.id} className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">{fb.name}</h5>
                  <p className="card-text">{fb.message}</p>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(fb.id)}
                  >
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Feedback;
