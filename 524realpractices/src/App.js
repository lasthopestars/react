import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

const heavyWork=()=>{
  console.log('heavy work!!');
  return ['홍길동', '김민수'];
}


function App() {
const [names, setNames]=useState(()=>{
  return heavyWork();
  //이렇게 콜백하면 한번만 불려진다.
  //state는 현재 상태값, setState로 상태 변경 가능.
  //setState 쓸 때마다 컴포넌트는 다시 렌더링.
  
});
const [input, setInput]=useState('')
const handleInputChange=(e)=>{
  setInput(e.target.value);
}

const handleUpload=()=>{
  setNames((prevState)=>{
    console.log('이전 state: ', prevState);
    return [input,...prevState]
  });
};

console.log(input);

  return (
    <div key="unique">
      <input type="test" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
    {names.map((name,idx)=> {
      return <p key={idx}>{name}</p>;
    })}
    </div>
  );
}

export default App;
