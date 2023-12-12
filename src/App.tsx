import {Routes,Route} from 'react-router-dom'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import Home from './_root/pages/Home'
import AuthLayout from './_auth/AuthLayout'
import LayoutRoot from './_root/LayoutRoot'
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public route : everybody will be able to see it */}
        <Route element={<AuthLayout/>}>
        <Route path="/sign-in" element={<SigninForm/>}/>
        <Route path="/sign-up" element={<SignupForm/>}/>
        </Route>
        {/* Private route : you will be able to see it only if you signed in */}
        {/* index this means that this is the starting page */}
        <Route element={<LayoutRoot/>}>
        <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster/>
    </main>
  )
}

export default App
