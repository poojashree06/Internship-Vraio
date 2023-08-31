import Album from "./Component/Pages/Album";
import Jumbotron from "./Component/Pages/Jumbotron";

function App() {
  let jumbotron_data={

    content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, placeat. Tenetur fugit blanditiis id itaque explicabo quas necessitatibus reiciendis, ipsum animi veritatis pariatur obcaecati et praesentium voluptate deleniti a expedita.",
    title:"TITLE_NAME"
  }
  return (
    <div className="bg-light">
    <main role="main">
      <Jumbotron data={jumbotron_data}/>
      <Album/>
    </main>
    </div>
  );
}
export default App;