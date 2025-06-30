import React from "react";
function Project(){
    return(
        <div style={{border:'1px solid #ccc',borderRadius:"10px",color:'white',backgroundColor:"#002e63",marginTop:"20px"}}>
            <section id="project" style={{justifyContent:"space-between",border:"1px solid #ccc",borderRadius:'10px',padding:"20px",margin:"20px",textAlign:'center'}}>
                <h1 style={{fontSize:"50px",fontFamily:"revert"}}>Projects</h1>
                <div style={{border:"1px solid #ccc",borderRadius:"10px",color:'black',backgroundColor:"white",textAlign:'center'}}>
                    <h1>Sales Management System</h1>
                    <p style={{textAlign:"center"}}>Developed a sales management system using Node.js, Express.js, and MySQL to streamline sales tracking andmanagement. The system includes RESTful APIs for handling sales records, customer data, and transactions, withall endpoints tested using Postman. MySQL was used to design an optimized database schema, ensuring efficient
data storage and retrieval. Implemented authentication and authorization using JWT to secure access to the system.
The project focuses on performance optimization, scalability, and seamless integration for effective sales tracking</p>
                </div>
                <div style={{border:"1px solid #ccc",borderRadius:"10px",color:'black',backgroundColor:"white",textAlign:'center',marginTop:"20px"}}>
                      <h1 style={{textAlign:"center"}}>Task Manager App</h1>
                     <p style={{textAlign:"left"}}>Developed a responsive Task Manager web application that allows users to create, edit, delete, and mark tasks as completed.</p>

                </div>
                <div style={{border:"1px solid #ccc",borderRadius:"10px",color:'black',backgroundColor:"white",textAlign:'center',marginTop:"20px"}}>
                    <h1 style={{textAlign:'center'}}>Online Quiz Application</h1>
                    <p>Created an Online Quiz App that allows users to take multiple-choice quizzes, track their score, and view results at the end.</p>
                </div >
                <div style={{border:"1px solid #ccc",borderRadius:"10px",color:'black',backgroundColor:"white",textAlign:'center',marginTop:"20px"}}>    
                     <h1 style={{textAlign:'center'}}>E Commerce</h1>
                    <p>Built a complete E-commerce web application with a React.js frontend and Node.js/Express.js backend. The
application allows users to register, browse products, add items to a cart, and view the total price dynamically.
Backend APIs handle user authentication, product management, and cart operations with data stored in MySQL
using Sequelize ORM.
</p> 
                </div>
                <div style={{border:"1px solid #ccc",borderRadius:"10px",color:'black',backgroundColor:"white",textAlign:'center',marginTop:"20px"}}>
                        <h1 style={{textAlign:'center'}}>Personal Portfolio Website</h1>
                <p>contact information. Utilized reusable components and state management to create a clean and interactive user
experience.
</p>
                </div>
            </section>
        </div>
    )
} 
export default Project
