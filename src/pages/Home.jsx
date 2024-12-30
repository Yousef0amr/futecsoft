import React from 'react'
import PieChart from '../components/common/PieChart'
import { useGetBestSellerCategoryQuery, useGetBestSellerItemsQuery, useGetSalesByDaysQuery, useGetSalesByHoursQuery } from '../features/reportsControllerSlice'
import BarChart from '../components/common/BarChart';
import { Col, Row } from 'react-bootstrap';



const Home = () => {
    const { data: itemsData } = useGetBestSellerItemsQuery({ from_date: "2022-01-01", to_date: new Date().toISOString().split('T')[0], warehouse: 1001 });
    const { data: categoryData } = useGetBestSellerCategoryQuery({ from_date: "2022-01-01", to_date: new Date().toISOString().split('T')[0], warehouse: 1001 });
    const { data: salesDayData } = useGetSalesByDaysQuery({ from_date: "2022-01-01", to_date: new Date().toISOString().split('T')[0], warehouse: 1001 });
    const { data: salesHourData } = useGetSalesByHoursQuery({ from_date: "2022-01-01", to_date: new Date().toISOString().split('T')[0], warehouse: 1001 });


    return (
        <Row
            style={{
                margin: "0px",
                padding: "0px",

            }}
        >
            <Col xs={12} sm={6}>
                <PieChart data={itemsData} name="Best Selling Items" />
            </Col>
            <Col xs={12} sm={6}>
                <BarChart data={salesDayData} name="Sales By Day" />
            </Col>

            <Col xs={12} sm={6}>
                <PieChart data={categoryData} name="Best Selling Categories" />
            </Col>

            <Col xs={12} sm={6}>
                <BarChart data={salesHourData} name="Sales By Hour" />
            </Col>
        </Row>


    )
}

export default Home
