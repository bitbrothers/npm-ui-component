import React from 'react'

function Tooltips({source}) {
    return <img alt="User Icon" style={{height:"200px",width:"200px"}} src={source} className="avatar avatar-lg" data-title="Peggy Brown" data-toggle="tooltip" data-placement="bottom" title="Tooltip"/>
}

export default Tooltips
