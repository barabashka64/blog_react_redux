import React from 'react'
import { Field, reduxForm } from 'redux-form'

const renderField = ({
  input,
  label,
  type
}) => (
	<div className='form-group row'>
		<input {...input} className='form-control' type={type} required='required' placeholder={label}/>
	</div>
)

const AddPostForm = props => {
	const { handleSubmit, pristine } = props
	return (
		<div className='container'>
			<hr className='form-group row' />
			<h2 className='form-group row'>Форма создания поста</h2>
			<form onSubmit={handleSubmit}>
				<Field name='title' component={renderField} type='text' label='Название поста' />
				<Field name='content' component={renderField} type='text' label='Содержание поста' />
				<button className='form-group row btn btn-primary' disabled={pristine} type='submit'>Создать пост</button>
			</form>
			<hr className='row'/>
		</div>
	)
}

export default reduxForm({
	form: 'addPostForm'
})(AddPostForm)