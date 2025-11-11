import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { ProgramsProvider } from './contexts/Programs.context.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import { ProducerMenu } from './components/ProducerMenu.tsx';
import { UserProgramList } from './components/UserProgramList.tsx';
import { UserProgramDetails } from './components/UserProgramDetails.tsx';
import { ProducerDetails } from './components/ProducerDetails.tsx';
import { MainMenu } from './components/MainMenu.tsx';
import { ProducerAdd } from './components/ProducerAdd.tsx';
import { ProducerProgramsList } from './components/ProducerProgramList.tsx';
import { ProducerProgramsDetails } from './components/ProducerProgramsDetails.tsx';
import { ProgramAdd } from './components/ProgramAdd.tsx';
import { ProducerDetailsForUser } from './components/ProducerDetailsForUser.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <ProgramsProvider> */}
      <MainMenu />
      <Routes>
        <Route path='/' element={<App />}>
          {/*route for users*/}
          <Route path='users' element={<UserProgramList />}>
            <Route path=":userId" element={<UserProgramDetails />} >
              <Route path=":email" element={<ProducerDetails />} />
            </Route>
          </Route>
          {/*route for producers*/}
          <Route path="producers/:email/add" element={<ProgramAdd />} />
          <Route path="producers/:email" element={<ProducerDetails />}/>
          <Route path="producers/:email/user" element={<ProducerDetailsForUser />}/>
          <Route path='producers' element={<ProducerMenu />}>
            {/*route for a new producer*/}
            <Route path="add" element={<ProducerAdd />} />
            {/*route for an exist producer*/}
            <Route path="programs" element={<ProducerProgramsList />} >
              <Route path=":programId" element={<ProducerProgramsDetails />} />
            </Route>
          </Route>
        </Route>
      </Routes>



      {/* </ProgramsProvider> */}

    </BrowserRouter>

  </StrictMode>,
)
