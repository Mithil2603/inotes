import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DcnNotes.css";

export default function DA() {
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://52.70.28.21:8080/api/notes/da"
      )
      .then((response) => {
        console.log("Fetched data:", response.data); // Log fetched data
        setTopics(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load data.");
      });
  }, []);
  return (
    <>
      <div className="container font-size-2x">
        <h1 className="center bold">
          Database Administrator <br />
          BCA-6502
        </h1>
        {error ? (
          <p>{error}</p>
        ) : (
          topics.map((topic) => (
            <div key={topic._id}>
              <h2 className="bold mt-5">{topic.topicName}</h2>
              <p>{topic.topicDescription}</p>

              {/* Render topicPoints with support for both flat strings and nested structures */}
              {topic.topicPoints && topic.topicPoints.length > 0 && (
                <ul>
                  {topic.topicPoints.map((point, index) =>
                    typeof point === "string" ? (
                      // If point is a string, render directly
                      <li key={index}>{point}</li>
                    ) : (
                      // If point is an object with mainPoint and subPoints
                      <li className="mt-2" key={index}>
                        <strong>{point.mainPoint}</strong>
                        <ul className="mt-2 mb-2">
                          {point.subPoints &&
                            point.subPoints.map((subPoint, subIndex) => (
                              <li className="mt-1 mb-1" key={subIndex}>{subPoint}</li>
                            ))}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              )}
              {topic.topicImages && (
                <img
                  src={topic.topicImages}
                  alt={topic.topicName}
                  className="width-50"
                />
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
