import './App.css';
import Box from './component/Box'

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위바위보 버튼 각각1개 총 3개
// 3. 버튼을 누르면 가위바위보 중 선택한 값이 박스에 보임
// 4. 컴퓨터는 랜덤한 값을 표출
// 5. 승패를 가지고 승자와 패자를 나눈다.
// 6. 승패결과에 따라 테두리 색이 바뀐다. (승-초, 패-빨, 무-검)

function App() {
  return (
    <div>
      <div className='main'>
        <Box title="You" />
        <Box title="Computer" />
      </div>
      <div className="main">
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </div>
  );
}

export default App;
