import './App.css';
import {Sidebar} from './containers/containers';
import Top from './containers/top';
import Search from './containers/search';

function App() {
  return (
    <div className="App w-[1400px] h-[720px] top-[271px] left-[22px] gap-[0px] bg-[rgba(246, 248, 250, 1)]">
      <header className="App-header flex w-[1400px] h-[568px] top-[271px] left-[22px] gap-[0px] bg-[rgba(246, 248, 250, 1)]">
        <Sidebar/>
        <Top/>
        <Search />
      </header>
    </div>
  );
}

export default App;
