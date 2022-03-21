import { useEffect, useLayoutEffect, useState } from "react";
import * as THREE from "three";
import { FlyControls } from "three/examples/jsm/controls/FlyControls";
import UI from "./UI";
import Scene from "./Scene";
// @ts-ignore
import { preloadFont } from "troika-three-text";
import QueryParams from "./QueryParams";

function App() {
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();
  const [camera, setCamera] = useState<THREE.PerspectiveCamera>();
  const [controls, setControls] = useState<FlyControls>();
  const [position, setPosition] =
    useState<{ x: number; y: number; z: number }>();
  const [clock, setClock] = useState<THREE.Clock>();
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  preloadFont(
    {
      characters: "abcdefghijklmnopqrstuvwxyz",
    },
    () => setFontsLoaded(true)
  );

  useEffect(() => {
    // WebGLRenderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    setRenderer(renderer);

    // Camera
    const fov = 60;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 1.0;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    // TODO: Use qs lib for this
    const pos = (window.location.search.slice(1) || "0,2,5")
      .split(",")
      .map(Number);
    camera.position.set(pos[0], pos[1], pos[2]);
    setCamera(camera);

    // Controls
    const controls = new FlyControls(camera, renderer.domElement);
    controls.movementSpeed = 10;
    controls.rollSpeed = Math.PI / 24;
    controls.autoForward = false;
    controls.dragToLook = true;

    // Position
    const { x, y, z } = camera.position;
    setPosition({ x, y, z });
    controls.addEventListener("change", () => {
      const { x, y, z } = camera.position;
      setPosition({ x, y, z });
    });

    const clock = new THREE.Clock();

    setControls(controls);
    setClock(clock);
  }, []);

  useLayoutEffect(() => {
    function OnWindowResize() {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", OnWindowResize);

    return () => window.removeEventListener("resize", OnWindowResize);
  }, [camera, renderer]);

  if (!renderer || !camera || !controls || !clock || !position || !fontsLoaded) {
    return <div>LOADING</div>;
  }

  return (
    <>
      <QueryParams position={position} />
      <UI />
      <Scene
        renderer={renderer}
        camera={camera}
        controls={controls}
        clock={clock}
      />
    </>
  );
}

export default App;
