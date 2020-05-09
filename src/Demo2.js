import React, { useState } from 'react';
import { Button, Card } from 'antd';
import './Demo.css';
import 'antd/dist/antd.css';

// class Demo extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       coinArray: ['dataGroup','chainGroup'],
//       coinList: {
//         dataGroup:{
//           symbol:'UDCNY',
//           name:'数积分',
//           mark:'¥',
//         },
//         chainGroup:{
//           symbol:'UDT',
//           name:'链积分',
//           mark:'Ð'
//         },
//       }
//     };
//   }

//   switchCoin = () => {
//     const { coinArray } = this.state;
//     let arr = coinArray;
//     let t = arr[0];
//     arr[0] = arr[1];
//     arr[1] = t;
//     this.setState({ coinArray: arr });
//     let dataBox = document.getElementById('dataBox');
//     let chainBox = document.getElementById('chainBox');
//     dataBox.addEventListener('animationend', () => this.endAnimate(dataBox));
//     dataBox.className = 'animated fadeInRight';
//     chainBox.addEventListener('animationend', () => this.endAnimate(chainBox));
//     chainBox.className = 'animated fadeInLeft';
//   }

//   renItem = (data,location) => {
//     let dataSource = (
//       <div className="switch-item">
//         <div id={`${location === 'left' ? 'dataBox' : 'chainBox'}`}>
//           <div>
//             <div className={`coin-box ${data.name === '数积分' ? 'data-coin' : 'chain-coin'} `}>{data.mark}</div>
//             <h5>{data.name}({data.symbol})</h5>
//             {data.name === '数积分' ? (
//               <p>可用余额：111</p>
//             ) : (
//               <p>可用资产：10000</p>
//             )}
  
//           </div>
//         </div>
//       </div>
//     );
//     return dataSource
//   }

//   render() {
//     const { coinList, coinArray } = this.state;
//     return (
//       <Card>
//         <div className="switch-box">
//           {JSON.stringify(coinList[coinArray[0]])}
//           {renItem(coinList[coinArray[0]],'left')}
//           <div className="switch-btn">
//             <p>兑换{coinList[coinArray[1]].name}</p>
//             <Button size="large" onClick={this.switchCoin}>切换</Button>
//           </div>
//           {renItem(coinList[coinArray[1]],'right')}
//         </div>
//       </Card>
//     )
//   }
// }
const Demo2 = (props) => {
  const [coinArray, setCoinArray] = useState(['dataGroup','chainGroup']);
  const [coinList, setCoinList] = useState({
    dataGroup:{
      symbol:'UDCNY',
      name:'数积分',
      mark:'¥',
    },
    chainGroup:{
      symbol:'UDT',
      name:'链积分',
      mark:'Ð'
    },
  });

  const firstItem = coinList[coinArray[0]];
  const secondItem = coinList[coinArray[1]];
  console.log(firstItem, secondItem);

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
    console.log(arr);
    console.log(coinList[coinArray[0]], coinList[coinArray[1]])
    let dataBox = document.getElementById('dataBox');
    let chainBox = document.getElementById('chainBox');
    dataBox.addEventListener('animationend', () => endAnimate(dataBox));
    dataBox.className = 'animated fadeInRight';
    chainBox.addEventListener('animationend', () => endAnimate(chainBox));
    chainBox.className = 'animated fadeInLeft';
    console.log(111);
    console.log(dataBox.className, chainBox.className);
  }

  function renItem(data,location) {
    console.log(data,location);
    let dataSource = (
      <div className="switch-item">
        <div id={`${location === 'left' ? 'dataBox' : 'chainBox'}`}>
          <div>
            <div className={`coin-box ${data.name === '数积分' ? 'data-coin' : 'chain-coin'} `}>{data.mark}</div>
            <h5>{data.name}({data.symbol})</h5>
            {data.name === '数积分' ? (
              <p>可用余额：111</p>
            ) : (
              <p>可用资产：10000</p>
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
        {JSON.stringify(coinArray[0])}
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

export default Demo2;