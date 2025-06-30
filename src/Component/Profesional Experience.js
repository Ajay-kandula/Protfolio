import React from "react";

function Experience() {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#002e63",
        marginTop: "20px",
        color: "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <section
        id="experience"
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "20px",
          margin: "20px 5px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "40px", color: "white", fontFamily: "revert" }}>
          Professional Experience
        </h1>

        {/* Experience 1 */}
        <div
          style={{
            border: "1px solid white",
            borderRadius: "10px",
            backgroundColor: "#014f86",
            color: "white",
            padding: "15px",
            margin: "15px 0",
          }}
        >
          <h2>Data Analyst - ShowTime Consultancy</h2>
          <p>Year: 2023 – 2024/05</p>
          <p style={{ textAlign: "justify" }}>
            Worked as a Political Consultant handling voter data analysis and campaign insights using SQL and Excel.
            Collected, cleaned, and analyzed large datasets related to voter demographics, polling booth data, and
            election performance. Generated actionable reports and dashboards to support strategic campaign decisions.
            Used Excel for trend analysis and SQL to extract and segment voter data for targeted outreach.
          </p>
        </div>

        {/* Experience 2 */}
        <div
          style={{
            border: "1px solid white",
            borderRadius: "10px",
            backgroundColor: "#014f86",
            color: "white",
            padding: "15px",
            margin: "15px 0",
          }}
        >
          <h2>Management Trainee - Raam Group</h2>
          <p>Year: 2024/07 – 2024/11</p>
          <p style={{ textAlign: "justify" }}>
            Used React.js to streamline service bookings, track vehicle status, and manage customer information.
            Built responsive interfaces for customers and service staff with features like service history and
            real-time updates. Integrated REST APIs and ensured smooth experience across devices.
          </p>
        </div>

        {/* Experience 3 */}
        <div
          style={{
            border: "1px solid white",
            borderRadius: "10px",
            backgroundColor: "#014f86",
            color: "white",
            padding: "15px",
            margin: "15px 0",
          }}
        >
          <h2>Jr Software Engineer - SLTECHNOCRATS</h2>
          <p>Year: 2024 – Present</p>
          <p style={{ textAlign: "justify" }}>
            Worked on a Teleradiology platform using React.js, JavaScript, Express.js, and SQL. Developed dashboards,
            patient forms, and case management features. Integrated APIs for real-time reporting. Used Express and SQL
            for backend operations and streamlined radiology workflows.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Experience;
