import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/Supabase";

function LoginAdmin() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email: correo,
      password,
    });

    if (error) {
      alert("Correo o contraseña incorrectos");
      return;
    }

    navigate("/dashboard-admin");
  };

  return (
    <div>
      <h1>Inicio de Sesión - Administrador</h1>

      <form onSubmit={iniciarSesion}>
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default LoginAdmin;