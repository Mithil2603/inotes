import React, { useEffect, useState } from "react";
import axios from "axios";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // Highlight.js theme

const Python = () => {
  const [contents, setContents] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    axios
      .get(
        "https://inotes-backend-server-production.up.railway.app/api/notes/python"
      )
      .then((response) => {
        setContents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  }, []);

  // Apply syntax highlighting after rendering
  useEffect(() => {
    hljs.highlightAll();
  }, [contents]);

  return (
    <div className="container font-size-2x">
      <h1 className="center bold">
        Python for Big Data & Machine Learning <br />
        BCA-6503
      </h1>
      <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
        {contents.map((content) => (
          <div key={content._id} style={{ marginBottom: "2rem" }}>
            <h2>
              {" "}
              <b>{content.topicName}</b>
            </h2>
            <p>{content.topicDescription}</p>
            {content.topicPoints && content.topicPoints.length > 0 && (
              <ul>
                {content.topicPoints.map((point, index) =>
                  typeof point === "string" ? (
                    // If point is a string, render directly
                    <li key={index}>{point}</li>
                  ) : (
                    // If point is an object with mainPoint and subPoints
                    <li key={index}>
                      <strong>{point.mainPoint}</strong>
                      <ul>
                        {point.subPoints &&
                          point.subPoints.map((subPoint, subIndex) => (
                            <li key={subIndex}>{subPoint}</li>
                          ))}
                      </ul>
                    </li>
                  )
                )}
              </ul>
            )}
            {content.topicImages && (
                <img
                  src={content.topicImages}
                  alt={content.topicName}
                  className="width-50"
                />
              )}
            {Array.isArray(content.codeExamples) &&
              content.codeExamples.length > 0 && (
                <div>
                  <h3>Code Examples:</h3>
                  {content.codeExamples.map((example, index) => (
                    <div
                      key={index}
                      className="code-box"
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        overflow: "hidden",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#2f2f2f",
                          color: "white",
                          padding: "0.5rem",
                          fontWeight: "bold",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>{example.language}</span>
                        <span>{example.title}</span>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#1e1e1e",
                          color: "#df3079",
                          padding: "1rem",
                          overflowX: "auto",
                        }}
                      >
                        <pre>
                          <code className={`language-${example.language}`}>
                            {example.code}
                          </code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Python;
