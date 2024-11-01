import React from 'react'

export default function Subject(props) {
    return (
        <>
            <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.desc}</p>
                        <a href="/" class="btn btn-primary">View Notes</a>
                    </div>
            </div>
        </>
    )
}
