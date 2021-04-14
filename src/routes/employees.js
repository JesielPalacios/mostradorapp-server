const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

// Listar todos los usuarios.
router.get('/api/users', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, filds) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// Listar un usuario por id.
router.get('/api/user/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, filds) => {
        if (!err) {
            // res.json(rows);
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

// Agregar/añadir un nuevo usuario.
router.post('/api/users', (req, res) => {
    const { id, name, salary } = req.body;
    // const query = `
    //     SET @id = ?;
    //     SET @name = ?;
    //     SET @salary = ?;
    //     CALL employeeAddOrdEdit(@id, @name ,@salary);
    //     `;
    const query = `
    CALL employeeAddOrdEdit(?, ?, ?);
    `;
        mysqlConnection.query(query, [id, name, salary], (err, rows, filds) => {
            if (!err) {
                res.json({Status: 'Emplooyed Saved'});
            } else {
                console.log(err);
            }
        });
});

// Actualizar un usuario por el id.
router.put('/api/user/:id', (req, res) => {
    const { name, salary } = req.body;
    const { id } = req.params;
    const query = 'CALL employeeAddOrdEdit(?, ?, ?)';
    mysqlConnection.query(query, [id, name, salary], (err, rows, filds) => {
        if (!err) {
            res.json({Status: 'Emplooyed Updated'});
        } else {
            console.log(err);
        }
    });
});

// Eliminar un usuario por el id.
router.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Emplooyed Deleted'});
        } else {
            console.log(err);
        }
    });
});

module.exports = router;