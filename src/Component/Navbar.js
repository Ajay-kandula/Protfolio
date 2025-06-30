import React from "react";
function Nabvar(){
    const AjayImage='https://i.ibb.co/5WL7jPSJ/AJayk.jpgs'
    return(
        <div style={{justifyContent:'space-between',marginRight:'5px',fontSize:"30px", border:'1px solid#ccc', borderRadius:"10px",padding:'10px',backgroundColor:'#002e63'}}>
            <nav>   
                <div>
                    <a href="#about" ><button style={{color:'black',backgroundColor:'white',border:'none',borderRadius:"8px",width:'200px',padding:'10px',textDecoration:'none',marginRight:'20px',marginLeft:'55px',fontWeight:'bold'}}>About</button></a>
                    <a href="#project" ><button style={{color:"black",backgroundColor:'white',border:'none',borderRadius:"8px",width:'200px',padding:'10px',textDecoration:'none',marginRight:'20px',fontWeight:'bold'}}>Projects</button></a>
                    <a href="#drives" ><button style={{color:"black",backgroundColor:'white',border:'none',borderRadius:"8px",width:'200px',padding:'10px',textDecoration:'none',marginRight:'20px',fontWeight:'bold'}}>Drives Me</button></a>
                    <a href="#education"><button style={{color:"black",backgroundColor:'white',border:'none',borderRadius:"8px",width:'200px',padding:'10px',textDecoration:'none',marginRight:'20px',fontWeight:'bold'}}>Education</button></a>
                    <a href="#experience"><button style={{color:"black",backgroundColor:'white',border:'none',borderRadius:"8px",width:'200px',padding:'10px',textDecoration:'none',marginRight:'20px',fontWeight:'bold'}}>Experience</button></a>
                </div>
                <div
                    
            id="mycontact"
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "40px",
                margin: "10px",
                backgroundColor:"#002e63",color:'white',marginRight:"5px"
            }}
        >
            
            <div style={{marginLeft:'10px'}}>
                <h1 style={{fontSize:"60px",marginLeft:"5px",marginTop:'10px',fontFamily:'Merriweather',color:"white"}}>Hi, I'm Kandula Ajay</h1>
                <p style={{justifyContent:'space-between', fontFamily:'initial',fontSize:"25px"}}>I'm a  Web Developer with 2 years of experience using React.js, Node.js, HTML, CSS, and JavaScript. Reach out if you you'd like to learn more!</p>  
                <a href="#contact" ><button style={{color:"white",backgroundColor:'#b31b1b',border:'none',borderRadius:"8px",width:'200px',padding:'10px',textDecoration:'none',marginRight:'30px',fontWeight:'bold',fontFamily:'serif',fontStyle:'oblique',fontSize:"25px"}}>Reach Out</button></a>
            </div>

            <img
                src={AjayImage}
                alt="Ajay Kandula"
                style={{ width: "350px", height: "350px", borderRadius: "50%" ,marginRight:"5px", 
                    objectFit: 'cover',
                    boxShadow: '0 10px 20px rgb(235, 255, 16)',
                    transition: 'transform 0.3s ease-in-out'}}
            />
                </div>
            </nav>
        </div>
    )
}
export default Nabvar;