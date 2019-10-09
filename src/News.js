import React from 'react';
import './App.css';

function News(props) {
    return (
        <div className="styleOfAll">

            <div className="date">
                <p>{props.date}</p>
            </div>


            <div>
                <div className="HeadofNews">
                    <p>{props.header}</p>
                </div>
                <div className="desciption">
                    <p>{props.des}</p>
                </div>
                <div className="author">
                    <p>
                        By {props.author}
                    </p>
                </div>
            </div>



            <div className="NewsPic">
                <img width="100%" src={props.newspic} />
            </div>
        </div>



    );

}


export default News;