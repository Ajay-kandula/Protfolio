import React from "react";

function Education() {
    return (
        <section
            id="education"
            style={{
                justifyContent: "space-between",
                border: "1px solid #ccc",
                borderRadius: '10px',
                padding: "20px",
                margin: "20px 5px",
                backgroundColor: '#002e63',
                color: 'white'
            }}
        >
            <h1 style={{
                textAlign: 'center',
                fontSize: "60px",
                fontFamily: "revert"
            }}>
                Education
            </h1>

            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                gap: '20px',
                flexWrap: "wrap",
                textAlign: "center"
            }}>
              
                <div style={{
                    flex: '1',
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    backgroundColor: "#014f86",
                    marginBottom: '20px',
                    width: "250px",
                    padding: '10px'
                }}>
                    <h1 style={{ fontFamily: 'revert', color: 'white' }}>Bachelor of Technology (B.Tech)</h1>
                    <h5 style={{ color: 'white' }}>National Institute of Technology, Warangal</h5>
                    <p style={{ color: 'white' }}>Year of Completion: 2023</p>
                </div>

               
                <div style={{
                    flex: '1',
                    border: '1px solid #ccc',
                    borderRadius: "10px",
                    backgroundColor: "#014f86",
                    marginBottom: "20px",
                    width: "250px",
                    padding: '10px'
                }}>
                    <h1 style={{ color: 'white' }}>Higher Secondary (Intermediate)</h1>
                    <h5 style={{ color: 'white' }}>Sri Chaitanya Junior College, Vijayawada, AP</h5>
                    <p style={{ color: 'white' }}>Year of Completion: 2019</p>
                </div>

                
                <div style={{
                    flex: "1",
                    border: '1px solid #ccc',
                    borderRadius: "10px",
                    backgroundColor: "#014f86",
                    marginBottom: "20px",
                    width: "250px",
                    padding: '10px'
                }}>
                    <h1 style={{ color: 'white' }}>High School (Secondary)</h1>
                    <h5 style={{ color: 'white' }}>Narayana E-Techno School, Nandigama, AP</h5>
                    <p style={{ color: 'white' }}>Year of Completion: 2017</p>
                </div>
            </div>
        </section>
    );
}

export default Education;
