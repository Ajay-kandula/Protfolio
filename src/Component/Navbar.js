import React from "react";

function Navbar() {
  const image = "https://i.ibb.co/5WL7jPSJ/AJayk.jpg"; 

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: "10px",
        margin: "20px 5px",
        padding: "20px",
        backgroundColor: '#002e63',
        color: 'white',
        maxWidth: "100%",
        
      }}
    >
      
      <nav>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '30px'
          }}
        >
          <a href="#about" style={{ width: "100%", maxWidth: "300px" }}>
            <button style={{
  width: "100%",
  padding: '12px',
  fontWeight: 'bold',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  color: '#002e63',
  cursor: 'pointer',
}}>About</button>
          </a>
          <a href="#project" style={{ width: "100%", maxWidth: "300px" }}>
            <button style={{
  width: "100%",
  padding: '12px',
  fontWeight: 'bold',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  color: '#002e63',
  cursor: 'pointer',

}}>Projects</button>
          </a>
          <a href="#drives" style={{ width: "100%", maxWidth: "300px" }}>
            <button style={{
  width: "100%",
  padding: '12px',
  fontWeight: 'bold',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  color: '#002e63',
  cursor: 'pointer',
  
}}> What Drives Me</button>
          </a>
          <a href="#education" style={{ width: "100%", maxWidth: "300px" }}>
            <button style={{
  width: "100%",
  padding: '12px',
  fontWeight: 'bold',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  color: '#002e63',
  cursor: 'pointer',
 
}}>Education</button>
          </a>
          <a href="#experience" style={{ width: "100%", maxWidth: "300px" }}>
            <button style={{
  width: "100%",
  padding: '12px',
  fontWeight: 'bold',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  color: '#002e63',
  cursor: 'pointer',
  
}}>Experience</button>
          </a>
        </div>
      </nav>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          gap: "30px"
        }}
      >
        
        <div style={{ flex: "1 1 300px", minWidth: "280px", maxWidth: "500px" }}>
          <h1
            style={{
              fontSize: "32px",
              fontFamily: "Merriweather",
              marginBottom: "20px",
              textAlign: 'center'
            }}
          >
            Hi, I'm Kandula Ajay
          </h1>
          <p
            style={{
              fontSize: "18px",
              textAlign: "justify",
              lineHeight: "1.6"
            }}
          >
            I'm a Web Developer with 2 years of experience using React.js, Node.js,
            HTML, CSS, and JavaScript. I focus on building clean and responsive
            applications with modern technologies and best practices.
          </p>
          <div style={{ textAlign: 'center', marginTop: "20px" }}>
            <a href="#contact">
              <button style={{color: "white",
  backgroundColor: '#b31b1b',
  border: 'none',
  borderRadius: "8px",
  width: '200px',
  padding: '10px',
  fontWeight: 'bold',
  fontFamily: 'serif',
  fontSize: "18px",
  cursor: 'pointer'}}>Reach Out Me</button>
            </a>
          </div>
        </div>

        
        <div style={{
          flex: "1 1 300px",
          maxWidth: "100%",
          textAlign: 'center'
        }}>
          <img
            src={image}
            alt="Ajay Kandula"
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 10px 20px yellow",
              transition: "transform 0.3s ease-in-out"
            }}
          />
        </div>
      </div>
    </div>
  );
}





export default Navbar;
