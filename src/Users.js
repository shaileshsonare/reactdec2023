import React, { useEffect, useState } from 'react'

export default function Users() {

    var fruits = ['apple', 'banana', 'chiku']

    const [data, setData] = useState([])

    // useEffect(callbackfun, dependencies)

    useEffect(() => {
        
        fetch("https://reqres.in/api/users?page=1")
        .then(res => res.json())
        .then(res => {
            console.log(res)
            console.table(res['data'])
            setData(res['data'])
        })

    }, [])

  return (
    <>
        {/* {JSON.stringify(data)} */}

        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                {
                data.map( (user) => {
                    return (
                        <tr>
                            <td> {user['id']} </td>
                            <td> {user['email']} </td>
                            <td> {user['first_name']} </td>
                            <td> {user['last_name']} </td>
                            <td> <img src={user['avatar']} /></td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>

        <hr />

        {fruits[0]} <br />
        {fruits[1]} <br />
        {fruits[2]} <br />

        <hr />

        {
            fruits.map( (f) => {
                return (<div> {f} </div>)
            })
        }

        <hr />
    </>
  )
}
