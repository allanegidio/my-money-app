import React from 'react'

export default props => (
	<input {...props.input}
		type={props.type}
		placeholder={props.placeholder}
		readOnly={props.readOnly}
		className='form-control' />
)