
const DataTable = () => {
    return (
        <div className="table-responsive">
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Vendedor</th>
                    <th>Clientes visitados</th>
                    <th>Negócios fechados</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>22/04/2021</td>
                    <td>Barry Allen</td>
                    <td>34</td>
                    <td>25</td>
                    <td>15017.00</td>
                </tr>
                <tr>
                    <td>13/05/2021</td>
                    <td>Bruce Wayne</td>
                    <td>32</td>
                    <td>20</td>
                    <td>24517.00</td>
                </tr>
                <tr>
                    <td>12/03/2021</td>
                    <td>Clark Kent</td>
                    <td>44</td>
                    <td>26</td>
                    <td>47047.00</td>
                </tr>
                <tr>
                    <td>01/01/2021</td>
                    <td>Diana</td>
                    <td>33</td>
                    <td>55</td>
                    <td>85078.00</td>
                </tr>
                <tr>
                    <td>25/10/2021</td>
                    <td>Hal Jordan</td>
                    <td>31</td>
                    <td>20</td>
                    <td>19027.60</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}

export default DataTable;