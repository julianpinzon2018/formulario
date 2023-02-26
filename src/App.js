import Layout from "./components/layout";
import Header from "./components/header";
import Formulario from "./components/form";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Subscrito from "./components/subscrito";
import { useState } from "react";

function App() {
  const [html, setHtml] = useState("");

  return (
    <Layout>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Formulario setHtml={setHtml} />} />
          <Route path="/subscrito" element={<Subscrito html={html} />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
