import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DcnNotes.css';

export default function DcnNotes() {
    const [topics, setTopics] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://192.168.1.10:5000/api/topics') // Replace with your IP
            .then(response => {
                console.log('Fetched data:', response.data); // Log fetched data
                setTopics(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to load data.'); // Set error message for UI display if needed
            });
    }, []);

    return (
        <div className="container">
            {error ? (
                <p>{error}</p>
            ) : (
                topics.map((topic, index) => (
                    <div key={topic.topic_id}>
                        <h2 className='bold'>{topic.topic_name}</h2>
                        <p>{topic.topic_description}</p>

                        {/* Conditionally render points if available and JSON parsing succeeds */}
                        {topic.description_points && (
                            <ul>
                                {(() => {
                                    try {
                                        return JSON.parse(topic.description_points).map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ));
                                    } catch (e) {
                                        console.error('Invalid JSON in description_points:', e);
                                        return <li>Invalid data format.</li>;
                                    }
                                })()}
                            </ul>
                        )}

                        {/* Display the image if a URL exists */}
                        {topic.topic_img_url && (
                            <img src={topic.topic_img_url} alt={topic.topic_name} style={{ maxWidth: '100%' }} />
                        )}
                    </div>
                ))
            )}
        </div>
    );
}
