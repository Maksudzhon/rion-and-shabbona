import { Environment, Lightformer } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type FigureProps = {
  kind: "shabbona" | "rion";
  position: [number, number, number];
  phase: number;
};

const SKIN = "#d79a7c";
const ROSE = "#9f3754";
const ROSE_LIGHT = "#e8a7b7";
const GOLD = "#e3bb67";
const INK = "#15101b";

function Figure({ kind, position, phase }: FigureProps) {
  const figure = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);
  const leftLeg = useRef<THREE.Group>(null);
  const rightLeg = useRef<THREE.Group>(null);
  const isShabbona = kind === "shabbona";

  useFrame(({ clock }, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    const t = clock.elapsedTime + phase;
    const root = figure.current;
    if (root) {
      root.position.y = position[1] + Math.sin(t * 1.7) * 0.045;
      root.rotation.y += (Math.sin(t * 0.52) * 0.12 - root.rotation.y) * delta * 2.4;
      root.rotation.z = Math.sin(t * 1.7) * 0.025 * (isShabbona ? 1 : -1);
    }
    if (leftArm.current) leftArm.current.rotation.z = Math.sin(t * 1.7) * 0.12 + 0.2;
    if (rightArm.current) rightArm.current.rotation.z = -Math.sin(t * 1.7) * 0.12 - 0.2;
    if (leftLeg.current) leftLeg.current.rotation.x = Math.sin(t * 1.7) * 0.09;
    if (rightLeg.current) rightLeg.current.rotation.x = -Math.sin(t * 1.7) * 0.09;
  });

  return (
    <group
      ref={figure}
      position={position}
      rotation-y={isShabbona ? -0.12 : 0.12}
      scale={isShabbona ? 0.96 : 1.02}
    >
      <group position={[0, 2.92, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.43, 32, 24]} />
          <meshStandardMaterial color={SKIN} roughness={0.66} />
        </mesh>
        <mesh position={[0, 0.16, -0.08]} scale={[1.04, 0.72, 1.02]} castShadow>
          <sphereGeometry args={[0.44, 32, 20, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
          <meshStandardMaterial color={isShabbona ? "#291824" : "#201820"} roughness={0.9} />
        </mesh>
        {isShabbona && (
          <>
            <mesh position={[-0.3, -0.35, -0.13]} rotation-z={0.18} castShadow>
              <capsuleGeometry args={[0.12, 0.72, 6, 14]} />
              <meshStandardMaterial color="#291824" roughness={0.9} />
            </mesh>
            <mesh position={[0.3, -0.35, -0.13]} rotation-z={-0.18} castShadow>
              <capsuleGeometry args={[0.12, 0.72, 6, 14]} />
              <meshStandardMaterial color="#291824" roughness={0.9} />
            </mesh>
          </>
        )}
        <mesh position={[-0.14, 0.02, 0.4]}>
          <sphereGeometry args={[0.035, 12, 10]} />
          <meshBasicMaterial color={INK} />
        </mesh>
        <mesh position={[0.14, 0.02, 0.4]}>
          <sphereGeometry args={[0.035, 12, 10]} />
          <meshBasicMaterial color={INK} />
        </mesh>
      </group>

      {isShabbona ? (
        <>
          <mesh position={[0, 1.55, 0]} castShadow>
            <coneGeometry args={[0.78, 0.34, 1.85, 32]} />
            <meshStandardMaterial color={ROSE} roughness={0.7} metalness={0.04} />
          </mesh>
          <mesh position={[0, 2.22, 0]} castShadow>
            <capsuleGeometry args={[0.38, 0.65, 8, 20]} />
            <meshStandardMaterial color={ROSE_LIGHT} roughness={0.62} />
          </mesh>
          <mesh position={[0, 1.95, 0.38]}>
            <torusGeometry args={[0.18, 0.025, 12, 32]} />
            <meshStandardMaterial color={GOLD} metalness={0.75} roughness={0.24} />
          </mesh>
        </>
      ) : (
        <>
          <mesh position={[0, 2.05, 0]} castShadow>
            <capsuleGeometry args={[0.44, 0.92, 8, 20]} />
            <meshStandardMaterial color="#322737" roughness={0.7} />
          </mesh>
          <mesh position={[0, 2.24, 0.42]} scale={[0.72, 1, 0.18]}>
            <boxGeometry args={[0.55, 0.8, 0.18]} />
            <meshStandardMaterial color="#711f3b" roughness={0.65} />
          </mesh>
        </>
      )}

      <group ref={leftArm} position={[-0.5, 2.38, 0]} rotation-z={0.2}>
        <mesh position={[0, -0.5, 0]} castShadow>
          <capsuleGeometry args={[0.12, 0.76, 6, 14]} />
          <meshStandardMaterial color={isShabbona ? ROSE_LIGHT : "#322737"} roughness={0.68} />
        </mesh>
        <mesh position={[0, -0.98, 0]} castShadow>
          <sphereGeometry args={[0.14, 18, 14]} />
          <meshStandardMaterial color={SKIN} roughness={0.66} />
        </mesh>
      </group>
      <group ref={rightArm} position={[0.5, 2.38, 0]} rotation-z={-0.2}>
        <mesh position={[0, -0.5, 0]} castShadow>
          <capsuleGeometry args={[0.12, 0.76, 6, 14]} />
          <meshStandardMaterial color={isShabbona ? ROSE_LIGHT : "#322737"} roughness={0.68} />
        </mesh>
        <mesh position={[0, -0.98, 0]} castShadow>
          <sphereGeometry args={[0.14, 18, 14]} />
          <meshStandardMaterial color={SKIN} roughness={0.66} />
        </mesh>
      </group>

      <group ref={leftLeg} position={[-0.23, 0.72, 0]}>
        <mesh position={[0, -0.52, 0]} castShadow>
          <capsuleGeometry args={[0.15, 0.72, 6, 14]} />
          <meshStandardMaterial color={isShabbona ? "#4b293c" : "#19151d"} roughness={0.78} />
        </mesh>
        <mesh position={[0, -1.02, 0.1]} scale={[1, 0.55, 1.55]} castShadow>
          <sphereGeometry args={[0.19, 18, 14]} />
          <meshStandardMaterial color={INK} roughness={0.8} />
        </mesh>
      </group>
      <group ref={rightLeg} position={[0.23, 0.72, 0]}>
        <mesh position={[0, -0.52, 0]} castShadow>
          <capsuleGeometry args={[0.15, 0.72, 6, 14]} />
          <meshStandardMaterial color={isShabbona ? "#4b293c" : "#19151d"} roughness={0.78} />
        </mesh>
        <mesh position={[0, -1.02, 0.1]} scale={[1, 0.55, 1.55]} castShadow>
          <sphereGeometry args={[0.19, 18, 14]} />
          <meshStandardMaterial color={INK} roughness={0.8} />
        </mesh>
      </group>
    </group>
  );
}

type PetalSeed = { x: number; y: number; z: number; speed: number; spin: number; drift: number };

function FallingPetals() {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const petals = useMemo<PetalSeed[]>(
    () =>
      Array.from({ length: 52 }, (_, index) => {
        const n = (index * 47) % 53;
        return {
          x: ((index * 29) % 23) / 2.2 - 5.1,
          y: ((index * 17) % 37) / 3 + 0.3,
          z: ((index * 31) % 19) / 3 - 3,
          speed: 0.32 + (n % 7) * 0.055,
          spin: 0.4 + (n % 5) * 0.14,
          drift: 0.3 + (n % 3) * 0.12,
        };
      }),
    [],
  );

  useFrame(({ clock }, rawDelta) => {
    const petalMesh = mesh.current;
    if (!petalMesh) return;
    const delta = Math.min(rawDelta, 0.05);
    const t = clock.elapsedTime;
    petals.forEach((petal, index) => {
      petal.y -= petal.speed * delta;
      if (petal.y < -2.2) petal.y = 10 + (index % 6);
      dummy.position.set(petal.x + Math.sin(t * petal.drift + index) * 0.55, petal.y, petal.z);
      dummy.rotation.set(t * petal.spin + index, t * 0.35, Math.sin(t + index));
      const scale = 0.1 + (index % 4) * 0.025;
      dummy.scale.set(scale * 1.35, scale, scale * 0.35);
      dummy.updateMatrix();
      petalMesh.setMatrixAt(index, dummy.matrix);
    });
    petalMesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, petals.length]} frustumCulled={false}>
      <sphereGeometry args={[1, 8, 5]} />
      <meshStandardMaterial color={ROSE_LIGHT} roughness={0.62} side={THREE.DoubleSide} />
    </instancedMesh>
  );
}

