import React, { useEffect, useState } from "react";
import axios from "axios";
import hljs from "highlight.js";
import "./Python.css";
import "highlight.js/styles/github-dark.css"; // Highlight.js theme
import { CopyToClipboard } from "react-copy-to-clipboard";

const Python = () => {
  const [contents, setContents] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    axios
      .get(
        "https://inotes-backend-server-production.up.railway.app/api/content/python"
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

  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code) // Copy the provided code to the clipboard
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
      })
      .catch((error) => console.error("Copy failed:", error));
  };

  return (
    <div className="container font-size-2x">
      <h1 className="center bold">
        Python for Big Data & Machine Learning <br />
        BCA-6503
      </h1>
      <div className="notes">
        {contents.map((content) => (
          <div key={content._id} className="innernotes">
            <h2>
              {" "}
              <b>{content.topicName}</b>
            </h2>
            <p className="mt-1">{content.topicDescription}</p>
            {content.topicPoints && content.topicPoints.length > 0 && (
              <ul>
                {content.topicPoints.map((point, index) =>
                  typeof point === "string" ? (
                    // If point is a string, render directly
                    <li className="mt-1" key={index}>
                      {point}
                    </li>
                  ) : (
                    // If point is an object with mainPoint and subPoints
                    <li className="mt-2" key={index}>
                      <strong>{point.mainPoint}</strong>
                      <ul className="mt-1">
                        {point.subPoints &&
                          point.subPoints.map((subPoint, subIndex) => (
                            <li className="mt-1" key={subIndex}>
                              {subPoint}
                            </li>
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
                    <>
                      <div key={index} className="code-box">
                        <div className="upperpart">
                          <span className="small">{example.language}</span>
                          <span>
                            <CopyToClipboard
                              text={example.code}
                              onCopy={() => handleCopy(example.code)}
                            >
                              <button className="copy-button small">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="24px"
                                  viewBox="0 -960 960 960"
                                  width="24px"
                                  fill="#FAAD05"
                                >
                                  <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                                </svg>
                                {copied ? "Copied!" : "Copy"}
                              </button>
                            </CopyToClipboard>
                          </span>
                        </div>
                        <div className="lowerpart">
                          <pre>
                            <code className={`language-${example.language}`}>
                              {example.code}
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div><li>{example.description}</li></div>
                    </>
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
