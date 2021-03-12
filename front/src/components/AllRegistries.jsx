import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/table";

export default ({ allRegistries, handleDelete }) => {
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
        {allRegistries && allRegistries.length > 0
          ? allRegistries.map((a) => {
              return (
                <tbody key={a.id}>
                  <tr>
                    <td>{a.description}</td>
                    <td>$ {a.amount}</td>
                    <td>{a.date}</td>
                    <td>{a.type}</td>
                    <td style={{ textAlign: "center" }}>
                      <Link
                        to={`/allregistries/registry/${a.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <button type="button" class="btn btn-primary">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => handleDelete(a)}
                      >
                        Delete
                      </button>
                    </td>
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
