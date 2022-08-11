import React, { useState } from 'react'
import './ListarMovimientos.css'
import {BsSearch} from 'react-icons/bs'

const ListarMovimientos = () => {
    const [valueSelectTipoMovimiento, setValueSelectTipoMovimiento] = useState(1);
    
    const tipoMovimientos = [
        {id:1, valor:"Retiro"},
        {id:2, valor:"Ingreso Adicional"},
        {id:3, valor:"Prestamo"},
        {id:4, valor:"Abono Prestamo"},
        {id:5, valor:"Ingreso Fijo"},
        {id:6, valor:"Gasto Fijo"},
        {id:7, valor:"Todos"},
    ];

    const handleChangeInput = ({target}) => {
        setValueSelectTipoMovimiento(target.value);
    }

  return (
    <>
        <div className="">
            <div className="row">
                <div className="col">
                    <div className="accordion" id="accordionBuscador">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <h5>Filtros</h5>
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionBuscador">
                                <div className="accordion-body">
                                    <div className="container">
                                        <div className="mb-3">
                                            <label htmlFor="tipoMovimiento" className="form-label">Frase:</label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="buscador-addon1"><BsSearch /></span>
                                                <input id="buscador" type="text" className="form-control" placeholder="Ej: Televisor" aria-label="buscador" aria-describedby="buscador-addon1" />
                                            </div>   
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="tipoMovimiento" className="form-label">Tipo de movimiento:</label>
                                            
                                            <select value={valueSelectTipoMovimiento} id="tipoMovimiento" className="form-select" onChange={handleChangeInput}>
                                                {tipoMovimientos.map(tipoMovimiento => (
                                                    <option key={tipoMovimiento.id} value={tipoMovimiento.id}>{tipoMovimiento.valor}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordionLista">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h5>Lista Movimientos</h5>
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionBuscador">
                            <div className="accordion-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="table-responsive">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Tipo</th>
                                                            <th scope="col">Descripción</th>
                                                            <th scope="col">Valor</th>
                                                            <th scope="col">Acción</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                        <th scope="row">1</th>
                                                            <td>Ingreso Adicional</td>
                                                            <td>Estamos es probando porque ese espacio si lo veo mas bien pailas</td>
                                                            <td>$1,980,000</td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                        <th scope="row">2</th>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>
                                                            <td>@fat</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ListarMovimientos