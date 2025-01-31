import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DcnNotes.css';

export default function Cia1DCN() {
    const [topics, setTopics] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://inotes-h3cex47t.b4a.run/api/notes/cia1dcn")
            .then(response => {
                console.log('Fetched data:', response.data); // Log fetched data
                setTopics(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to load data.');
            });
    }, []);
    return (
        <>
            <div className="container font-size-2x">
                <h1 className='center bold'>CIA1 Paper Solution <br />BCA 5503 <br />Data Communication and Networking</h1>
                {error ? (
                    <p>{error}</p>
                ) : (
                    topics.map((topic) => (
                        <div key={topic._id}>
                            <h2 className='bold mt-5'>{topic.topicName}</h2>
                            <p>{topic.topicDescription}</p>

                            {/* Render topicPoints with support for both flat strings and nested structures */}
                            {topic.topicPoints && topic.topicPoints.length > 0 && (
                                <ul>
                                    {topic.topicPoints.map((point, index) => (
                                        typeof point === "string" ? (
                                            // If point is a string, render directly
                                            <li key={index}>{point}</li>
                                        ) : (
                                            // If point is an object with mainPoint and subPoints
                                            <li key={index}>
                                                <strong>{point.mainPoint}</strong>
                                                <ul>
                                                    {point.subPoints && point.subPoints.map((subPoint, subIndex) => (
                                                        <li key={subIndex}>{subPoint}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                        )
                                    ))}
                                </ul>
                            )}
                            {topic.topicImages && (
                                <img src={topic.topicImages} alt={topic.topicName} className="width-50" />
                            )}
                        </div>
                    ))
                )}
            </div>
        </>
    )
}
