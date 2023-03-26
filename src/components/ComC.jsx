
import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getUsers } from '../store/actions/usersAction';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: aliceblue;
  width:100%;
`

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Title_1 = styled.h3`
  font-size: 1em;
  text-align: center;
  color: #1f1a1b;
`;
const Button = styled.button`
  font-size: 1rem;
  text-align: center;
  padding: 10px;
  display: flex;
  margin-block:1rem;
  border-radius:10px;
  flex-direction:column;
  background-color:blueviolet;
  border:none;
  cursor: pointer;
`;
const ComC = ({usersUi, FetchGetUser}) => {
    console.log("UsersUI", usersUi);
  
    useEffect(() => {
      FetchGetUser()
    }, [])


      const handleEdit = () => {
        alert('Yes😀');
    }
    const handleDelete = (e) => {
      
        alert('Are you sure you want to delete user 🤔 ', e.id, ' ?');
    }

  return (
    <Wrapper>
      
      {
        usersUi && usersUi.map((e) => (

            <div key={e.id} >
                <Title>Name:{ e.name }</Title>
                    <Title_1>Email: {e.email} </Title_1>
                    <Title_1>Phone: {e.phone} </Title_1>
                    <Title_1>Company Name:{e.company.name} </Title_1>
                    
            </div>

        ))
      }
       <Button onClick={handleEdit} href="#">Edit</Button>
                                  
      <Button onClick={handleDelete} href="#">Delete </Button>
    </Wrapper>
  )
}

const mapStateToProps = (state) => ({
    usersUi : state?.usersRoot?.users
})
const mapDispatchToProps = {
    FetchGetUser: getUsers
}

export default connect(mapStateToProps, mapDispatchToProps) (ComC)
