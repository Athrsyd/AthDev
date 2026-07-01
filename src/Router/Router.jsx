import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Root from '../pages/Root'
import ProjectPage from '../pages/ProjectPage'
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Root />} />
            <Route path='/projects' element={<ProjectPage />} />
        </Routes>
    )
}

export default Router