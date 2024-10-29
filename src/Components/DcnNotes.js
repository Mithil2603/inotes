import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DcnNotes() {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/topics')
            .then(response => {
                setTopics(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <>
            <div className='container'>
                {topics.map((topic, index) => (
                    <div key={topic.topic_id}>  {/* Using topic_id as a unique key */}
                        <h2>{topic.topic_name}</h2>
                        <p>{topic.topic_description}</p>

                        {/* Conditionally render points if available */}
                        {topic.description_points && (
                            <ul>
                                {JSON.parse(topic.description_points).map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        )}

                        {/* Displaying the image if a URL exists */}
                        {topic.topic_img_url && (
                            <img src={topic.topic_img_url} alt={topic.topic_name} style={{ maxWidth: '100%' }} />
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}
