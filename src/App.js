import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <h1>👕 Angel Clothes</h1>
      <p>Welcome to your new clothing brand website!</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginTop: "30px" }}>
        <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "15px" }}>
          <img src="https://via.placeholder.com/200x250" alt="T-Shirt" style={{ width: "100%", borderRadius: "10px" }} />
          <h3>Classic T-Shirt</h3>
          <p>₹499</p>
          <button style={{ padding: "10px 20px", background: "black", color: "white", border: "none", borderRadius: "5px" }}>Add to Cart</button>
        </div>

        <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "15px" }}>
          <img src="https://via.placeholder.com/200x250" alt="Hoodie" style={{ width: "100%", borderRadius: "10px" }} />
          <h3>Trendy Hoodie</h3>
          <p>₹999</p>
          <button style={{ padding: "10px 20px", background: "black", color: "white", border: "none", borderRadius: "5px" }}>Add to Cart</button>
        </div>

        <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "15px" }}>
          <img src="https://via.placeholder.com/200x250" alt="Jeans" style={{ width: "100%", borderRadius: "10px" }} />
          <h3>Denim Jeans</h3>
          <p>₹1299</p>
          <button style={{ padding: "10px 20px", background: "black", color: "white", border: "none", borderRadius: "5px" }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
