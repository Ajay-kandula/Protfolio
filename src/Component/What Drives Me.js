import React from "react";

function Drives() {
  return (
    <div style={{justifyContent:'space-between',marginRight:'5px', border:'1px solid#ccc', borderRadius:"10px",padding:'10px',backgroundColor:'#002e63'}}>
      <section
        id="drives">
    
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            fontFamily: "sans-serif",
            marginBottom: "30px",
          }}
        >
          What Drives Me!
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom:"20px"
          }}
        >
         
          <div
            style={{
              flex: "1",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "#014f86",
              marginLeft:'20px'
            }}
          >
            <h2 style={{textAlign:"center"}}>Skills</h2>
            <ul>
              <li>JavaScript, TypeScript, React.js, Node.js (Express), CSS, HTML</li>
              <li>Data Analysis – Excel, SQL</li>
              <li>Soft Skills – Problem Solving, Determination, Communication, Team Work</li>
              <li>Prompting & Googling</li>
            </ul>
          </div>

          
          <div
            style={{
              flex: "1",
              minWidth: "250px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#014f86",
              
            }}
          >
            <h2 style={{textAlign:"center"}}>Achievements</h2>
            <ul>
              <li>Secured AIR 24 in IMO (International Mathematics Olympiad)</li>
              <li>Technical Poster Presentation Award</li>
              <li>Cricket Championship Winner</li>
              <li>JEE Main – Secured 99.09 percentile (Top National Rank)</li>
            </ul>
          </div>

          
          <div
            style={{
              flex: "1",
              minWidth: "250px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#014f86",
              marginRight:'20px'
            
            }}
          >
            <h2 style={{textAlign:'center'}}>Interests</h2>
            <ul>
              <li>Reading and Blogging</li>
              <li>Designing</li>
              <li>Learning New Skills</li>
              <li>Volunteering</li>
              <li>Team Sports – Cricket</li>
              <li>Automation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Drives;
