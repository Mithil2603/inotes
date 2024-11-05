import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DcnNotes.css';

export default function DcnNotes() {
    const [topics, setTopics] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://inotes-backend-server-production.up.railway.app/api/notes/Data Communication and Networking")
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
        <div className="container">
            {error ? (
                <p>{error}</p>
            ) : (
                topics.map((topic) => (
                    <div key={topic._id}>
                        <h2 className='bold'>{topic.topicName}</h2>
                        <p>{topic.topicDescription}</p>

                        {/* Render topicPoints directly */}
                        {topic.topicPoints && topic.topicPoints.length > 0 && (
                            <ul>
                                {topic.topicPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        )}

                        {/* Display the image if a URL exists */}
                        {topic.topicImages && (
                            <img src={topic.topicImages} alt={topic.topicName} style={{ maxWidth: '100%' }} />
                        )}
                    </div>
                ))
            )}
        </div>
    );
}
