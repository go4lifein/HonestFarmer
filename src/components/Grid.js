import React from 'react'
import gridStyles from "../styles/component/grid.module.scss"

export default function Grid()
{
    return(
        <div className = {gridStyles.grid}>
            <div className = {gridStyles.section0}>
                <h1>Order Today , delivery by Tommorow.</h1>
            </div>
            <div className = {gridStyles.section1}>
                <div className = {gridStyles.row1}>
                <h1>Progressive Farmers</h1>
                </div>
                <div className = {gridStyles.row2}>
                <h1>Traceable Food</h1>
                </div>
            </div>
            <div className = {gridStyles.section2}>
                <div className = {gridStyles.row3}>
                section3
                </div>
                <div className = {gridStyles.row4}>
                section4
                </div>
            </div>
            <div className = {gridStyles.section3}>
                <div className = {gridStyles.row5}>
                section6
                </div>
                <div className = {gridStyles.row6}>
                section5
                </div>
            </div>
        </div>
    )
}