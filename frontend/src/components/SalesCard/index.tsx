import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {

    return (
        <div className="ds-meta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>


            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th><b>ID</b></th>
                            <th><b>Data</b></th>
                            <th><b>Vendedor</b></th>
                            <th><b>Visitas</b></th>
                            <th><b>Vendas</b></th>
                            <th><b>Total</b></th>
                            <th><b>Notificar</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#000</td>
                            <td>00/00/00</td>
                            <td>Vendedor001</td>
                            <td>N° visitas</td>
                            <td>N° vendas</td>
                            <td>R$ valor</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#000</td>
                            <td>00/00/00</td>
                            <td>Vendedor002</td>
                            <td>N° visitas</td>
                            <td>N° vendas</td>
                            <td>R$ valor</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>#000</td>
                            <td>00/00/00</td>
                            <td>Vendedor003</td>
                            <td>N° visitas</td>
                            <td>N° vendas</td>
                            <td>R$ valor</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody >
                </table >
            </div >

        </div >

    )
}

export default SalesCard