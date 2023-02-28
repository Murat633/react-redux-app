import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Layout from "../../Views/Layout";
import NotFound from "../../Views/NotFound";
import CartDetail from "../cart/CartDetail";
import TextInput from "../toolbox/TextInput";

function App() {
  return (
    <Container>
      <TextInput></TextInput>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="cart" element={<CartDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
