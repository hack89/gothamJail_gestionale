import React, {useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import logoGotham from '../../assets/gotham_logo.png'
import {addOfficer} from '../../actions/officerActions'
import M from 'materialize-css/dist/js/materialize.min'
import './addOfficer.scss'
 

const AddOfficer = ({addOfficer, history}) => {
    const [formData, setFormData] = useState({})

    const onChangeHandler =(e)=> {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value})
    }

    const message = `<span>Officer ${formData.name} added!</span>`

    const handleSubmit =(e)=> {
        e.preventDefault()
        addOfficer(formData)
        M.toast({html: message, classes: 'popUp'})
        goBack()
       
    }

    const goBack=()=>{
        setTimeout(()=>{
            history.push('/officers')
        },1500)
    }

    return (
        <div style={{display: "flex",flex: "1", justifyContent: "center", alignItems: "center"}}>
        <form onSubmit={handleSubmit} className="addOfficerContainer">
            <div>
            <img  className="newcoplogo" src={logoGotham} alt="" />
            </div>
        
            <div id="formPoliceInput" className="formPolice">
                <div className="inputSingle">
                    <label>Name</label>
                    <input id="nameOfficer" name="name" onChange={onChangeHandler} type="text" placeholder="insert name.." />
                </div>
                <div className="inputSingle">
                    <label>Age</label>
                    <input id="ageOfficer" type="number" onChange={onChangeHandler} name="age" placeholder="insert age.."/>
                </div>
                <div className="inputSingle">
                    <label>Gender</label>
                    <input id="genderOfficer" type="text"  onChange={onChangeHandler} name="sex" placeholder="insert gender.." />
                </div>
            
                <div className="inputSingle">
                    <label>Race</label>
                    <input id="raceOfficer" type="text" onChange={onChangeHandler} name="race" placeholder="insert race.." />
                </div>
                <div className="inputSingle">
                    <label>Weight</label>
                    <input id="weightOfficer" type="number" onChange={onChangeHandler} name="weight" placeholder="insert weight.." />
                </div>
                <div className="inputSingle">
                    <label>Role</label>
                    <input id="roleOfficer" type="text" onChange={onChangeHandler} name="role" placeholder="insert role.." />
                </div>
                <div className="inputSingle">
                    <label>Nationality</label>
                    <input id="nationOfficer" type="text" onChange={onChangeHandler} name="nationality" placeholder="insert nationality.." />
                </div>
        
                <button className="btn_add_margin_bottom" id="addOfficerData"> add officer </button>
            </div>
            <div>
                <img  className="newcoplogo" src={logoGotham} alt="" />
            </div>
        </form>
        </div>
    )
}

AddOfficer.propTypes = {
    addOfficer: PropTypes.func.isRequired,
}

export default connect(null, {addOfficer})(AddOfficer)
