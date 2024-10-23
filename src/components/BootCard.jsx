import React from 'react'

function BootCard({ title, description, src, brand, category, func }) {
    return (
        
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {description}               
                 </p>

                <a href="#" className="btn btn-primary">
                    Show More
                </a>
            </div>
        </div>

    )
}

export default BootCard