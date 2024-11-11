import { Form, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';

const InputField = ({ name, label, register, errors, isInvalid, required, type = 'text', min, max, step }) => {
    const { t } = useTranslation()
    return <Form.Group controlId={name} className='mt-4'>
        <Form.Label style={{ color: 'var(--text-color)' }}>
            {t(label)}
            {required && <span style={{ color: 'red' }}>*</span>}
        </Form.Label>
        <Form.Control
            {...register(name)}
            isInvalid={isInvalid}
            type={type}
            placeholder={`${t(AppStrings.enter)}  ${t(label)}`}
            min={min}
            max={max}
            step={step}
            className='custom-input'
            style={{ color: 'var(--text-color)', fontSize: '14px', backgroundColor: 'var(--background-color)', borderColor: '#ced4da', appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'textfield' }}
        />
        <Form.Control.Feedback type="invalid">
            {errors[name]?.message}
        </Form.Control.Feedback>
    </Form.Group>
}


    ;

export default InputField;
