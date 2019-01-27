import * as Yup from 'yup'

import { fieldNames, validationMessages } from './SignInForm.constants'

export const validationSchema = Yup.object({
    [fieldNames.EMAIL]: Yup.string()
        .required(validationMessages.REQUIRED_EMAIL)
        .email(validationMessages.INVALID_EMAIL),
    [fieldNames.PASSWORD]: Yup.string()
        .required(validationMessages.REQUIRED_PASSWORD),
})
