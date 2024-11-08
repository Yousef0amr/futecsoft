import React from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AppStrings from '../../utils/appStrings';

const FormComponent = ({ schema, onSubmit, children }) => {
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({

        resolver: yupResolver(schema),
    });

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {typeof children === 'function' ? children({ register, errors }) : children}

            <Stack direction="horizontal" gap={3} className='mt-4'>
                <Button type="submit" style={{ padding: '8px 60px', backgroundColor: 'var(--primary-color)', bordderColor: 'var(--primary-color)' }}>{t(AppStrings.save)}</Button>
                <Button onClick={() => reset()} style={{ padding: '8px 60px', backgroundColor: 'var(--secondary-color)', borderColor: 'var(--secondary-color)' }}>{t(AppStrings.reset)}</Button>
            </Stack>
        </Form>
    );
};

export default FormComponent;
