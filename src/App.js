import {Component} from "react" 
import UserProfile from "./Component/UserProfile"
import "./App.css"

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  }
]

class App extends Component{
  state={searchInput:"",userDetailsList:initialUserDetailsList}

  userInputChanges = event => {
    this.setState({
      searchInput: event.target.value
    })
  }

  deleteUser = uniqueNo => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.uniqueNo !== uniqueNo
    )
    this.setState({
      usersDetailsList: filteredUsersData
    })
  }


  render(){
    const {
      searchInput,userDetailsList
    }=this.state
    const searchOutput=userDetailsList.filter(eachItem => eachItem.name.includes(searchInput))
  return (
    <div className="container"> 
    <h1>User List</h1>
    <input type="text"  onChange={this.userInputChanges} value={searchInput} />
    <ul>
    {searchOutput.map(eachUser=>(
      <UserProfile userDetails={eachUser}
      key={eachUser.uniqueNo}
      deleteUser={this.deleteUser}
      />
    ))}
    </ul>
    </div>
  )
}
}

export default App
