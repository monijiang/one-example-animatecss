import React, { useState } from 'react';
import { Button, Card } from 'antd';
import { BarChartOutlined, RedditOutlined } from '@ant-design/icons';
import animate from 'animate.css';
import './Demo.css';
import 'antd/dist/antd.css';

const Demo = (props) => {
  const [coinArray, setCoinArray] = useState(['dataGroup','chainGroup']);
  const [coinList, setCoinList] = useState({
    dataGroup:{
      name:'积分',
      mark:<BarChartOutlined />,
    },
    chainGroup:{
      name:'玩具',
      mark:<RedditOutlined />
    },
  });

  function endAnimate(element) {
    element.className = '';
    element.removeEventListener('animationend', endAnimate);
  }

  function switchCoin () {
    let arr = [...coinArray];
    let t = arr[0];
    arr[0] = arr[1];
    arr[1] = t;
    setCoinArray(arr);
    let dataBox = document.getElementById('dataBox');
    let chainBox = document.getElementById('chainBox');
    
    dataBox.addEventListener('animationend', () => endAnimate(dataBox));
    dataBox.className = 'animate__animated animate__fadeInRight';
    
    chainBox.addEventListener('animationend', () => endAnimate(chainBox));
    chainBox.className = 'animate__animated animate__fadeInLeft';
  }

  function renItem(data,location) {
    let dataSource = (
      <div className="switch-item">
        <div id={`${location === 'left' ? 'dataBox' : 'chainBox'}`}>
          <div>
            <div className={`coin-box ${data.name === '积分' ? 'data-coin' : 'chain-coin'} `}>
              {data.mark}
            </div>
            <h5>
              {data.name}
            </h5>
            {data.name === '积分' ? (
              <p>可用积分：111000</p>
            ) : (
              <p>可用玩具：10</p>
            )}
  
          </div>
        </div>
      </div>
    );
    return dataSource
  }

  return(
    <Card>
      <div className="switch-box">
        {renItem(coinList[coinArray[0]],'left')}
        <div className="switch-btn">
          <p>兑换{coinList[coinArray[1]].name}</p>
          <Button size="large" onClick={switchCoin}>切换</Button>
        </div>
        {renItem(coinList[coinArray[1]],'right')}
      </div>
    </Card>
    
  )  
}

export default Demo;