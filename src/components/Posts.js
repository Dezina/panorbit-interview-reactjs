import React from 'react';
import styles from './Display.module.css'; // Import css modules stylesheet as styles

function Posts() {
    return (

        <div className="container">
            <div className="row">

                <h3>Posts</h3>

                <div className="col-md-11">
                    <div className={`${styles.soon}`}>
                        <p>Coming soon...</p>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Posts
