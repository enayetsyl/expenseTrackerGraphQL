import { Route, Routes } from "react-router-dom";
import { Header, HomePage, LoginPage, NotFoundPage, SignUpPage, TransactionPage } from "./constant";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "./graphql/queries/user.query";
import { Toaster } from 'react-hot-toast'

function App() {
const { loading, data, error } = useQuery(GET_AUTHENTICATED_USER)
console.log('authuser', data)
console.log('lodaing', loading)
console.log('error', error)
  return (
    <>
    { data?.authUser && <Header/>}
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/transaction/:id" element={<TransactionPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes><Toaster/>
    </>
  )
}

export default App
