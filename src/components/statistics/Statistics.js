import React, { Fragment, useState, useEffect } from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {getCriminal} from '../../actions/criminalActions'
import {getOfficer} from '../../actions/officerActions'
import PropTypes from 'prop-types'

import './statistics.scss'


const Statistics = ({criminal, officer, isLoading, getCriminal, getOfficer}) => {
    const [date, setDate] = useState('')
    const [numberCriminal, setNumberCriminal] = useState(null)
    const [numberOfficer, setNumberOfficer] = useState(null)
    const [criminalsDead, setCriminalsDead] = useState([])
    const [criminalsJail, setCriminalsJail] = useState([])
    const [criminalsReleased, setCriminalsReleased] = useState([])

    let initialState = 0
    const [count, setCount] = useState(initialState)

    useEffect(()=>{
        getCriminal()
        getOfficer()
        setNumberCriminal(criminal.length);
        addCriminalDeadNumber(criminal);
        addCriminalJailbreakNumber(criminal);
        setNumberOfficer(officer.length);
        checkCriminalRelease(criminal)
    },[isLoading])


    function checkCriminalRelease(criminal){
        const today = moment().format('YYYY-MM-DD');
    
        criminal.forEach((el) => {
            if (el.releaseDate === today) {
                setCount(prevState => prevState + 1)
                setCriminalsReleased(prevCrim => ([...prevCrim, {el}]))
            }
        })
    }
    

    function getDate(){
        var dateToday = new Date().toLocaleString();
        setDate(dateToday)
    }
    setInterval(getDate, 1000)
 
 

    function addCriminalDeadNumber(criminals) {
        let totalCriminalsDeadArray = criminals.filter(el => el.isDead !== false)
            setCriminalsDead([...totalCriminalsDeadArray])
    }

    function addCriminalJailbreakNumber(criminals) {
        let totalCriminalsJailbreakArray = criminals.filter(el => el.isJailbreak !== false)
            setCriminalsJail([...totalCriminalsJailbreakArray])
    }
 
 return (
        <Fragment>
        <div className="hour">
            {date}
        </div>
        <h3 className="titleStatistic">STATISTICS <i className="far fa-chart-bar"></i></h3>
        <div className="box-content">
        
            <div className="statisticHome">
                <div className="infoNumbers">
                    <div className="totalGuards">
                        <h3 id="totalGuardsNumberH3">NUMBER OF GUARDS: {numberOfficer} </h3>
                    </div>
                    <div className="totalCriminals">
                        <h3 id="totalCriminalsNumberH3">NUMBER OF CRIMINALS: {numberCriminal}</h3>
                    </div>
                </div>
                <div className="infoStatus">
                    <div className="released">
                        <h3 id="rilasciatiOggi">CRIMINALS RELEASED TODAY: {count}</h3>
                        <ul className="criminals_released">
                               {  criminalsReleased.map(release => (
                                <li key={release.el.id}>
                                    <img className="criminal_photo" alt="" src={release.el.pic} /> 
                                    <p style={{color: "red"}}>{release.el.name}</p>
                                </li>
                            )) }
                        </ul>
                    </div>
                    <div className="deaths">
                        <h3 id="totalCriminalDeadNumberH3">CRIMINALS DEAD: {criminalsDead.length} </h3>
                        <ul className="criminals_dead">
                            {  criminalsDead.map(dead => (
                                <li key={dead.id}>
                                <img className="criminal_photo" alt="" src={dead.pic} /> 
                                <p><span style={{color: "red"}}>{dead.name}</span></p>
                                </li>
                            )) }
                        </ul>
                    </div>
                    <div className="jailbreak">
                        <h3 id="totalCriminalJailbreakNumberH3">CRIMINALS ESCAPED: {criminalsJail.length}</h3>
                        <ul className="criminals_jailbreak">
                        {  criminalsJail.map(jail => (
                                <li key={jail.id}>
                                <img className="criminal_photo" alt="" src={jail.pic} /> 
                                <p><span style={{color: "red"}}>{jail.name}</span></p>
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}


Statistics.propTypes = {
    criminal: PropTypes.array.isRequired,
    officer: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    getCriminal: PropTypes.func.isRequired,
    getOfficer: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    criminal: state.criminal.criminals,
    isLoading: state.criminal.isLoading,
    officer: state.officer.officers
})

export default connect(mapStateToProps, {getCriminal, getOfficer})(Statistics)
