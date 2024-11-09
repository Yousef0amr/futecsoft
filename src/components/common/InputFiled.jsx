import { Form, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';

const InputField = ({ name, label, register, errors, isInvalid, required, type = 'text', min, max, step }) => {
    const { t } = useTranslation()
    return <Col sm={12} md={6} className="mt-3">
        <Form.Group controlId={name}>
            <Form.Label style={{ color: 'var(--text-color)' }}>
                {label}
                {required && <span style={{ color: 'red' }}>*</span>}
            </Form.Label>
            <Form.Control
                {...register(name)}
                isInvalid={isInvalid}
                type={type}
                placeholder={`${t(AppStrings.enter)}  ${label}`}
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
    </Col>
}


    ;

export default InputField;
