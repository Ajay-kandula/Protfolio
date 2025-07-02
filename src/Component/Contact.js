import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const insta = './images/insta.png';
  const linkdin = './images/linkd.png';
  const[loading,setLoading]=useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.name) return alert('Please enter your name');
    if (!form.email) return alert('Please enter your email');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return alert('Please enter a valid email');
    if (!form.message) return alert('Please type your message');

    try {
      setLoading(true)
      const res = await fetch("https://my-backend-api-3-crp2.onrender.com/send", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (data.success) {
        alert(`✅ Thank you, ${form.name}! Your message has been saved.`);
        setForm({ name: '', email: '', message: '' });
      } 
      else if(setLoading(true)){
        alert(`Loading....`)

      }
      
      else  {
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
        }}>
          Open to Opportunities
        </h1>

        <p style={{ color: "white" }}>
          I am actively looking for new opportunities where I can leverage my skills in React.js, JavaScript, TypeScript, Node.js, and MySQL. Feel free to reach out!
        </p>

        <section id="contact" style={{
          display: "flex",
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: "space-between",
          gap: "20px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxSizing: "border-box"
        }}>
          
          <div style={{
            flex: "1 1 300px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            textAlign: 'left',
            backgroundColor: "white",
            fontSize: '16px'
          }}>
            <p>✉  <a href="mailto:ajaykandula0222@gmail.com" style={{textDecoration:"none",color:"black"}}><strong>ajaykandula0222@gmail.com</strong></a></p>
            <p>📞 <a href="tel:9848096642" style={{textDecoration:"none", color:"black"}}>9848096642</a></p>
            <p>🏠 <strong>Nandigama, Andhra Pradesh</strong></p>
            <p>📅 <strong>26/11/2001</strong></p>
            <p><img src={linkdin} alt="LinkedIn" width={20} style={{ marginRight: "8px" }} /> <a href="https://www.linkedin.com/in/kandula-ajay-0504ba248/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"black"}}>LinkedIn</a></p>
            <p><img src={insta} alt="Instagram" width={20} style={{ marginRight: "8px" }} /> <a href="https://www.instagram.com/ajay._.kandula/profilecard/?igsh=cjlmajQ2ZnprNDBi" target="_blank" rel="noreferrer" style={{textDecoration:"none",color:'black'}}>Instagram</a></p>
          </div>

          
          <div style={{
            flex: "1 1 300px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "white"
          }}>
            <form onSubmit={handleSubmit}>
              <label>Name:</label><br />
              <input
                type='text'
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name..."
                style={{width: '100%',
  marginBottom: '10px',
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #aaa'}}
              /><br />

              <label>Email:</label><br />
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email..."
                style={{width: '100%',
  marginBottom: '10px',
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #aaa'}}
              /><br />

              <label>Message:</label><br />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message..."
                rows={4}
                style={{ width: '100%',
  marginBottom: '15px',
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #aaa'}}
              ></textarea><br />

              <button type="submit" disabled={setLoading} style={{color: "white",
  backgroundColor: '#e30022',
  fontWeight: "bold",
  border: 'none',
  borderRadius: "8px",
  width: '100%',
  padding: "10px"}}>Submit
                
              </button>
            </form>
          </div>
        </section>
      </div>

      <p style={{ color: "white", textAlign: 'center', marginTop: '20px' }}>
        2025 Ajay Kandula. All rights reserved.
      </p>
    </div>
  );
}


export default Contact;
