import './App.css';
import Header from './components/Header/Header';
import ReviewCard from './components/ReviewCard/ReviewCard';
function App() {
  return (
    <div className="App p-5">
      <Header title='Our Reviews'/>
      <ReviewCard />
    </div>
  );
}

export default App;
