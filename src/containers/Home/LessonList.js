import React, {Component} from 'react';

export default class LessonList extends Component {
    render() {
        console.info(this.props.lists);
        return (
            <div className='lesson-list'>
                <ul>
                    {this.props.lists.map((item, index) => (
                        <li key={index}>
                            <img src={item.url} alt=""/>
                            <p>{item.title}</p>
                            <span>{item.price}</span>
                        </li>
                    ))}

                </ul>
            </div>
        )
    }
}