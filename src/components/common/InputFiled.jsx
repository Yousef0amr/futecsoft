import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';

const InputField = ({ name, label, disabled = false, register, errors, required, type = 'text', min, max, step }) => {
    const { t } = useTranslation()
    return <Form.Group controlId={name} className='mt-4'>
        <Form.Label style={{ color: 'var(--text-color)' }}>
            {t(label)}
            {required && <span style={{ color: 'red' }}>*</span>}
        </Form.Label>
        <Form.Control
            {...register(name)}
            type={type}
            placeholder={`${t(AppStrings.enter)}  ${t(label)}`}
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            className='custom-input'
            style={{ color: 'var(--text-color)', fontSize: '14px', backgroundColor: 'var(--background-color)', borderColor: '#ced4da', appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'textfield' }}
        />
        <div className='error-message'>
            {errors[name] && errors[name]?.message}
        </div>
    </Form.Group>
}


    ;

export default InputField;
