import React from 'react';
import { useTranslation } from 'react-i18next';
import AppStrings from '../../utils/appStrings';
import { Col, Row } from 'react-bootstrap';

const DeleteCard = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir() === 'rtl';

    return (
        <div
            className="delete-card"
        >
            <Row className='gap-3 flex-column'>
                <Col style={{ display: 'flex', justifyContent: isRTL ? 'flex-end' : 'flex-start' }}>
                    <button className="exit-button">
                        <svg height="20px" viewBox="0 0 384 512">
                            <path
                                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                            ></path>
                        </svg>
                    </button>
                </Col>
                <Col>
                    <div className="card-content">
                        <p className="card-heading">{t(AppStrings.delete_title)}</p>
                        <p className="card-description">{t(AppStrings.delete_confirmation)}</p>
                    </div>
                    <div
                        className="card-button-wrapper"
                        style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }} // Change button order
                    >
                        <button className="card-button secondary">{t(AppStrings.cancel)}</button>
                        <button className="card-button primary">{t(AppStrings.delete)}</button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default DeleteCard;
