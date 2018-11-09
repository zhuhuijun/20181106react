import React, {Component} from 'react';
import logo from '../../images/logo.png';
import Transition from 'react-transition-group/Transition';

const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    display: 'none'
};
const transitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1}
};
export default class HomeHeader extends Component {
    constructor() {
        super();
        this.state = {
            isShow: false
        }
    }

    changeShow = () => {
        this.setState({
            isShow: !this.state.isShow
        });
    }

    render() {
        return (
            <div className="home-header">
                <div className="home-header-logo">
                    <img src={logo} alt="Logo"/>
                    <div className='home-header-btn' onClick={() => {
                        this.changeShow()
                    }}>
                        {this.state.isShow ? <i className="iconfont icon-guanbi"></i> :
                            <i className="iconfont icon-liebiao"></i>}
                    </div>
                </div>
                <Transition in={this.state.isShow} timeout={duration}
                            onEnter={(node) => {
                                node.style.display = 'block'
                            }}
                            onExited={(node) => {
                                node.style.display = 'none'
                            }}>
                    {
                        (state) => (
                            <ul className='home-header-list' style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                                <li>全部课程</li>
                                <li>Vue课程</li>
                                <li>React课程</li>
                            </ul>
                        )
                    }
                </Transition>
            </div>
        )
    }
}