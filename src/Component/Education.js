import React from "react";
function Education(){
    return(
        <section id='education' style={{justifyContent:"space-between",border:"1px solid #ccc",borderRadius:'10px',padding:"20px",margin:"20px",backgroundColor:'#002e63',color:'white',marginRight:'5px',marginLeft:"5px"}}>
            <h1 style={{textAlign:'center',fontSize:"60px",fontFamily:"revert"}}>Education</h1>
            <div style={{display:'flex',justifyContent:'space-around',gap:'20px',flexWrap:"wrap",textAlign:"center"}}>
                <div style={{ flex:'1',border:"1px solid #ccc",borderRadius:"10px",color:"black",textAlign:'center',marginBottom:'20px',backgroundColor:'white',width:"250px"}}>
                    <h1>Bachelor of Technology (B.Tech)</h1>
                    <h5>National Institute of Technology, Warangal </h5>
                    <p>Year of Completion: 2023</p>
                </div>
                <div style={{ flex:'1',color:'black', border:'1px solid #ccc',borderRadius:"10px",backgroundColor:"white",marginBottom:"20px",textAlign:"center",width:"250px"}}>
                    <h1>Higher Secondary (Intermediate)</h1>
                    <h5>Sri Chaitanya Junior College Vijayawada, Andhra Pradesh </h5>
                    <p>Year of Completion: 2019</p>
                </div>
                <div style={{flex:"1",color:'black', border:'1px solid #ccc',borderRadius:"10px",backgroundColor:"white",marginBottom:"20px",textAlign:"center",width:"250px"}}>
                    <h1>High School (Secondary)</h1>
                    <h5>Narayana E-Techno School Nandigama, Andhra Pradesh </h5>
                    <p>Year of Completion: 2017</p>
                </div>
            </div>
            
       </section>
    )
}
export default Education;