function Stage() {
  const scene = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const compact = viewport.width < 7;

  useFrame((state, rawDelta) => {
    const root = scene.current;
    if (!root) return;
    const delta = Math.min(rawDelta, 0.05);
    const targetX = state.pointer.x * 0.12;
    const targetY = state.pointer.y * 0.07;
    root.rotation.y += (targetX - root.rotation.y) * delta * 2.2;
    root.rotation.x += (targetY - root.rotation.x) * delta * 2.2;
  });

  return (
    <group ref={scene} position={[0, compact ? -2.15 : -2.2, 0]} scale={compact ? 0.83 : 1}>
      <Figure kind="shabbona" position={[-1.02, 0, 0.08]} phase={0} />
      <Figure kind="rion" position={[1.02, 0, 0]} phase={0.55} />
      <mesh position={[0, 0.02, -0.2]} receiveShadow>
        <cylinderGeometry args={[3.2, 3.65, 0.28, 64]} />
        <meshStandardMaterial color="#271723" roughness={0.48} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.18, -0.2]} rotation-x={Math.PI / 2}>
        <torusGeometry args={[2.55, 0.035, 10, 96]} />
        <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={1.4} />
      </mesh>
      <FallingPetals />
    </group>
  );
}

export function LoveScene() {
  return (
    <div className="love-canvas" aria-label="Shabbona va Rionning raqs tushayotgan 3D sahnasi">
      <Canvas
        shadows
        dpr={[1, 1.6]}
        camera={{ position: [0, 1.2, 10.8], fov: 38, near: 0.1, far: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#17121c", 12, 30]} />
        <ambientLight intensity={0.75} />
        <directionalLight
          castShadow
          position={[4, 8, 6]}
          intensity={2.6}
          color="#f4d99b"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-4, 3, 3]} intensity={14} distance={12} color="#d74d76" />
        <pointLight position={[4, 2, 2]} intensity={10} distance={10} color="#e3bb67" />
        <Stage />
        <Environment resolution={64}>
          <Lightformer intensity={3} color="#f4c2cc" position={[0, 5, 4]} scale={[6, 3, 1]} />
          <Lightformer intensity={2} color="#e3bb67" position={[-5, 1, 0]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} />
          <Lightformer intensity={1.5} color="#76213e" position={[5, 1, -1]} rotation-y={-Math.PI / 2} scale={[8, 2, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}