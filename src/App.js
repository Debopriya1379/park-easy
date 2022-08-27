import './App.css';
import {useState} from 'react'

function App() {

  const [newDriver,setNewDriver] = useState("")
  const [newVehical, setNewVehical] = useState("")
  const [newCheckout, setNewCheckout] = useState("")
  const [allVehicals, setAllVehicals] = useState([])

  const today = new Date();
  const currtime = today.getHours() + ':' + today.getMinutes();

  const addNewVehical =()=>{
    if(newDriver==='' || newVehical==='' || newCheckout==='') alert('fill the form correctly')
    else {
      const newVehicalDoc ={
        name : newDriver,
        vehical : newVehical,
        checkin : currtime,
        checkout : newCheckout,
      }
      setAllVehicals([...allVehicals,newVehicalDoc])
      setNewDriver('')
      setNewVehical('')
      setNewCheckout('')
    }
  }



  return (
    <div className="App">
      <header>
        <h1>ParkEasy</h1>
      </header>
      <main>
        <div className="home_image">
          <img src="https://img.freepik.com/free-vector/car-dealer-showing-new-red-sports-auto_3446-654.jpg?size=338&ext=jpg&ga=GA1.2.1884758444.1661594929" alt="car" />
        </div>
        <div className="details">
          <div className="entry_form">
            <input type="text" placeholder='Driver name (max length 15)' maxLength='15' value={newDriver} onChange={(e)=>setNewDriver(e.target.value)} />
            <input type="text" placeholder='Vehical number (max length 7)' maxLength='7' value={newVehical} onChange={(e)=>setNewVehical(e.target.value)} />
            <label htmlFor="checkout">Checkout Time : </label>
            <input type="time" name="checkout" id="checkout" value={newCheckout} onChange={(e)=>setNewCheckout(e.target.value)} />
            <button onClick={()=>addNewVehical()}>Park</button>
          </div>
          <div className="vehical_list">
            <h3>Parked Vehicals</h3>
            <p>Total vehicals parked : {allVehicals.length}</p>
            {allVehicals.length !==0 ?  
              <table>
              <thead>
                <tr>
                  <th scope="col">Index</th>
                  <th scope="col">Driver</th>
                  <th scope="col">Vehical No.</th>
                  <th scope="col">Check In</th>
                  <th scope="col">Check out</th>
                </tr>
              </thead>
              <br />
                <tbody>
                  {
                    allVehicals.map((vehical,i)=>{
                      return(
                        <tr key={i}>
                          <td className="noBorder">{i+1}</td>
                          <td className="noBorder">{vehical.name.split(" ")[0]}</td>
                          <td className="noBorder">{vehical.vehical}</td>
                          <td className="noBorder">{vehical.checkin}</td>
                          <td className="noBorder">{vehical.checkout}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              : <p>No vehicals parked yet !</p>
              }
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
