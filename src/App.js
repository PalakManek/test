import './App.css';
import {useState } from 'react';

function App() {

  
  const [articleCount , setArticleCount] = useState(3);
  const [articles, setArtcles] = useState(new Array(3).fill(0));

  return (
    <div className="App">
    <h1 className='heading'>Related Articles</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <div className='container'>
      {articles.length > 0 ? (articles.map((a , i) => (
        <div key={i} className='article-card'>
           <div className='article-card-content'>
        <p>28 sept 2022</p>
        <h2>Title {i +1}</h2>
        <p className='article-details'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <a href='/' className='read-more-link'>Read More</a>
      </div>
      </div>
      ))) : <p className='no-article-text'>No Article Found</p>}
    </div>
    <div className='read-more-div'>
    <button className='ead-more-btn secondary'>Read More</button>
    <input className='input-field' data-testid="articleCount" type={"number"} value={articleCount} onChange={(e) => {
        if(e.target.value <= 6 && e.target.value >= 0) {
          setArticleCount(e.target.value);
          setArtcles(new Array(Number(e.target.value)).fill(0));
        }
      }}/>
    </div>
    </div>
  );
}

export default App;
