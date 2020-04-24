import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addCriminal} from '../../actions/criminalActions'
import M from 'materialize-css/dist/js/materialize.min'
import PropTypes from 'prop-types'

import './addCriminal.scss'
import styled from 'styled-components'

const FormCriminalWrapper = styled.form`
     display: flex;
     flex-direction: column;
     font-family: 'gotham';
     justify-content: space-around;
     flex: 1;

`

const InputGeneralCrime = styled.div`
     font-family: 'gotham';
     display: flex;
     justify-content: center;

    & .left,
    & .right {
        margin: 0 30px;
    }

`


const AddCriminal = ({addCriminal, history}) => {
    const [formData, setFormData] = useState({
        isInPrison: true,
        isDead: false,
        isJailbreak: false
    })

    const onChangeHandler =(e)=> {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value})
    }

    const message = `<span>Criminal ${formData.name} added!</span>`
    const handleSubmit =(e)=> {
        e.preventDefault()
        addCriminal(formData)
        M.toast({html: message, classes: 'popUp'})
        goBack()
    }

    const goBack=()=>{
        setTimeout(()=>{
            history.push('/criminals')
        },1500)
    }
    return (
        <FormCriminalWrapper onSubmit={handleSubmit} id="formCriminalInput" class="formCriminal">
             <InputGeneralCrime class="inputGeneralCrime">
                <div class="left">
                    <div class="inputSingle">
                        <label>Name</label>
                        <input id="nameCriminal" name="name" onChange={onChangeHandler}  type="text" placeholder="insert name.." />
                    </div>
                    <div class="inputSingle">
                        <label>Age</label>
                        <input id="ageCriminal"  name="age"  onChange={onChangeHandler} type="number" placeholder="insert age.."/>
                    </div>
                    <div class="inputSingle">
                        <label>Gender</label>
                        <input id="genderCriminal" name="sex"  onChange={onChangeHandler} type="text" placeholder="insert gender.." />
                    </div>
                
                    <div class="inputSingle">
                        <label>Race</label>
                        <input id="raceCriminal" name="race" onChange={onChangeHandler}  type="text" placeholder="insert race.." />
                    </div>
                    <div class="inputSingle">
                        <label>Weight</label>
                        <input id="weightCriminal" name="weight"  onChange={onChangeHandler} type="number" placeholder="insert weight.." />
                    </div>
                
                    <div class="inputSingle">
                        <label>Nationality</label>
                        <input id="nationCriminal" name="nationality"  onChange={onChangeHandler} type="text" placeholder="insert nationality.." />
                    </div>
                </div>

                <div class="right">
                    <div class="inputSingle">
                        <label>Incarceration date</label>
                        <input id="incarcerationDateCriminal"  onChange={onChangeHandler} name="incarcerationDate" type="date" placeholder="select incarceration data.." />
                    </div>
                    <div class="inputSingle">
                        <label>Release date</label>
                        <input id="releaseDateCriminal" onChange={onChangeHandler}  name="releaseDate"  type="date" placeholder="select release data.." />
                    </div>
                    <div class="inputSingle">
                        <label>Crime</label>
                        <input id="crimeCriminal" name="crime"  onChange={onChangeHandler} type="text" placeholder="insert crime.." />
                    </div>
                    <div class="inputSingle">
                        <label>Pic</label>
                        <input id="picCriminal" name="pic" type="text" onChange={onChangeHandler}  placeholder="insert photo URL.." />
                    </div>
                </div>
           </InputGeneralCrime>
   
           <button class="btn_add_margin_bottom" id="addCriminalData"> add criminal </button>
       </FormCriminalWrapper>
    )
}

AddCriminal.propTypes = {
    addCriminal: PropTypes.func.isRequired,
}

export default connect(null, {addCriminal})(AddCriminal)



