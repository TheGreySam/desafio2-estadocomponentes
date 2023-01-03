import Input from './components/input';
import Header from './components/header';
import Button from './components/button';
import Footer from './components/footer';
import './App.css';


function App() {

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='m-5 pb-5'>
          <Input />
          <Button />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
