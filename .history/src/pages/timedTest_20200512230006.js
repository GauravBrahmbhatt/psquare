import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import data from '../PracticeTest-master/JSON_PT.json';

export default class timedTest extends Component {

    render() {
        console.log(data);
        return (
            <div>
                <Link to="/testpage">back</Link>
                <div>{data.map((res)=>
                    <React> {res.q.map(res2=><li>{res2}</li>)}</li>
                    )
                    }</div>

            </div>
        )
    }
}
