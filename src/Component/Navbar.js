import React from "react";

function Nabvar() {
  const AjayImage = 'https://i.ibb.co/5WL7jPSJ/AJayk.jpgs';

  return (
    <div
      style={{
        justifyContent: 'space-between',
        marginRight: '5px',
        fontSize: "30px",
        border: '1px solid #ccc',
        borderRadius: "10px",
        padding: '10px',
        backgroundColor: '#002e63'
      }}
    >

      <nav style={{ textAlign: 'center', marginBottom: '20px' }}>
        <a href="#about">
          <button style={buttonStyle}>About</button>
        </a>
        <a href="#project">
          <button style={buttonStyle}>Projects</button>
        </a>
        <a href="#drives">
          <button style={buttonStyle}>Drives Me</button>
        </a>
        <a href="#education">
          <button style={buttonStyle}>Education</button>
        </a>
        <a href="#experience">
          <button style={buttonStyle}>Experience</button>
        </a>
      </nav>
      <div
        id="mycontact"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
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
            fontSize: "60px",
            marginLeft: "5px",
            marginTop: "10px",
            fontFamily: "Merriweather",
            color: "white"
          }}>
            Hi, I'm Kandula Ajay
          </h1>
          <p style={{ fontFamily: 'initial', fontSize: "25px" }}>
            I'm a Web Developer with 2 years of experience using React.js, Node.js,
            HTML, CSS, and JavaScript. Reach out if you'd like to learn more!
          </p>
          <a href="#contact">
            <button style={{
              color: "white",
              backgroundColor: '#b31b1b',
              border: 'none',
              borderRadius: "8px",
              width: '200px',
              padding: '10px',
              fontWeight: 'bold',
              fontFamily: 'serif',
              fontStyle: 'oblique',
              fontSize: "25px"
            }}>
              Reach Out
            </button>
          </a>
        </div>

        <div style={{ flex: "1 1 300px", textAlign: "center" }}>
          <img
            src={AjayImage}
            alt="Ajay Kandula"
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              objectFit: 'cover',
              boxShadow: '0 10px 20px rgb(235, 255, 16)',
              transition: 'transform 0.3s ease-in-out'
            }}
          />
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  color: 'black',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: "8px",
  width: '150px',
  padding: '10px',
  textDecoration: 'none',
  margin: '5px',
  fontWeight: 'bold'
};

export default Nabvar;
