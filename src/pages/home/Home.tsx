import style from "./Home.module.css";
import { IRefPhaserGame, PhaserGame } from "../../components/game/PhaserGame";
import { useRef } from "react";

export default function Home() {
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  return (
    <>
      {" "}
      <PhaserGame ref={phaserRef} />
    </>
  );
}
