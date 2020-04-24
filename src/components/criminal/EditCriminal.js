import React, {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min'
import PropTypes from 'prop-types'

import {getSingleCriminal,editCriminal, getCriminal} from '../../actions/criminalActions'
import './addCriminal.scss'

const EditCriminal = ({criminal: {singleCriminal, isLoading}, editCriminal ,getSingleCriminal, match, history}) => {
    let id = match.params.id
    const [changingRadio, setChangingRadio] = useState(false)
    const [formData, setFormData] = useState({
        name:  '',
        age: '',
        sex: '',
        race: '',
        weight: '',
        nationality:'',
        incarcerationDate:'',
        releaseDate: '',
        crime: '',
        pic: '',
        isInPrison: null,
        isDead: null,
        isJailbreak: null
    })

    const {name,age,sex,race,weight,nationality,incarcerationDate,releaseDate,crime,pic, isDead, isInPrison, isJailbreak} = formData;

    useEffect(()=>{
        getSingleCriminal(id)      
    },[isLoading, getSingleCriminal, id])
 
    const useIsMounted = () => {
        const isMounted = useRef(false);
        useEffect(() => {
            isMounted.current = true;
            return () => (isMounted.current = false);
        }, []);
        return isMounted;
    };
   
    const isMounted = useIsMounted()

    useEffect(()=>{
        if(singleCriminal !== null && isMounted.current){
            setFormData({
                name: singleCriminal.name,
                age: singleCriminal.age,
                sex: singleCriminal.sex,
                race: singleCriminal.race,
                weight: singleCriminal.weight,
                nationality:  singleCriminal.nationality,
                incarcerationDate:  singleCriminal.incarcerationDate,
                releaseDate:  singleCriminal.releaseDate,
                crime: singleCriminal.crime,
                pic: singleCriminal.pic,
                isInPrison: singleCriminal.isInPrison,
                isDead: singleCriminal.isDead,
                isJailbreak: singleCriminal.isJailbreak
            })
        }
    },[singleCriminal, isMounted, isLoading])



    const onChangeHandler =(e)=> {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value})
            setChangingRadio(true)
    }
   
// RADIO ============================================================================================

    useEffect(()=>{
        if(changingRadio){
            setFormData({
                ...formData
            })
            setChangingRadio(false)
            console.log(formData)
        }

    },[changingRadio])


    const onChangeRadioDead =(e)=>{
        setFormData({
            ...formData,
            isInPrison: false,
            isDead: e.target.checked,
            isJailbreak: false
        })
        setChangingRadio(true)
    }
    const onChangeRadioJail =(e)=>{
        setFormData({
            ...formData,
            isInPrison: false,
            isDead: false,
            isJailbreak: e.target.checked
        })
        setChangingRadio(true)
    }

    const onChangeRadioPrison =(e)=>{
        setFormData({
            ...formData,
            isInPrison: e.target.checked,
            isDead: false,
            isJailbreak: false
        })
        setChangingRadio(true)
    }


    // ================================================================================================

    const goBack=()=>{
        setTimeout(()=>{
            history.push('/criminals')
        },1500)
    }

    const message = `<span>Criminal ${formData.name} edited!</span>`

    const handleSubmit =(e, id)=> {
        e.preventDefault()
        editCriminal(formData, id)
        M.toast({html: message, classes: 'popUp'})
        goBack()
    }

    return (
        
        <form onSubmit={(e)=> handleSubmit(e, id)} id="formCriminalInput" className="formCriminal">
        { !singleCriminal ? ( <h1>loading</h1>) : ( 
                <>
             <div className="inputGeneralCrime">
                <div className="left">
                    <div className="inputSingle">
                        <label>Name</label>
                        <input id="nameCriminal" name="name" value={name} onChange={onChangeHandler}  type="text" placeholder="insert name.." />
                    </div>
                    <div className="inputSingle">
                        <label>Age</label>
                        <input id="ageCriminal"  name="age"  value={age}  onChange={onChangeHandler} type="number" placeholder="insert age.."/>
                    </div>
                    <div className="inputSingle">
                        <label>Gender</label>
                        <input id="genderCriminal" name="sex"  value={sex}  onChange={onChangeHandler} type="text" placeholder="insert gender.." />
                    </div>
                
                    <div className="inputSingle">
                        <label>Race</label>
                        <input id="raceCriminal" name="race" value={race}  onChange={onChangeHandler}  type="text" placeholder="insert race.." />
                    </div>
                    <div className="inputSingle">
                        <label>Weight</label>
                        <input id="weightCriminal" name="weight"  value={weight}  onChange={onChangeHandler} type="number" placeholder="insert weight.." />
                    </div>
                
                    <div className="inputSingle">
                        <label>Nationality</label>
                        <input id="nationCriminal" name="nationality"  value={nationality}  onChange={onChangeHandler} type="text" placeholder="insert nationality.." />
                    </div>
                </div>

                <div className="right">
                    <div className="inputSingle">
                        <label>Incarceration date</label>
                        <input id="incarcerationDateCriminal"  value={incarcerationDate}  onChange={onChangeHandler} name="incarcerationDate" type="date" placeholder="select incarceration data.." />
                    </div>
                    <div className="inputSingle">
                        <label>Release date</label>
                        <input id="releaseDateCriminal"  value={releaseDate}  onChange={onChangeHandler}  name="releaseDate"  type="date" placeholder="select release data.." />
                    </div>
                    <div className="inputSingle">
                        <label>Crime</label>
                        <input id="crimeCriminal" name="crime"  value={crime}   onChange={onChangeHandler} type="text" placeholder="insert crime.." />
                    </div>
                    <div className="inputSingle">
                        <label>Pic</label>
                        <input id="picCriminal" name="pic"  value={pic} type="text" onChange={onChangeHandler}  placeholder="insert photo URL.." />
                    </div>
                    <div className="radioButton">
                    <div className="innerButtonBox">
                            <label htmlFor="isinprison"  style={{color: 'greenyellow'}}>Is in prison</label>
                            <input type="radio" id="isinprison" name="status" checked={isInPrison} onChange={onChangeRadioPrison} value='isInPrison' />
                         
                        </div>
                        <div className="innerButtonBox">
                            <label htmlFor="isjailbreak"  style={{color: 'orangered'}}>Is jailbreak</label>
                            <input type="radio" id="isjailbreak" name="status" checked={isJailbreak} onChange={onChangeRadioJail} value='isJailbreak' />
          
                        </div>
                        <div className="innerButtonBox">
                            <label htmlFor="isdead" style={{color: 'red'}}>Is dead</label>
                            <input type="radio" checked={isDead} id="isdead" name="status" onChange={onChangeRadioDead} value='isDead' />
                     
                        </div>
                    </div>
                </div>
           </div>
           <button className="btn_add_margin_bottom" id="addCriminalData"> Edit criminal </button>
            </>
        )
        }
            
       </form>
       
    )
}

EditCriminal.propTypes = {
    criminal: PropTypes.object.isRequired,
    getCriminal: PropTypes.func.isRequired,
    getSingleCriminal: PropTypes.func.isRequired,
    editCriminal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    criminal: state.criminal
})

export default connect(mapStateToProps, {getSingleCriminal, editCriminal, getCriminal})(EditCriminal)



