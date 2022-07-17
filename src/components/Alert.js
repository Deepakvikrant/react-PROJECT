import React from 'react'

function Alert(props) {
  const capitalize = (word)=>{
    const lower =word.tolowerCase();
    return lower.charAt(0).toUperCase()+lower.slice(1);
  }
  return (

    props.alert && <div className="danger alert-dismissible fade show" role="alert">
      <strong>{capitalize(props.alert.type)}</strong>{props.alert.type}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

  )
}

export default Alert