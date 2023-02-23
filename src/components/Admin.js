import React from 'react'
import Dashboard from './Dashboard'
import Navadmin from './Navadmin'

function Admin() {
    return (
        <div>
            <Navadmin />

            <div>
                <Dashboard/>
            </div>
        </div>
    )
}

export default Admin
