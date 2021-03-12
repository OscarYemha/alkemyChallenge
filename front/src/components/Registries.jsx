import React from "react";
import Table from "react-bootstrap/Table";

export default ({ registries, allRegistries }) => {
  console.log("allRegistries", allRegistries);
  let total = 0;
  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Tipo</th>
          </tr>
        </thead>
        {registries && registries.length > 0
          ? registries.map((r) => {
              return (
                <tbody key={r.id}>
                  <tr>
                    <td>{r.description}</td>
                    <td>$ {r.amount}</td>
                    <td>{r.date}</td>
                    <td>{r.type}</td>
                  </tr>
                </tbody>
              );
            })
          : null}
        {allRegistries && allRegistries.length > 0
          ? allRegistries.map((a) => {
              if (a.type === "ingreso" || a.type === "ingress")
                total += a.amount;
              else total -= a.amount;
            })
          : null}
        <th>Balance ingresos y egresos: $ {total.toFixed(2)}</th>
      </Table>
    </div>
  );
};
