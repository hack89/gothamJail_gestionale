import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getSingleCriminal} from '../../actions/criminalActions'


const SingleCriminal = ({criminal}) => {
    console.log(criminal)

    return (
        <tr  className={criminal.isDead ? 'morto' : (criminal.isJailbreak) ? 'evaso' : 'vivo'}>
            <td style={{cursor: "pointer"}}>
                <img className="criminal_photo" alt="" src={criminal.pic}/>         
            </td>
            <td>{criminal.id}</td>
            <td>{criminal.name}</td>
            <td>{criminal.age}</td>
            <td>{criminal.nationality}</td>
            <td>{criminal.race}</td>
            <td>{criminal.sex}</td>
            <td>{criminal.weight}</td>
            <td>{criminal.incarcerationDate}</td>
            <td>{criminal.releaseDate}</td>
            <td>{criminal.crime}</td>
            <td>
                <Link to={`/editCriminal/${criminal.id}`} ><i className="fas fa-pencil-alt"></i></Link>
            </td>
            <td>
              
                 {criminal.isInPrison ? <i class="fas fa-user-lock"></i> : (criminal.isDead) ? <i className="fas fa-skull"></i>  : <i class="fas fa-running"></i> }
            </td>
        </tr>
    )
}




export default connect(null, {getSingleCriminal})(SingleCriminal)


