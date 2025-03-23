
function Test() {
    const data = [
        {
            id: 1,
            name: 'student01',
            gender: 'M'
        },
        {
            id: 2,
            name: 'student02',
            gender: 'F'
        },
        {
            id: 3,
            name: 'student03',
            gender: 'M'
        }
    ]

    

    return (
        <>
            <h1>Test</h1>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pageData.map((data, idx) => (
                            <tr key={idx}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.gender}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <ul>
                {
                    pages.map((d, i) => (
                        <li key={i} onClick={(e) => {setSp(page + 1)}}>{d}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Test