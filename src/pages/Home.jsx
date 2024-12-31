import React from 'react'
import PieChart from '../components/common/PieChart'
import { useGetBestSellerCategoryQuery, useGetBestSellerItemsQuery, useGetSalesByDaysQuery, useGetSalesByHoursQuery } from '../features/reportsControllerSlice'
import BarChart from '../components/common/BarChart';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import AppStrings from '../config/appStrings';



const Home = () => {
    const { data: itemsData } = useGetBestSellerItemsQuery({ from_date: "2024-01-01", to_date: new Date().toISOString().split('T')[0], warehouse: 1001 });
    const { data: categoryData } = useGetBestSellerCategoryQuery({ from_date: "2024-01-01", to_date: new Date().toISOString().split('T')[0], warehouse: 1001 });
    const { data: salesDayData } = useGetSalesByDaysQuery({ from_date: "2024-01-01", to_date: new Date().toISOString().split('T')[0], warehouse: 1001 });
    const { data: salesHourData } = useGetSalesByHoursQuery({ from_date: "2024-01-01", to_date: new Date().toISOString().split('T')[0], warehouse: 1001 });
    const { t } = useTranslation();

    return (
        <Row>
            <Col xs={12} md={6}>
                <PieChart data={itemsData} name={t(AppStrings.best_seller_items)} />
            </Col>
            <Col xs={12} md={6}>
                <BarChart data={salesDayData} name={t(AppStrings.sales_by_days)} />
            </Col>
            <Col xs={12} md={6}>
                <PieChart data={categoryData} name={t(AppStrings.best_seller_category)} />
            </Col>
            <Col xs={12} md={6}>
                <BarChart data={salesHourData} name={t(AppStrings.sales_by_hours)} />
            </Col>
        </Row>
    )
}

export default Home
