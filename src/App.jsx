import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { Button } from '@mantine/core'
import CustomButton from './components/CustomButton'

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <h1>Home page</h1>
              <Button color='teal'>Hey there</Button>
              <CustomButton>Heya</CustomButton>
            </>
          }
        />
        <Route path='*' element={<h1>404 page</h1>} />
      </Routes>
    </Layout>
  )
}

export default App
