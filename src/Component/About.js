import React from "react";

function About() {
    const image = './images/Ajayk.jpg';
    return (
        <section
            id="about"
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "20px",
                margin: "20px",
                backgroundColor: "#002e63",
                color: 'white',
                marginRight:'5px',marginLeft:'5px'
                
            }}
        >
            <div>
                <img
                    src={image}
                    alt="Ajayk"
                    height={350}
                    width={350}
                    style={{width: '350px',
                        height: '350px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        boxShadow: '0 10px 20px rgba(255, 16, 16, 0.73)',
                        transition: 'transform 0.3s ease-in-out'}}
                
                />
            </div>

            <div style={{ marginLeft: '50px' }}>
                <h1 style={{textAlign:'center',fontFamily:'monospace',fontSize:"60px",marginTop:"5px"}}>About</h1>
                <p style={{fontStyle:'italic',fontSize:"20px"}}>
                    Skilled Full-Stack JavaScript Developer with hands-on experience in JavaScript, TypeScript, React.js, and
                    Express.js. Proficient in building dynamic, high-performance web applications with a strong focus on front-end
                    development using React and robust back-end APIs using Express. Experienced in using React Hooks, Redux, and
                    ES6+ for building interactive UI components, and Node.js, Express.js, and RESTful APIs for server-side
                    development. Well-versed in TypeScript for writing clean, scalable, and type-safe code across both client and
                    server. Adept at working in agile environments, collaborating with cross-functional teams, and following modern
                    DevOps practices. Committed to delivering efficient, maintainable, and user-centric solutions.
                </p>
            </div>
        </section>
    );
}

export default About;
