
import React from 'react';
import axios from "axios";
import  { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import image from "../../assets/images/profile/vecteur-d-icône-de-profil-avatar-par-défaut-image-sociale-utilisateur-médias-social-182145777.jpg"
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import DashboardCard from 'src/components/shared/DashboardCard';

  export default function TypographyPage() {
    const [user, setUser] = useState([]);

    const { id } = useParams();
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:8080/authentication-management/user/all");
      setUser(result.data);
    };
    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers();
    };
   
 
  return (<>

<DashboardCard title="Users">
<MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Status</th>
          <th scope='col'>Role</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {user.map((users) => (
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src={image}
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{users.username}</p>
                <p className='text-muted mb-0'>{users.email}</p>
              </div>
            </div>
          </td>
          
          
          <td>
          {users.enabled.toString() === "true" ? ( <MDBBadge color='success' pill>
            {users.enabled.toString()}
            </MDBBadge>):( <MDBBadge color='danger' pill>
            {users.enabled.toString()}
            </MDBBadge>)}
           
          </td>
          <td>{users.authority}</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
         ))}
      </MDBTableBody>
    </MDBTable>
    </DashboardCard>
</>
  );
};



