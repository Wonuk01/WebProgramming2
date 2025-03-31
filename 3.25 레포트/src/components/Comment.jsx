const Comment = ({ name, text, time }) => {
    return (
      <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
        <h4>{name}</h4>
        <p>{text}</p>
        <small>{time}</small>
      </div>
    );
  };
  
  export default Comment;
  