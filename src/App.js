import { useState } from "react"
import './App.css';
import Box from './component/Box'

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위바위보 버튼 각각1개 총 3개
// 3. 버튼을 누르면 가위바위보 중 선택한 값이 박스에 보임
// 4. 컴퓨터는 랜덤한 값을 표출
// 5. 승패를 가지고 승자와 패자를 나눈다.
// 6. 승패결과에 따라 테두리 색이 바뀐다. (승-초, 패-빨, 무-검)

const choice = {
  rock: {
    name: "Rock",
    img: "https://images.unsplash.com/photo-1584630932270-fe617b089c02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  scissors: {
    name: "Scissors",
    img: "https://images.unsplash.com/photo-1611075384257-16ab912e8228?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHZpY3RvcnklMjBzaWdufGVufDB8fDB8fHww"
  },
  paper: {
    name: "Paper",
    img: "https://images.unsplash.com/photo-1545166867-476da315406e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc5fHxoYW5kfGVufDB8fDB8fHww"
  }
};

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [comSelect, setComSelect] = useState(null)
  const [userResult, setUserResult] = useState("")
  const [comResult, setComResult] = useState("")
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComSelect(computerChoice);
    setUserResult(judgement1(choice[userChoice], computerChoice));
    setComResult(judgement2(computerChoice, choice[userChoice]));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("item array: ", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement1 = (user, computer) => {
    console.log("user", user, "computer", computer);

    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "Win" : "Lose"
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "Win" : "Lose"
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "Win" : "Lose"
    }
  };

  const judgement2 = (computer, user) => {
    if (computer.name === user.name) {
      return "Tie";
    } else if (computer.name === "Rock") {
      return user.name === "Scissors" ? "Win" : "Lose"
    } else if (computer.name === "Scissors") {
      return user.name === "Paper" ? "Win" : "Lose"
    } else if (computer.name === "Paper") {
      return user.name === "Rock" ? "Win" : "Lose"
    }
  }

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={userResult} />
        <Box title="Computer" item={comSelect} result={comResult} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
