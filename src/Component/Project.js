import React from "react";

function Project() {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: "10px",
      color: 'white',
      backgroundColor: "#002e63",
      marginTop: "20px",
      padding: '20px'
    }}>
      <section id="project" style={{
        border: "1px solid #ccc",
        borderRadius: '10px',
        padding: "20px",
        margin: "20px 5px",
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: "50px",
          fontFamily: "revert",
          color: "white"
        }}>
          Projects
        </h1>

        {projectData.map((project, index) => (
          <div key={index} style={{
            border: "1px solid white",
            borderRadius: "10px",
            color: 'white',
            backgroundColor: "#014f86",
            textAlign: 'left',
            padding: '15px',
            marginTop: index === 0 ? "0" : "20px"
          }}>
            <h2 style={{ textAlign: 'center' }}>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

const projectData = [
  {
    title: "Sales Management System",
    description: "Developed a sales management system using Node.js, Express.js, and MySQL to streamline sales tracking and management..."
  },
  {
    title: "Task Manager App",
    description: "Built a responsive Task Manager app where users can create, edit, and track their tasks..."
  },
  {
    title: "Online Quiz Application",
    description: "Created an online quiz platform allowing users to answer MCQs, track scores, and view results..."
  },
  {
    title: "E-Commerce Web App",
    description: "Developed a React frontend with Node/Express backend supporting cart, auth, and orders..."
  },
  {
    title: "Personal Portfolio Website",
    description: "Designed a React portfolio site with modular components, showcasing skills and projects..."
  }
];

export default Project;
