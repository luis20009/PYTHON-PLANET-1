import { useState } from "react";

const ContactForm = ({
  username,
  name,
  email,
  number,
  editId,
  setUsername,
  setName,
  setEmail,
  setNumber,
  onSubmit,
  onCancel,
  comments,
  setComments
}) => {
  const [contrasenaError, setContrasenaError] = useState("");

  // Validar contraseña (debe tener al menos una letra y un número, mínimo 4 caracteres)
  const validarContrasena = (value) => {
    const tieneLetra = /[a-zA-Z]/.test(value);
    const tieneNumero = /\d/.test(value);
    return value.length >= 4 && tieneLetra && tieneNumero;
  };

  const handleContrasenaChange = (e) => {
    const value = e.target.value;
    setContraseña(value);

    if (!validarContrasena(value)) {
      setContrasenaError(
        "La contraseña debe tener al menos 4 caracteres, incluyendo al menos una letra y un número."
      );
    } else {
      setContrasenaError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar contraseña
    if (!validarContrasena(contraseña)) {
      setContrasenaError(
        "La contraseña debe tener al menos 4 caracteres, incluyendo al menos una letra y un número."
      );
      return;
    }

    // Llama al submit original
    await onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuario:
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Número:
        <input
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Correo electrónico:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Comentarios:
        <textarea
          value={comments}
          onChange={e => setComments(e.target.value)}
          placeholder="Agrega un comentario"
        />
      </label>
      <br />
      <button type="submit">
        {editId ? "Actualizar" : "Agregar"}
      </button>
      {editId && (
        <button type="button" onClick={onCancel}>Cancelar</button>
      )}
    </form>
  );
};

export default ContactForm;