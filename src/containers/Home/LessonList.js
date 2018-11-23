import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class LessonList extends Component {
    render() {
        console.info(this.props.lists);
        return (
            <div className='lesson-list'>
                <ul>
                    {this.props.lists.map((item, index) => (
                        <li key={index}>
                            <Link to={{pathname: '/detail/' + item.id, state: item}}>
                                <img src={item.url} alt=""/>
                                <p>{item.title}</p>
                                <span>{item.price}</span>
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
        )
    }
}