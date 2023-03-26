
import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../store/actions/usersAction';

const ComC = ({userUi, FetchGetUser}) => {
    console.log("UsersUI", userUi);
    useEffect(() => {
      FetchGetUser()
    }, [third])
    
  return (
    <div>
      <h1>Component C</h1>
      {
        userUi && userUi.map((e) => (

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
    userUi : state?.usersRoot?.users
})
const mapDispatchToProps = {
    FetchGetUser: getUsers
}

export default connect(mapStateToProps, mapDispatchToProps) (ComC)
