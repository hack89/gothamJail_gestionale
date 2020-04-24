import React from 'react'

const SingleOfficer = ({police}) => {
    return (
        <tr>
            <td>{police.id}</td>
            <td>{police.name}</td>
            <td>{police.age}</td>
            <td>{police.nationality}</td>
            <td>{police.race}</td>
            <td>{police.role}</td>
            <td>{police.sex}</td>
            <td>{police.weight}</td>
        </tr>
    )
}

export default SingleOfficer
