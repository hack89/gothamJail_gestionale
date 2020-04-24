import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getCriminal} from '../../actions/criminalActions'
import PropTypes from 'prop-types'
import SingleCriminal from './SingleCriminal'
import './criminalList.scss'

const CriminalList = ({criminals, getCriminal}) => {
    
    useEffect(()=>{
        getCriminal()
    },[getCriminal])


    return (
       
        <div className="criminalList">
            <h2 className="title"> CRIMINALS LIST </h2>

           { !criminals ? ( <h1>loading</h1>) : ( 
                    <table>
                        <thead >
                            <tr>
                            <th></th>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>NATION</th>
                                <th>RACE</th>
                                <th>GENDER</th>
                                <th>WEIGHT</th>
                                <th>ARREST</th>
                                <th>RELEASE</th>
                                <th>CRIME</th>
                                <th>EDIT</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
            
                        {criminals.map(criminal => (
                            <SingleCriminal criminal={criminal} key={criminal.id} />
                        ))}

                        </tbody>
                    </table>
            )}

        </div>

    )
}

CriminalList.propTypes = {
    criminals: PropTypes.array,
    getCriminal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    criminals: state.criminal.criminals
})

export default connect(mapStateToProps, {getCriminal})(CriminalList)

 