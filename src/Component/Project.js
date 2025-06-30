import React from "react";

function Project() {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: "10px",
        color: 'white',
        backgroundColor: "#002e63",
        marginTop: "20px",
        padding: '20px',
      }}
    >
      <section
        id="project"
        style={{
          border: "1px solid #ccc",
          borderRadius: '10px',
          padding: "20px",
          margin: "20px 5px",
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontFamily: "revert",
            color: "white",
          }}
        >
          Projects
        </h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              color: 'white',
              backgroundColor: "#014f86",
              textAlign: 'center',
              padding: '15px',
              flex: '1 1 300px',
            }}
          >
            <h2>Sales Management System</h2>
            <p>
              Developed a sales management system using Node.js, Express.js, and MySQL to streamline sales tracking and
              management. The system includes RESTful APIs for handling sales records, customer data, and transactions, with
              all endpoints tested using Postman. MySQL was used to design an optimized database schema, ensuring efficient
              data storage and retrieval. Implemented authentication and authorization using JWT to secure access to the system.
              The project focuses on performance optimization, scalability, and seamless integration for effective sales tracking.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              color: 'white',
              backgroundColor: "#014f86",
              textAlign: 'center',
              padding: '15px',
              flex: '1 1 300px',
            }}
          >
            <h2>Task Manager App</h2>
            <p>
              Developed a responsive Task Manager web application that allows users to create, edit, delete, and mark tasks as completed.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              color: 'white',
              backgroundColor: "#014f86",
              textAlign: 'center',
              padding: '15px',
              flex: '1 1 300px',
            }}
          >
            <h2>Online Quiz Application</h2>
            <p>
              Created an Online Quiz App that allows users to take multiple-choice quizzes, track their score, and view results at the end.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              color: 'white',
              backgroundColor: "#014f86",
              textAlign: 'center',
              padding: '15px',
              flex: '1 1 300px',
            }}
          >
            <h2>E-Commerce</h2>
            <p>
              Built a complete E-commerce web application with a React.js frontend and Node.js/Express.js backend. The
              application allows users to register, browse products, add items to a cart, and view the total price dynamically.
              Backend APIs handle user authentication, product management, and cart operations with data stored in MySQL
              using Sequelize ORM.
            </p>
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              color: 'white',
              backgroundColor: "#014f86",
              textAlign: 'center',
              padding: '15px',
              flex: '1 1 300px',
            }}
          >
            <h2>Personal Portfolio Website</h2>
            <p>
              Contact information. Utilized reusable components and state management to create a clean and interactive user
              experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
