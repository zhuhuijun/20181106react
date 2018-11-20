export const loadMore = (ele, cb) => {
    let timer = null;
    ele.addEventListener('scroll', () => {
        let {offsetHeight, scrollTop, scrollHeight} = ele;
        clearTimeout(timer);
        timer = setTimeout(function () {
            console.info(offsetHeight, scrollTop, scrollHeight);
            if (scrollTop + offsetHeight + 20 > scrollHeight) {
                cb();
            }
        }, 30);
    }, false);
};


export const pullRefresh = (ele, cb) => {
    //当前元素的偏移量
    //1.如果正在下拉，无效
    let offsetTop = ele.offsetTop;
    let distance = 0;
    ele.addEventListener('touchstart', (e) => {
        let starty = e.touches[0].pageY;
        let touchmove = function (e) {
            let movey = e.touches[0].pageY;
            //console.log(movey, starty);
            let distanceCm = movey - starty;
            if (distanceCm > 0)//下拉
            {
                if (distanceCm >= 50) {
                    distance = 50;
                    return ele.style.top = (offsetTop + 50) + 'px';
                }
                ele.style.top = (offsetTop + distanceCm) + 'px';
                distance = distanceCm;
                //console.log('pull...........',distance);
            } else {
                ele.removeEventListener('touchmove', touchmove);
                ele.removeEventListener('touchend', touchend);
            }
        };
        let touchend = function () {
            let timer = null;
            if (distance !== 50) {
                return ele.style.top = (offsetTop) + 'px';
            }
            timer = setInterval(() => {
                distance--;
                if (distance <= 0) {
                    clearInterval(timer);
                    cb();
                }
                ele.style.top = (offsetTop + distance) + 'px';
            }, 6);
            ele.removeEventListener('touchmove', touchmove);
            ele.removeEventListener('touchend', touchend);
        };
        if (offsetTop === ele.offsetTop && ele.scrollTop === 0) {
            ele.addEventListener('touchmove', touchmove);
            ele.addEventListener('touchend', touchend);
        } else {
            ele.removeEventListener('touchmove', touchmove);
            ele.removeEventListener('touchend', touchend);
        }
    }, false);
};