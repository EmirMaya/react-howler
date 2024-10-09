"use client";
import { useRef, useEffect } from "react";
import Howler from "react-howler";
import { Howl } from "howler"; // Importa directamente Howl para usar la API

export default function Home() {
  const soundRef = useRef<Howl | null>(null);


  useEffect(() => {
    const sound = soundRef.current;

    if (sound) {
      // Al iniciar, hacer fade-in del 30% al volumen deseado (0.5)
      sound.fade(0.3, 0.5, 2000); // 2000 ms (2 segundos) de fade-in

      // Al finalizar, hacer fade-out al 30% en 2 segundos
      sound.on("end", () => {
        sound.fade(0.5, 0.3, 2000); // Fade-out del volumen 0.5 a 0.3
      });
    }
  }, []);

  return (
    <section className="bg-main w-screen">
      <Howler
        src="/sounds/lorahmir.mp3" // Reemplaza con la ruta de tu archivo de música
        playing={true}
        loop={true}
        volume={0.5} // Ajusta el volumen entre 0 y 1
        ref={(ref) => {
          if (ref) {
            // Almacena la instancia interna de Howl
            soundRef.current = ref.howl;
          }
        }}
      />
    </section>
  );
}
