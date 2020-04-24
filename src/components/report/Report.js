import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getCriminal} from '../../actions/criminalActions'
import moment from 'moment'
import JailSVG from '../../assets/jail.svg'
import PropTypes from 'prop-types'

import './report.scss'


const Report = ({criminal, getCriminal}) => {

    useEffect(()=>{
        getCriminal()
    }, [])

const [filteredCriminals, setFilteredCriminals] = useState([])
const [frasi, setFrasi] = useState([])
 

function calculateRelease(arr){
    arr.forEach(el => {
        console.log(el)
    let today = moment().format('YYYY-MM-DD')
    console.log(today)
    var now = el.releaseDate;
    console.log(now)

    var ms = moment(now, "YYYY-MM-DD").diff(moment(today, "YYYY-MM-DD"));
    var d = moment.duration(ms);
    var s = Math.floor(d.asHours());
    var giorni = Math.floor(s / 24)
    console.log(giorni)
    if (giorni === 0) {
        setFrasi(prevState => [...prevState, ` was released TODAY!`])
    } else if (giorni < 0) {
        setFrasi(prevState => [...prevState,` was released on ${el.releaseDate}`])
    } else {
        setFrasi(prevState => [...prevState,` -${giorni} left to FREEDOM`])
        }
    })
}

const filterCriminals = (e) => {
    setFrasi([])
     var target = e.target || e.srcElement;
     let word = target.value.trim().toLowerCase()
     if (word.length === 0) {
        
        setFilteredCriminals([])
     } else {
       let filtrati = criminal.filter(el => el.name.toString().toLowerCase().includes(word))
       setFilteredCriminals([...filtrati])
       calculateRelease(filtrati)
         
      }
     
 }


    return (
        <>
        <h2 className="title"> POLICE REPORT </h2>
            <div className="searchBox">
                <div className="searchBoxInput">
                    <input id="searchReport" onKeyUp={(e)=>filterCriminals(e)} type="text" placeholder="search criminal.." />
                </div>

                <div id="searchResult"> 

                    {filteredCriminals.length === 0 ? <p style={{textAlign: "center"}}>type a name...</p> : (
                        
                        filteredCriminals.map((el, index) => (
                                
                           
                
                            <div className="card-container" key={el.id}>
                                <div className="card-header">
                                    <span className="days_red">{el.name}</span>
                                    <div className="photo-container">
                                        <img className="photo" alt="" src={el.pic} />
                                    </div>
                                </div>
                          
                               
                                <div className="searchCriminalList"> 
                                    <div className="detailsArrest">
                                        <img id="handsCuff" alt="" width="20" src={JailSVG} />  {el.incarcerationDate}
                                    </div>
                                    <div className="detailsCrime">
                                        <span className="days_red">crime:</span> {el.crime} 
                                    </div>
                                    <div className="detailsStatus">
                                        <span className="days_red"> status: </span> {el.isDead === true ? (<i className="fas fa-skull"></i>) : (el.isJailbreak === true) ? (<i className="fas fa-running"></i>) :  frasi[index]} 
                                    </div>
                                                         
                                </div>
                            </div>  
                     
                        ))
                    )}

                </div>
            </div>

        </>
    )
}

Report.propTypes = {
    criminal: PropTypes.array.isRequired,
    getCriminal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    criminal: state.criminal.criminals
})

export default connect(mapStateToProps, {getCriminal})(Report)




