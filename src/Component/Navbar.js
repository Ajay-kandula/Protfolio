import React from "react";

function Nabvar() {
  return (
    <div
      style={{
        display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "20px",
                margin: "20px 5px",
                backgroundColor: "#002e63",
                color: "white"
      }}
    >
     
      <nav
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          padding: '10px'
        }}
      >
        {["About", "Projects", "Drives Me", "Education", "Experience"].map((label, index) => (
          <a key={index} href={`#${label.toLowerCase().replace(" ", "")}`}>
            <button style={buttonStyle}>{label}</button>
          </a>
        ))}
      </nav>

      
      <div
        id="mycontact"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "40px",
          margin: "10px",
          backgroundColor: "#002e63",
          color: "white",
        }}
      >
        <div style={{ flex: "1 1 300px", marginBottom: "20px" }}>
          <h1 style={{
            fontSize: "50px",
            fontFamily: "Merriweather",
            whiteSpace: 'nowrap',
            color: "white"
          }}>
            Hi, I'm Kandula Ajay
          </h1>
          <p style={{ fontSize: "20px" }}>
            I'm a Web Developer with 2 years of experience using React.js, Node.js,
            HTML, CSS, and JavaScript.
          </p>
          <a href="#contact">
            <button style={ctaStyle}>Reach Out</button>
          </a>
        </div>

        <div style={{ flex: "1 1 300px", textAlign: 'right', paddingLeft: "30px" }}>
          <img
            src="https://i.ibb.co/5WL7jPSJ/AJayk.jpgs"
            alt="Ajay Kandula"
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              objectFit: 'cover',
              boxShadow: '0 10px 20px yellow',
              transition: 'transform 0.3s ease-in-out'
            }}
          />
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  backgroundColor: 'white',
  border: 'none',
  borderRadius: "8px",
  width: '150px',
  padding: '10px',
  fontWeight: 'bold',
  color: '#002e63'
};

const ctaStyle = {
  color: "white",
  backgroundColor: '#b31b1b',
  border: 'none',
  borderRadius: "8px",
  width: '200px',
  padding: '10px',
  fontWeight: 'bold',
  fontFamily: 'serif',
  fontSize: "20px"
};

export default Nabvar;
