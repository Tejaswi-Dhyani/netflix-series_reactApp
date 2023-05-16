import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Card from "./Card";


function App() {
  return (
   <>
   <div className="AppBody">
    <div className="headingbar  bg-light py-3 mb-5 ">
      <h2 className="text-center"> Top Netflix Series</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
        <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
sname="DARK" 
slink="https://www.netflix.com/in/title/80100172"
          /> 
        </div>
        <div className="col-md-4 mb-4">
        <Card imgsrc="https://m.media-amazon.com/images/M/MV5BMzM2NTAzMzYtNWVlNi00NzFmLWE3MjgtMWI5NWI2MjAzZjdmXkEyXkFqcGdeQXVyODE2MzY0ODM@._V1_FMjpg_UX1000_.jpg"
sname="Extra Curricular" 
link="https://www.netflix.com/in/title/80990668" 
        /> 
        </div>
        <div className="col-md-4 mb-4">
          <Card imgsrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Stranger_Things_logo.png/640px-Stranger_Things_logo.png"
sname="Stranger Things" 
link="https://www.netflix.com/in/title/80057281"
        /> 
        </div>
        <div className="col-md-4 mb-4">
        <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
sname="DARK" 
link="https://www.netflix.com/in/title/80100172"
        /> 
        </div>
        <div className="col-md-4 mb-4">
        <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
sname="DARK" 
link="https://www.netflix.com/in/title/80100172"
        /> 
        </div>
        <div className="col-md-4 mb-4">
        <Card 
        imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
        sname="DARK" 
        link="https://www.netflix.com/in/title/80100172"/> 
        </div>
      </div>
    
   

    </div>
   
    
   
   </div>

   
   </>
  );
}

export default App;
