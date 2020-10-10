import React,{Fragment,useEffect, useState} from 'react';

const ListQuotes = () => {
    const [quotes, setQuotes] = useState([]);

    const getQuotes = async () => {
        try {
            const response = await fetch('http://localhost:5000/quotes');
            const jsonData = await response.json();
            setQuotes(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getQuotes();  
    },[]);

    return (
        <Fragment>
          {" "}
          <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Quotation</th>
                    <th>Valid</th>
                </tr>
                </thead>
                <tbody>
                    {quotes.map(todo => (
                        <tr key={todo.q_id}>
                            <td>{todo.q_id}</td>
                            <td>{todo.quotation_info}</td>
                            <td>{todo.quotation_valid? "True" : "False"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
      );
};

export default ListQuotes;