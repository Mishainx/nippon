"use client";
import { useState } from "react";
import Link from "next/link";

const SignupForm = () => {
  const [values, setValues] = useState({
    email: "",
    nombre: "",
    apellido: "",
    telefono: "",
    calle: "",
    localidad: "",
    provincia: "",
    pais: "",
    password: "",
    repetirPassword: "",
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (step < 3) {
        setStep(step + 1);
      } else {
        // Handle form submission
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <main className="flex justify-center items-center w-full min-h-screen bg-gray-900 pt-16 pb-8">
      <div className="w-full max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:px-8 rounded-xl bg-gray-800 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            {step === 1
              ? "Paso 1: Información personal"
              : step === 2
              ? "Paso 2: Dirección"
              : "Paso 3: Configura tu contraseña"}
          </h2>
          {step === 1 && (
            <>
              <input
                type="text"
                value={values.nombre}
                required
                placeholder="Nombre"
                className="p-2 rounded w-full border border-gray-700 bg-gray-700 text-white mb-3 focus:outline-none focus:border-red-500 text-sm"
                name="nombre"
                onChange={handleChange}
              />
              <input
                type="text"
                value={values.apellido}
                required
                placeholder="Apellido"
                className="p-2 rounded w-full border border-gray-700 bg-gray-700 text-white mb-3 focus:outline-none focus:border-red-500 text-sm"
                name="apellido"
                onChange={handleChange}
              />
              <input
                type="email"
                value={values.email}
                required
                placeholder="E-mail"
                className="p-2 rounded w-full border border-gray-700 bg-gray-700 text-white mb-3 focus:outline-none focus:border-red-500 text-sm"
                name="email"
                onChange={handleChange}
              />
              <input
                type="text"
                value={values.telefono}
                required
                placeholder="WhatsApp"
                className="p-2 rounded w-full border border-gray-700 bg-gray-700 text-white mb-3 focus:outline-none focus:border-red-500 text-sm"
                name="telefono"
                onChange={handleChange}
              />
            </>
          )}
          {step === 2 && (
            <>
              <input
                type="text"
                value={values.calle}
                required
                placeholder="Calle"
                className="p-2 rounded w-full border border-gray-700 bg-gray-700 text-white mb-3 focus:outline-none focus:border-red-500 text-sm"
                name="calle"
                onChange={handleChange}
              />
              <input
                type="text"
                value={values.localidad}
                required
                placeholder="Localidad"
                className="p-2 rounded w-full border border-gray-700 bg-gray-700 text-white mb-3 focus:outline-none focus:border-red-500 text-sm"
                name="localidad"
                onChange={handleChange}
              />
              <input
                type="text"
                value={values.provincia}
                required
                placeholder="Provincia"
                className="p-2 rounded w-full border border-gray-700 bg-gray-700 text-white mb-3 focus:outline-none focus:border-red-500 text-sm"
                name="provincia"
                onChange={handleChange}
              />
              <input
                type="text"
                value={values.pais}
                required
                placeholder="País"
                className="p-2 rounded w-full border border-gray-700 bg-gray-700 text-white mb-3 focus:outline-none focus:border-red-500 text-sm"
                name="pais"
                onChange={handleChange}
              />
            </>
          )}
          {step === 3 && (
            <>
              <input
                type="password"
                value={values.password}
                required
                placeholder="Contraseña"
                className="p-2 rounded w-full border border-gray-700 bg-gray-700 text-white mb-3 focus:outline-none focus:border-red-500 text-sm"
                name="password"
                onChange={handleChange}
              />
              <input
                type="password"
                value={values.repetirPassword}
                required
                placeholder="Repetir contraseña"
                className="p-2 rounded w-full border border-gray-700 bg-gray-700 text-white mb-3 focus:outline-none focus:border-red-500 text-sm"
                name="repetirPassword"
                onChange={handleChange}
              />
            </>
          )}
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              {step < 3 ? "Siguiente" : "Registrarse"}
            </button>
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="text-red-500 mt-2 hover:underline text-sm"
              >
                Volver
              </button>
            )}
            <Link
              href="/login"
              className="text-red-500 text-center hover:underline mt-2 block text-sm"
            >
              ¿Ya tienes una cuenta? Inicia sesión
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignupForm;
