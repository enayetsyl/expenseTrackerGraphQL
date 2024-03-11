import { Route, Routes } from "react-router-dom";
import { Header, HomePage, LoginPage, NotFoundPage, SignUpPage, TransactionPage } from "./constant";

function App() {
 
const authUser = true
  return (
    <>
    { authUser && <Header/>}
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/transaction/:id" element={<TransactionPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </>
  )
}

export default App
