import React, { useState } from "react";

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const insta = './images/insta.png';
    const linkdin = './images/linkd.png';

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name) {
            alert('Please enter your name');
            return;
        }
        if (!form.email) {
            alert('Please enter your email');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            alert('Please enter a valid email');
            return;
        }
        if (!form.message) {
            alert('Please type your message');
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/send", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            const data = await res.json();
            if (data.success) {
                alert(`✅ Thank you, ${form.name}! Your message has been saved to MySQL.`);
                setForm({ name: '', email: '', message: '' });
            } else {
                alert('Error: ' + data.error);
            }
        } catch (err) {
            alert("Network or server error. Please try again.");
            console.error(err);
        }
    };

    return (
        <div>
            <div style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                color: "black",
                backgroundColor: "#002e63",
                padding: "20px"
            }}>
                <h1 style={{
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: "revert",
                    fontStyle: 'inherit'
                }}>
                    Open to Opportunities
                </h1>
                <p style={{ textAlign: 'center', color: "white" }}>
                    I am actively looking for new opportunities where I can leverage my React.js, JavaScript, TypeScript, HTML/CSS, Node.js, and MySQL skills. With hands-on experience in building full-stack web applications, I’m confident in my ability to contribute to both frontend and backend development. If you think I can be helpful to you or your team, feel free to reach out!
                </p>

                <section id="contact" style={{
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px'
}}>
                    <div style={{
                        flex: "1",
                        minWidth: '250px',
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        padding: "20px",
                        textAlign: 'left',
                        backgroundColor: "white",
                        fontSize: '16px'
                    }}>
                        <p>✉ <a href="mailto:ajaykandula0222@gmail.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}><strong>ajaykandula0222@gmail.com</strong></a></p>
                        <p>📞 <a href="tel:9848096642" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: 'black' }}>9848096642</a></p>
                        <p>🏠 <strong>Nandigama, Andhra Pradesh</strong></p>
                        <p>📅 <strong>26/11/2001</strong></p>
                        <p><img src={linkdin} alt="Linkdin" width={20} style={{ marginRight: "8px" }} /> <a href="https://www.linkedin.com/in/kandula-ajay-0504ba248/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: 'black' }}>Linkedin</a></p>
                        <p><img src={insta} alt="instagram" width={20} style={{ marginRight: "8px" }} /><a href="https://www.instagram.com/ajay._.kandula/profilecard/?igsh=cjlmajQ2ZnprNDBi" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>Instagram</a></p>
                    </div>

                    <form onSubmit={handleSubmit} style={{
                        flex: "1",
                        minWidth: '300px',
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        padding: "20px",
                        textAlign: 'left',
                        backgroundColor: "white"
                    }}>
                        <label>Name:</label><br />
                        <input
                            type='text'
                            name="name"
                            value={form.name}
                            placeholder="Enter your name..."
                            onChange={handleChange}
                            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
                        /><br />

                        <label>Email:</label><br />
                        <input
                            type="text"
                            name="email"
                            value={form.email}
                            placeholder="Enter your email..."
                            onChange={handleChange}
                            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
                        /><br />

                        <label>Message:</label><br />
                        <textarea
                            name="message"
                            value={form.message}
                            placeholder="Enter your message..."
                            onChange={handleChange}
                            rows={4}
                            style={{ width: '100%', marginBottom: '15px', padding: '8px' }}
                        ></textarea><br />

                        <button type="submit" style={{
                            color: "white",
                            backgroundColor: '#e30022',
                            fontWeight: "bold",
                            border: 'none',
                            borderRadius: "8px",
                            width: '100%',
                            padding: "10px"
                        }}>
                            Submit
                        </button>
                    </form>
                </section>
            </div>

            <p style={{ color: "black", textAlign: 'center', marginTop: '20px' }}>
                2025 Ajay Kandula. All rights reserved.
            </p>
        </div>
    );
}

export default Contact;
