import './App.css';
import HeaderPage from './components/HeaderPage';
import MainTop from './components/MainTop';
import ArticlePage from './components/ArticlePage';
import SectionInfo from './components/SectionInf';
function App() {
  return (
    <div className="App">
      <HeaderPage/>
      <MainTop/>
      <ArticlePage/>
      <SectionInfo/>
    </div>
  );
}

export default App;
