import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getOfficer} from '../../actions/officerActions'
import PropTypes from 'prop-types'
import SingleOfficer from './SingleOfficer'
import './officerList.scss'

const OfficerList = ({officers, getOfficer}) => {
    
    useEffect(()=>{
        getOfficer()
    },[getOfficer])


    return (

       
        <div className="officerList">
            
            <h2 className="title"> OFFICERS LIST </h2>

           { !officers ? ( <h1>loading</h1>) : ( 
                    <table>
                        <thead >
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>NATION</th>
                                <th>RACE</th>
                                <th>ROLE</th>
                                <th>GENDER</th>
                                <th>WEIGHT</th>
                            </tr>
                        </thead>
                        <tbody>
            
                        {officers.map(police => (
                            <SingleOfficer police={police} key={police.id} />
                        ))}

                        </tbody>
                    </table>
            )}

        </div>

    )
}

OfficerList.propTypes = {
    officers: PropTypes.array.isRequired,
    getOfficer: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    officers: state.officer.officers
})

export default connect(mapStateToProps, {getOfficer})(OfficerList)
