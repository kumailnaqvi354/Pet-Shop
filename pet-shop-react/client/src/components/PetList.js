import { useSelector, useDispatch } from 'react-redux'
import petsListJson from '../pets.json'
import { adoptPet, removeAdoption } from '../store/adoptSlice';
import Adopters from './Adopters';


function PetList() {
  const address = useSelector((state) => {
    return state.adoptReducer.address;
  })
  const contract = useSelector((state) => {
    return state.adoptReducer.contract;
  })
  const adopterList = useSelector((state) => {
    return state.adoptReducer.adopters
  })
  const { adoptInProgess, adoptError, adoptErrorMessage } = useSelector((state) => {
    return state.adoptReducer;
  })


  const dispatch = useDispatch();


  return (
    <div>
      <div>
        Hello Pet List = {address}
      </div>

      <Adopters />

      {
        adoptInProgess ? <div className={"loading"}>
          <img src="images/progress.gif" style={{ width: "300px" }} />
        </div> : null
      }

      {
        adoptError ? <p style={{ color: "red" }}>{adoptErrorMessage}</p> : null
      }

      {petsListJson.map((item) => (
        <div key={item.id} style={{ border: "1px solid black", display: "inline-block", padding: "20px", margin: "20px" }} >
          <div>
            <h3>{item.name} </h3>
          </div>
          <div>
            <img alt="140x140" src={item.picture} style={{ width: '200px' }} />
            <br /><br />
            <strong>Breed</strong>:<span>{item.breed}</span> <br />
            <strong>Age</strong>:<span>{item.age}</span> <br />
            <strong>Location</strong>:<span>{item.location}</span> <br />
            <div>{adopterList[item.id]} </div>
            {
              adopterList[item.id] === '0x0000000000000000000000000000000000000000' ? <button type="button" onClick={async () => {
                console.log(item.id)
                dispatch(adoptPet(item.id));
                

              }} >Adopt</button> :<div>
               { adopterList[item.id] === address ?<button type="button" onClick={async()=>{
                  console.log(address)
                  dispatch(removeAdoption(item.id)) 
                  
                 
                  
                }}>Remove Adoption</button>:<strong>Adopted</strong>
               
               }
               </div>
            } 
            

          </div>
        </div>
      ))

      }
      
    </div>
  );
}

export default PetList;