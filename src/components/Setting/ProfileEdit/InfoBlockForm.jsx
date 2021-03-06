import React from 'react'
import {maxLength, minValue, required} from "../../../utils/validators/validator";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/textarea/textarea";
import {InputBase} from "../../common/input/input";
import {Preloader} from "../../common/preloader/spinner";


const maxLength50 = maxLength(50)
const minValue1 = minValue(1)

const ProfileDataForm = (props) => {

    const {handleSubmit, pristine, submitting, reset, error} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h4>About me:</h4>
                <Field component={Textarea}
                       name={'aboutMe'}
                       type='text'
                       placeholder={'Write about your'}
                       validate={[required, maxLength50, minValue1]}
                />
                <h4>Full Name</h4>
                <Field component={InputBase}
                       name={'fullName'}
                       type='text'
                       placeholder={'Full name'}
                       validate={[required, maxLength50, minValue1]}
                />
                <div>
                    <h4>Job information:</h4>
                    <span>Open for job&nbsp;</span>
                    <Field component={'input'}
                           name={'lookingForAJob'}
                           type="checkbox"/>
                    <p>Description for job</p>
                    <Field component={Textarea}
                           name={'lookingForAJobDescription'}
                           type='text'
                           placeholder={'Description for job'}
                           validate={[required, maxLength50, minValue1]}
                    />
                </div>
                <div>
                    <h4>Contacts:</h4>
                    <p>Facebook:</p>
                    <Field component={InputBase}
                           name={'contacts.facebook'}
                           type='text'
                           placeholder={'https://'}
                           validate={[maxLength50, minValue1]}
                    />
                    <p>Website:</p>
                    <Field component={InputBase}
                           name={'contacts.website'}
                           type='text'
                           placeholder={'https://'}
                           validate={[maxLength50, minValue1]}
                    />
                    <p>VK:</p>
                    <Field component={InputBase}
                           name={'contacts.vk'}
                           type='text'
                           placeholder={'https://'}
                           validate={[maxLength50, minValue1]}
                    />
                    <p>Twitter:</p>
                    <Field component={InputBase}
                           name={'contacts.twitter'}
                           type='text'
                           placeholder={'https://'}
                           validate={[maxLength50, minValue1]}
                    />
                    <p>Instagram:</p>
                    <Field component={InputBase}
                           name={'contacts.instagram'}
                           type='text'
                           placeholder={'https://'}
                           validate={[maxLength50, minValue1]}
                    />
                    <p>YouTube:</p>
                    <Field component={InputBase}
                           name={'contacts.youtube'}
                           type='text'
                           placeholder={'https://'}
                           validate={[maxLength50, minValue1]}
                    />
                    <p>GitHub:</p>
                    <Field component={InputBase}
                           name={'contacts.github'}
                           type='text'
                           placeholder={'https://'}
                           validate={[maxLength50, minValue1]}
                    />
                    <p>MainLink:</p>
                    <Field component={InputBase}
                           name={'contacts.mainLink'}
                           type='text'
                           placeholder={'https://'}
                           validate={[maxLength50, minValue1]}
                    />
                </div>
            </div>
            <div>
                <button type="submit"
                        disabled={submitting}>Save
                </button>
                <button type="button"
                        disabled={pristine || submitting} onClick={reset}>Clear
                </button>
            </div>
            {error ? <div>{error}</div> : null}
        </form>
    )
}

const ProfileDataReduxForm = reduxForm(
    {
        form: 'newProfileData',
    }
)(ProfileDataForm)

const ProfileDataEdit = ({saveProfile, profile, isLoading}) => {
    /*
    * Для полей contacts мы в качестве названия используем 'contacts.Name'
    * Чтобы внутри formData, создался объект contacts. И value для этих полей отображался
    */
    const onSubmit = (formData) => {
        saveProfile(formData)
    }

    return (
        <div>
            <h3>Change your information:</h3>
            <ProfileDataReduxForm onSubmit={onSubmit} initialValues={profile} isLoading={isLoading}/>
            {isLoading ? <Preloader/> : null}
        </div>
    )
}

export default ProfileDataEdit