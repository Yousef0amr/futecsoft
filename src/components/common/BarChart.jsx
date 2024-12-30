import React, { useEffect } from 'react'
import { AgCharts } from "ag-charts-react";
import { useState } from 'react';

const BarChart = ({ data, name }) => {
    const [options, setOptions] = useState({
        data: [],
        series: [{ type: "bar", xKey: "Days", yKey: "Grand" }],
    });

    useEffect(() => {
        setOptions({
            data: data,
            title: {
                text: name,
            },
            series: [{ type: "bar", xKey: "Days", yKey: "Grand" }],
        });
    }, [data, name]);

    return <AgCharts style={{ boxShadow: "var(--shadow-effect)", border: "1px solid var(--border-color-1)", marginTop: '20px', direction: "ltr", height: "400px" }} options={options} />;
}

export default BarChart
