
import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../store/actions/usersAction';

const ComC = ({usersUi, FetchGetUser}) => {
    console.log("UsersUI", usersUi);
    useEffect(() => {
      FetchGetUser()
    }, [])
    
  return (
    <div>
      <h1>Component C</h1>
      {
        usersUi && usersUi.map((e) => (

            <div>
                <span>{ e.username }</span>
                    <span> {e.phone} </span>
            </div>

        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
    usersUi : state?.usersRoot?.users
})
const mapDispatchToProps = {
    FetchGetUser: getUsers
}

export default connect(mapStateToProps, mapDispatchToProps) (ComC)
