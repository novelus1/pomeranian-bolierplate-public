import { useState } from 'react';
import Select from 'react-select';
import './Form.css';
import { RadioButtons } from './RadioButtons/RadioButtons';
import { Checkboxes } from './Checkboxes/Checkboxes';
import { MainSection } from './MainSection/MainSection';
import { FieldSection } from './FieldSection/FieldSection';

export function Form() {
    const validateEmail = (value) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(value);
    };

    const validatePhoneNumber = (value) => {
        const phoneNumberPattern = /^\d{9}$/;
        return phoneNumberPattern.test(value);
    };
    const validateLogin = (login) => {
        return login && login.length >= 4 && !/[!@#$%^&*]/.test(login);
    };

    const [isPasswordStrong, setIsPasswordStrong] = useState(true);
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [isEmailValid, setIsEmailValid] = useState();
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState();
    const [createAccount, setCreateAccount] = useState(false);
    const [subscribeToNewsletter, setSubscribeToNewsletter] = useState(false);
    const [commentsCharacterCount, setCommentsCharacterCount] = useState(0);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)


    const validatePasswordStrength = (password) => {
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /[0-9]/;
        const specialCharacterRegex = /[!@#$%^&*]/;
        return (
            password.length >= 8 &&
            uppercaseRegex.test(password) &&
            lowercaseRegex.test(password) &&
            digitRegex.test(password) &&
            specialCharacterRegex.test(password)
        );
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

        const isStrong = validatePasswordStrength(newPassword);
        setIsPasswordStrong(isStrong);
    };

    const productOptions = [
        { value: 'frontend', label: 'Front-end course' },
        { value: 'backend', label: 'Back-end course' },
        { value: 'devops', label: 'DevOps course' },
    ];

    const paymentTypeOptions = [
        { value: 'blik', label: 'BLIK' },
        { value: 'paypal', label: 'PayPal' },
        { value: 'transfer', label: 'Traditional transfer' },
    ];

    const additionalOptionList = [
        { fieldName: 'github', label: 'GitHub intro' },
        { fieldName: 'environment', label: 'IDE setup' },
        { fieldName: 'extraDocuments', label: 'Additional materials' },
    ];
    const [formData, setFormData] = useState({
        product: 'devops',
        paymentType: 'paypal',
        additionalOptions: {
            github: true,
            environment: false,
            extraDocuments: true,
        },
        nameAndSurname: '',
        email: '',
        details: '',
        phoneNumber: '',
        consents: false,
    });

    const [isAllRequiredFieldsFilled, setIsAllRequiredFieldsFilled] =
        useState(true);

    const isNameAndSurnameValid =
        formData.nameAndSurname.length > 0
            ? formData.nameAndSurname.trim().includes(' ')
            : true;

    const isPasswordMatching = password === passwordConfirmation;

    const isFieldsValid =
        isEmailValid &&
        isNameAndSurnameValid &&
        isPhoneNumberValid &&
        formData.consents &&
        isAllRequiredFieldsFilled &&
        (!createAccount ||
            (formData.login && formData.password && isPasswordMatching));

    function updateAdditionalOptions(fieldName, newValue) {
        setIsAllRequiredFieldsFilled(true);
        setFormData({
            ...formData,
            additionalOptions: {
                ...formData.additionalOptions,
                [fieldName]: newValue,
            },
        });
    }

    function updateFormData(onChangeEvent) {
        setIsAllRequiredFieldsFilled(true);
        const { name, value, type, checked } = onChangeEvent.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    }
    return (
        <div className='form-wrapper'>
            <>
                <div className='form'>
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            setIsFormSubmitted(true)

                        }}
                    >
                        <MainSection title="PRODUCT ORDER">
                            <FieldSection title="Choose a product *">
                                <Select
                                    className='form__product-select'
                                    value={productOptions.find(
                                        (item) => item.value === formData.product
                                    )}
                                    options={productOptions}
                                    onChange={(selectedItem) => {
                                        setFormData({
                                            ...formData,
                                            product: selectedItem.value,
                                        });
                                    }}
                                />
                            </FieldSection>
                            <FieldSection title="Choose a payment method *">
                                <RadioButtons
                                    name="paymentType"
                                    options={paymentTypeOptions}
                                    value={formData.paymentType}
                                    onChange={updateFormData}
                                />
                            </FieldSection>
                            <FieldSection title="Additional options for your order *">
                                <Checkboxes
                                    list={additionalOptionList.map((item) => {
                                        return {
                                            ...item,
                                            isChecked: formData.additionalOptions[item.fieldName],
                                        };
                                    })}
                                    onChange={updateAdditionalOptions}
                                />
                            </FieldSection>
                        </MainSection>

                        <MainSection title="ORDER INFORMATION">
                            <FieldSection title="Name and surname *">
                                <input
                                    type="text"
                                    name="nameAndSurname"
                                    value={formData.nameAndSurname}
                                    onChange={updateFormData}
                                    className={!isNameAndSurnameValid ? 'input-field-error' : ''}
                                />
                                {!isNameAndSurnameValid && (
                                    <p className="input-field-error-message">
                                        Invalid name format!
                                    </p>
                                )}
                            </FieldSection>
                            <FieldSection title="Email address *">
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={updateFormData}
                                    className={isEmailValid === false ? 'input-field-error' : ''}
                                    onBlur={() => {
                                        setIsEmailValid(validateEmail(formData.email));
                                    }}
                                />
                                {isEmailValid === false && (
                                    <p className="input-field-error-message">
                                        Invalid email address!
                                    </p>
                                )}
                            </FieldSection>
                            <FieldSection title="Phone number *">
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={(event) => {
                                        const numericValue = event.target.value.replace(/\D/g, '');
                                        const limitedValue = numericValue.slice(0, 9);
                                        setFormData({
                                            ...formData,
                                            phoneNumber: limitedValue,
                                        });
                                    }}
                                    maxLength={9}
                                    className={
                                        isPhoneNumberValid === false ? 'input-field-error' : ''
                                    }
                                    onBlur={() => {
                                        setIsPhoneNumberValid(
                                            validatePhoneNumber(formData.phoneNumber)
                                        );
                                    }}
                                />
                                {isPhoneNumberValid === false && (
                                    <p className="input-field-error-message">
                                        Phone number is incorrect!
                                    </p>
                                )}
                            </FieldSection>

                            <FieldSection title="Additional comments">
                                <textarea
                                    name="details"
                                    cols="25"
                                    rows="4"
                                    className='input__additional-comments'
                                    value={formData.details}
                                    onChange={(event) => {
                                        const newValue = event.target.value;
                                        if (newValue.length <= 300) {
                                            setFormData({ ...formData, details: newValue });
                                            setCommentsCharacterCount(newValue.length);
                                        }
                                    }}
                                />
                                <div className="input__character-count">
                                    {commentsCharacterCount} / 300 characters
                                </div>
                            </FieldSection>


                            <MainSection title="CREATE AN ACCOUNT">
                                <Checkboxes
                                    list={[
                                        {
                                            fieldName: 'createAccount',
                                            label: 'I want to create an account along with my order.',
                                            isChecked: createAccount,
                                        },
                                    ]}
                                    onChange={(selectedFieldName, newValue) => {
                                        setIsAllRequiredFieldsFilled(true);
                                        if (selectedFieldName === 'createAccount') {
                                            setCreateAccount(newValue);
                                        }
                                    }}
                                />
                            </MainSection>

                            {createAccount && (
                                <MainSection title="">
                                    <FieldSection title="Login *">
                                        <input
                                            type="text"
                                            name="login"
                                            value={formData.login}
                                            onChange={updateFormData}
                                            className={
                                                !validateLogin(formData.login) ? 'input-field-error' : ''
                                            }
                                        />
                                        {!validateLogin(formData.login) && (
                                            <p className="input-field-error-message">
                                                The login must be at least 4 characters long and cannot contain special characters.
                                            </p>
                                        )}
                                    </FieldSection>
                                    <FieldSection title="Password *">
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                            className={!isPasswordStrong ? 'input-field-error' : ''}
                                        />
                                        {!isPasswordStrong && (
                                            <p className="input-field-error-message">
                                                The password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character.
                                            </p>
                                        )}
                                    </FieldSection>
                                    <FieldSection title="Confirm password *">
                                        <input
                                            type="password"
                                            name="passwordConfirmation"
                                            value={passwordConfirmation}
                                            onChange={(event) =>
                                                setPasswordConfirmation(event.target.value)
                                            }
                                        />
                                    </FieldSection>
                                    {createAccount && !isPasswordMatching && (
                                        <p className="input-field-error-message">
                                            The passwords do not match!
                                        </p>
                                    )}
                                </MainSection>
                            )}
                        </MainSection>

                        <MainSection title="CONSENTS">
                            <FieldSection title="Terms and conditions">
                                <Checkboxes
                                    list={[
                                        {
                                            fieldName: 'consents',
                                            label: 'I accept the terms and conditions. *',
                                            isChecked: formData.consents,
                                        },

                                        {
                                            fieldName: 'subscribeToNewsletter',
                                            label: 'Subscribe me to the newsletter.',
                                            isChecked: subscribeToNewsletter,
                                        },
                                    ]}
                                    onChange={(selectedFieldName, newValue) => {
                                        setIsAllRequiredFieldsFilled(true);
                                        if (selectedFieldName === 'subscribeToNewsletter') {
                                            setSubscribeToNewsletter(newValue);
                                        } else {
                                            setFormData({
                                                ...formData,
                                                [selectedFieldName]: newValue,
                                            });
                                        }
                                    }}
                                />
                            </FieldSection>
                        </MainSection>

                        {!isAllRequiredFieldsFilled && (
                            <p className="input-field-error-message">
                                Please fill in all required fields.
                            </p>
                        )}

                        <button type="submit" className='input-field__submit-button' disabled={!isFieldsValid}>
                            Submit
                        </button>
                        {isFormSubmitted && (
                            <p className='form__success-message'>Form subbmited!</p>
                        )}

                    </form>

                </div>
            </>
        </div>
    );
}
