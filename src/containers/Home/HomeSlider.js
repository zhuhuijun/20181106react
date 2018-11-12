import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';

export default class HomeSlider extends Component {
    render() {
        console.info(this.props.lists);
        let opts={continuous: true,auto:1000};
        return (
            <div className='home-slider'>
                <ReactSwipe className='carousel' swipeOptions={opts}>
                    {this.props.lists.map((item,index)=>(
                        <div key={index}>
                            <img src={item} alt=""/>
                        </div>
                    ))}
                </ReactSwipe>
            </div>
        )
    }
}