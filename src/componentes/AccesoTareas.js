import React from 'react';
import AccesoTareas from 'material-table';

export default function ListaTareas() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Nombre', field: 'Nombre' },
            { title: 'Apellido', field: 'Apellido' },
            { title: 'Edad', field: 'Edad', type: 'numeric' },
            {
                title: 'Genero',
                field: 'Genero',
                lookup: { 3: 'Hombre', 4: 'Mujer', 1: 'Niño', 2: 'Niña' },
            },
        ],
        data: [{
            Nombre: 'Carmen',
            Apellido: 'Medrano',
            Edad: 31,
            Genero: 4
        },
        {
            Nombre: 'Valentina',
            Apellido: 'Medrano',
            Edad: 11,
            Genero: 2,
        },
        {
            Nombre: 'Edinson',
            Apellido: 'Zapata',
            Edad: 30,
            Genero: 3,
        },
        {
            Nombre: 'Martina',
            Apellido: 'Zapata',
            Edad: 5,
            Genero: 2,
        },
        ],
    });

    return (<
        AccesoTareas title="Integrantes Familia"
        columns={state.columns}
        data={state.data}
        editable={
            {
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.push(newData);
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data[data.indexOf(oldData)] = newData;
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.splice(data.indexOf(oldData), 1);
                            setState({ ...state, data });
                        }, 600);
                    }),
            }
        }
    />
    );
}