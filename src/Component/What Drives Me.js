import React from "react";

function Drives() {
  return (
    <div style={{
      justifyContent: 'space-between',
      margin: '5px',
      padding: '10px',
      backgroundColor: '#f9f9f9',
      color: "black"
    }}>
      <section
        id="drives"
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "#ffffff",
          color: "black"
        }}
      >
        <h1 style={{
          textAlign: "center",
          fontSize: "40px",
          fontFamily: "sans-serif",
          marginBottom: "30px"
        }}>
          What Drives Me!
        </h1>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px"
        }}>
          <div style={cardStyle}>
            <h2 style={{ textAlign: "center" }}>Skills</h2>
            <ul>
              <li>JavaScript, TypeScript, React.js, Node.js, CSS, HTML</li>
              <li>Data Analysis – Excel, SQL</li>
              <li>Soft Skills – Problem Solving, Communication, Team Work</li>
              <li>Prompting & Googling</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h2 style={{ textAlign: "center" }}>Achievements</h2>
            <ul>
              <li>Secured AIR 24 in IMO</li>
              <li>Technical Poster Presentation Winner</li>
              <li>Cricket Championship Winner</li>
              <li>JEE Main – 99.09 Percentile</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h2 style={{ textAlign: 'center' }}>Interests</h2>
            <ul>
              <li>Reading and Blogging</li>
              <li>Designing</li>
              <li>Learning New Skills</li>
              <li>Volunteering</li>
              <li>Cricket</li>
              <li>Automation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

const cardStyle = {
  flex: "1 1 250px",
  minWidth: "250px",
  maxWidth: "350px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "20px",
  backgroundColor: "#f0f0f0",
  color: "black"
};

export default Drives;
