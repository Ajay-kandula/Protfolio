import React from "react";

function Navbar() {
  const image = "https://i.ibb.co/5WL7jPS/AJayk.jpg";

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: "10px",
        margin: "20px 5px",
        padding: "20px",
        backgroundColor: '#002e63',
        color: 'white'
      }}
    >
     
      <nav>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '30px'
        }}>
          <a href="#about"><button style={{backgroundColor: 'white',
  border: 'none',
  borderRadius: "8px",
  minWidth: '150px',
  padding: '10px',
  fontWeight: 'bold',
  color: '#002e63',
  fontSize: '16px',
  cursor: 'pointer'}}>About</button></a>
          <a href="#project"><button style={{backgroundColor: 'white',
  border: 'none',
  borderRadius: "8px",
  minWidth: '150px',
  padding: '10px',
  fontWeight: 'bold',
  color: '#002e63',
  fontSize: '16px',
  cursor: 'pointer'}}>Projects</button></a>
          <a href="#opentoopportunities"><button style={{backgroundColor: 'white',
  border: 'none',
  borderRadius: "8px",
  minWidth: '150px',
  padding: '10px',
  fontWeight: 'bold',
  color: '#002e63',
  fontSize: '16px',
  cursor: 'pointer'}}>Open to Opportunities</button></a>
          <a href="#education"><button style={{backgroundColor: 'white',
  border: 'none',
  borderRadius: "8px",
  minWidth: '150px',
  padding: '10px',
  fontWeight: 'bold',
  color: '#002e63',
  fontSize: '16px',
  cursor: 'pointer'}}>Education</button></a>
          <a href="#experience"><button style={{backgroundColor: 'white',
  border: 'none',
  borderRadius: "8px",
  minWidth: '150px',
  padding: '10px',
  fontWeight: 'bold',
  color: '#002e63',
  fontSize: '16px',
  cursor: 'pointer'}}>Experience</button></a>
        </div>
      </nav>

 
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px",
          gap: "30px"
        }}
      >
        
        <div style={{
          flex: "1 1 300px",
          minWidth: "280px"
        }}>
          <h1 style={{
            fontSize: "40px",
            fontFamily: "Merriweather",
            marginBottom: "20px",
            textAlign: 'center'
          }}>
            Hi, I'm Kandula Ajay
          </h1>
          <p style={{
            fontSize: "18px",
            textAlign: "justify",
            lineHeight: "1.6"
          }}>
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
  cursor: 'pointer'}}>Reach Out</button>
            </a>
          </div>
        </div>

        
        <div style={{
          flex: "1 1 300px",
          textAlign: 'center'
        }}>
          <img
            src={image}
            alt="Ajay Kandula"
            style={{
              width: "400px",
              height: "400px",
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
