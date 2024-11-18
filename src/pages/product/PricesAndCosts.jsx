import React from 'react'
import FormCard from '../../components/common/FormCard'
import { useTranslation } from 'react-i18next'
import AppStrings from '../../utils/appStrings'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'
import { Col, Row } from 'react-bootstrap'
import SelectMenu from '../../components/common/SelectMenu'

const PricesAndCosts = () => {
    const { t } = useTranslation()
    return (
        <FormCard icon={faMoneyBill1Wave} title={t(AppStrings.prices_and_costs)}>
            <Row>
                <Col>


                </Col>
            </Row>

        </FormCard>
    )
}

export default PricesAndCosts
