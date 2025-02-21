import React from "react";
import "./PlacementList.css";

const PlacementList = () => {
  const companies = [
    { name: "Google", role: "Software Engineer", description: "Develop and maintain software solutions." },
    { name: "Microsoft", role: "Data Analyst", description: "Analyze and interpret complex data." },
    { name: "Amazon", role: "Cloud Engineer", description: "Manage cloud infrastructure and services." },
    { name: "Facebook", role: "UI/UX Designer", description: "Design user-friendly interfaces." },
  ];

  return (
    <div className="container">
      <h1 className="title">Placement Opportunities</h1>
      <div className="card-container">
        {companies.map((company, index) => (
          <div key={index} className="card">
            <h2 className="company-name">{company.name}</h2>
            <p className="company-role"><strong>Role:</strong> {company.role}</p>
            <p className="company-description">{company.description}</p>
            <button className="result-button">Result</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementList;
