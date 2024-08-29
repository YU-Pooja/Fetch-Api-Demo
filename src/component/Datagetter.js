import React, { useEffect, useState } from 'react';

function Datagetter() {
    const MY_API = "https://jsonplaceholder.typicode.com/users";
    const [datahere, setDatahere] = useState([]);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        fetchFunction();
    }, []);

    const fetchFunction = () => {
        fetch(MY_API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data); // Log the fetched data
                setDatahere(data);
                setLoaded(false); // Set loaded to false once data is fetched
            })
            .catch((err) => console.log(err));
    };
    //{datahere[0].name}
    // {datahere[0].email}
    // {datahere[0].company.name}
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            {loaded ? (
                <div style={{ color: 'blue', fontSize: '20px' }}>Loading...</div>
            ) : (
                datahere.map((el, index) => (
                    <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                        <strong style={{ color: 'green' }}>{el.name}</strong> <br />
                        <span style={{ color: 'gray' }}>{el.email}</span> <br />
                        <span style={{ color: 'purple' }}>{el.company.name}</span>
                    </div>
                ))
            )}
        </div>
    );
}

export default Datagetter;

