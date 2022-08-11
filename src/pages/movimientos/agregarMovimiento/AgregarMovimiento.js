import React, { useState } from 'react'



const AgregarMovimiento = () => {

    const [valueSelectTipoMovimiento, setValueSelectTipoMovimiento] = useState(1);
    
    const tipoMovimientos = [
        {id:1, valor:"Retiro"},
        {id:2, valor:"Ingreso Adicional"},
        {id:3, valor:"Prestamo"},
        {id:4, valor:"Abono Prestamo"},
        {id:5, valor:"Ingreso Fijo"},
        {id:6, valor:"Gasto Fijo"},
    ];

    const tipoTotal = [
        {id:1, valor:"Retiro"},
        {id:2, valor:"Ingreso Adicional"},
        {id:3, valor:"Prestamo"},
        {id:4, valor:"Abono Prestamo"},
        {id:5, valor:"Ingreso Fijo"},
        {id:6, valor:"Gasto Fijo"},
    ];
    
    const handleChangeInput = ({target}) => {
        setValueSelectTipoMovimiento(target.value);
    }

  return (
    <>
        <div className="">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <h5 className="card-header">Agregar Movimiento</h5>
                        <div className="card-body">
                        <div className="container">
                            <div className="mb-3">
                                <label htmlFor="tipoMovimiento" className="form-label">Tipo de movimiento:</label>
                                
                                <select value={valueSelectTipoMovimiento} id="tipoMovimiento" className="form-select" onChange={handleChangeInput}>
                                    {tipoMovimientos.map(tipoMovimiento => (
                                        <option key={tipoMovimiento.id} value={tipoMovimiento.id}>{tipoMovimiento.valor}</option>
                                    ))}
                                </select>
                            </div>
                            
                            {
                            /* Aplica solo para retiro */
                            valueSelectTipoMovimiento === '1' && 
                                <div className="mb-3">
                                    <label htmlFor="tipoTotal" className="form-label">Restar de:</label>
                                    
                                    <select value={"Prueba"} id="tipoTotal" className="form-select" onChange={handleChangeInput}>
                                        <option key={"tipoMovimiento.id"} value={"tipoMovimiento.id"}>{"tipoMovimiento.valor"}</option>
                                    </select>
                                </div>
                            }

                            {
                            /* Aplica solo para Ingreso Adicional */    
                            valueSelectTipoMovimiento === '2' && 
                                <div className="mb-3">
                                    <label htmlFor="tipoTotal" className="form-label">Guardar en:</label>
                                    
                                    <select value={"Prueba"} id="tipoTotal" className="form-select" onChange={handleChangeInput}>
                                        <option key={"tipoMovimiento.id"} value={"tipoMovimiento.id"}>{"tipoMovimiento.valor"}</option>
                                    </select>
                                </div>
                            }

                            {
                            /* Aplica solo para Prestamos */    
                            valueSelectTipoMovimiento === '3' && 
                                <div className="mb-3">
                                    <label htmlFor="tipoTotal" className="form-label">Retirar de:</label>
                                    
                                    <select value={"Prueba"} id="tipoTotal" className="form-select" onChange={handleChangeInput}>
                                        <option key={"tipoMovimiento.id"} value={"tipoMovimiento.id"}>{"tipoMovimiento.valor"}</option>
                                    </select>
                                </div>
                            }

                            {
                            /* Aplica solo para Prestamos */    
                            valueSelectTipoMovimiento === '4' && 
                                <div className="mb-3">
                                    <label htmlFor="prestamo" className="form-label">Abono de:</label>
                                    
                                    <select value={"Prueba"} id="prestamo" className="form-select" onChange={handleChangeInput}>
                                        <option key={"tipoMovimiento.id"} value={"tipoMovimiento.id"}>{"tipoMovimiento.valor"}</option>
                                    </select>
                                </div>
                            }

                            {
                            /* Aplica solo para Prestamos */    
                            valueSelectTipoMovimiento === '6' && 
                                <div className="mb-3">
                                    <label htmlFor="tipoTotal" className="form-label">Retirar de:</label>
                                    
                                    <select value={"Prueba"} id="tipoTotal" className="form-select" onChange={handleChangeInput}>
                                        <option key={"tipoMovimiento.id"} value={"tipoMovimiento.id"}>{"tipoMovimiento.valor"}</option>
                                    </select>
                                </div>
                            }

                            <div className="mb-3">
                                <label htmlFor="descripcion" className="form-label">Descripción:</label>
                                <input id="descripcion" type="text" className="form-control" placeholder="Ej: Televisor" aria-label="descripcion" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="valor" className="form-label">Valor:</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="valor-addon1">$</span>
                                    <input id="valor" type="text" className="form-control" placeholder="365000" aria-label="valor" aria-describedby="valor-addon1" />
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

export default AgregarMovimiento