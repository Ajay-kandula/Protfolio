import React from "react";

function About() {
    const image = 'https://i.ibb.co/5WL7jPSJ/AJayk.jpg';

    return (
        <section
            id="about"
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
           
            <div style={{
                flex: "1 1 300px",
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px"
            }}>
                <img
                    src={image}
                    alt="Ajay Kandula"
                    style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        boxShadow: '0 10px 20px rgba(255, 16, 16, 0.73)',
                        transition: 'transform 0.3s ease-in-out'
                    }}
                />
            </div>

           
            <div style={{ flex: "2 1 400px", padding: "10px" }}>
                <h1 style={{
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    fontSize: "40px",
                    marginBottom: "20px"
                }}>
                    About
                </h1>
                <p style={{
                    fontStyle: 'italic',
                    fontSize: "18px",
                    lineHeight: "1.6",
                    textAlign: "justify"
                }}>
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
