import './App.css';
import Card from './../src/components/Card';


function App() {
  return (
    <div className="App">
      <Card name={'card card1'} number={'300'} speed={'10'}></Card>
      <Card name={'card card2'} number={'450'} speed={'50'}></Card>
      <Card name={'card card3'} number={'550'} speed={'100'}></Card>
      <Card name={'card card4'} number={'1000'} speed={'200'}></Card>
    </div>
  );
}

export default App;
