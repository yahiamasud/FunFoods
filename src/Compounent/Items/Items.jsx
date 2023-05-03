import React from 'react';

const Items = ({chefs}) => {
    const { name } = chefs;
    console.log(name)
    return (
        <div>
            <div className="card  glass">
                <figure><img src="" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;