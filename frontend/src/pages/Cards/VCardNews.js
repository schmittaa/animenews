import React from 'react'
import { Card } from 'react-bootstrap'

function VCardNews({ onenew }) {
    const date = new Date(onenew.date);
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();


    return (

        <div style={{ width: '50%', margin: 'auto' }}>
            <Card className="CardNews">
                <div style={{ backgroundColor: "rgba(128, 128, 128, 0.123)", height: "20px" }}>
                    <p style={{ marginLeft: "15px", color: " rgb(28, 101, 150)", fontSize: "14px" }}>{onenew?.anime}</p>
                </div>
                <blockquote>
                    <p style={{ fontSize: "15px", marginLeft: "10px" }}>
                        {onenew.message}
                    </p>


                    <footer className="footer" style={{ fontSize: "10px", marginLeft: "10px" }} >
                        <div style={{ display: "flex" }}>

                            <div >Last update {y}-{m}-{d}</div>

                        </div>
                    </footer>
                </blockquote>
            </Card>

        </div>
    )
}

export default VCardNews