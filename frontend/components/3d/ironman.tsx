import * as THREE from "three";
import { useGLTF, useCursor } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import { useRef, useState } from "react";
import { useStore } from "@/lib/state";

type GLTFResult = GLTF & {
  nodes: {
    Subdivision_Surface_893_Mat2_0: THREE.Mesh;
    Subdivision_Surface_893_Mat2_0_1: THREE.Mesh;
    Subdivision_Surface_894_Mat_0: THREE.Mesh;
    Subdivision_Surface_894_Mat_0_1: THREE.Mesh;
    Subdivision_Surface_894_Mat_0_2: THREE.Mesh;
    Subdivision_Surface_894_Mat_0_3: THREE.Mesh;
    Subdivision_Surface_894_Mat_0_4: THREE.Mesh;
    Subdivision_Surface_894_Mat_0_5: THREE.Mesh;
    Subdivision_Surface_894_Mat_0_6: THREE.Mesh;
    Subdivision_Surface_894_Mat_0_7: THREE.Mesh;
    Subdivision_Surface_894_Mat_0_8: THREE.Mesh;
    Subdivision_Surface_894_Mat_0_9: THREE.Mesh;
    Subdivision_Surface_894_Mat_0_10: THREE.Mesh;
    Subdivision_Surface_379_Mat1_0: THREE.Mesh;
    Subdivision_Surface_379_Mat1_0_1: THREE.Mesh;
    Subdivision_Surface_379_Mat1_0_2: THREE.Mesh;
    Subdivision_Surface_379_Mat1_0_3: THREE.Mesh;
    Subdivision_Surface_379_Mat1_0_4: THREE.Mesh;
    Subdivision_Surface_379_Mat1_0_5: THREE.Mesh;
    Subdivision_Surface_379_Mat1_0_6: THREE.Mesh;
    ["������������_��������������_3_����������������6_0"]: THREE.Mesh;
    ["��������������_5_����������������7_0"]: THREE.Mesh;
    ["Retopo_Subdivision_Surface_831_����������������5_0"]: THREE.Mesh;
    ["Retopo_Subdivision_Surface_830_����������������4_0"]: THREE.Mesh;
    ["Retopo_Subdivision_Surface_829_����������������1_0"]: THREE.Mesh;
    ["Retopo_Subdivision_Surface_828_����������������2_0"]: THREE.Mesh;
    ["Retopo_Subdivision_Surface_827_����������������3_0"]: THREE.Mesh;
    ["Retopo_Subdivision_Surface_826_����������������_0"]: THREE.Mesh;
  };
  materials: {
    ["Mat.2"]: THREE.MeshPhysicalMaterial;
    material: THREE.MeshStandardMaterial;
    ["Mat.1"]: THREE.MeshPhysicalMaterial;
    material_3: THREE.MeshStandardMaterial;
    material_4: THREE.MeshStandardMaterial;
    material_5: THREE.MeshStandardMaterial;
    material_6: THREE.MeshStandardMaterial;
    material_7: THREE.MeshStandardMaterial;
    material_8: THREE.MeshStandardMaterial;
    material_9: THREE.MeshStandardMaterial;
    material_10: THREE.MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function IronMan() {
  const { nodes, materials } = useGLTF("/ironman.glb") as GLTFResult;
  const { target, setTarget } = useStore();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const ref = useRef<THREE.Group>(null!);
  const [position, setPosition] = useState<{
    x: number;
    y: number;
    z: number;
  }>({
    x: 0,
    y: -0.6,
    z: 0,
  });

  const [rotation, setRotation] = useState<{
    x: number;
    y: number;
    z: number;
  }>({
    x: 0,
    y: 0,
    z: 0,
  });

  const [scale, setScale] = useState(0.8);

  // useFrame(() => {
  //   if (target) {
  //     setRotation((state) => ({
  //       x: state.x + 0.01,
  //       y: state.y + 0.01,
  //       z: state.z + 0.01,
  //     }));
  //   }
  // });

  return (
    <group
      ref={ref}
      onClick={(e) => setTarget(ref.current)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={scale}
      position={[position.x, position.y, position.z]}
      rotation={[rotation.x, rotation.y, rotation.z]}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.005}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[148.256, 229.637, 2.618]}>
            <mesh
              geometry={nodes.Subdivision_Surface_893_Mat2_0.geometry}
              material={materials["Mat.2"]}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_893_Mat2_0_1.geometry}
              material={materials["Mat.2"]}
            />
          </group>
          <group position={[101.043, 211.938, 16.962]}>
            <mesh
              geometry={nodes.Subdivision_Surface_894_Mat_0.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_894_Mat_0_1.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_894_Mat_0_2.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_894_Mat_0_3.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_894_Mat_0_4.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_894_Mat_0_5.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_894_Mat_0_6.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_894_Mat_0_7.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_894_Mat_0_8.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_894_Mat_0_9.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_894_Mat_0_10.geometry}
              material={materials.material}
            />
          </group>
          <group position={[57.743, 225.546, -10.71]}>
            <mesh
              geometry={nodes.Subdivision_Surface_379_Mat1_0.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_379_Mat1_0_1.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_379_Mat1_0_2.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_379_Mat1_0_3.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_379_Mat1_0_4.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_379_Mat1_0_5.geometry}
              material={materials["Mat.1"]}
            />
            <mesh
              geometry={nodes.Subdivision_Surface_379_Mat1_0_6.geometry}
              material={materials["Mat.1"]}
            />
          </group>
          <mesh
            geometry={
              nodes["������������_��������������_3_����������������6_0"]
                .geometry
            }
            material={materials.material_3}
            position={[143.3, 245.671, 7.436]}
          />
          <mesh
            geometry={nodes["��������������_5_����������������7_0"].geometry}
            material={materials.material_4}
            position={[0, 268.177, 43.955]}
            rotation={[1.293, 0, 0]}
          />
          <mesh
            geometry={
              nodes["Retopo_Subdivision_Surface_831_����������������5_0"]
                .geometry
            }
            material={materials.material_5}
            position={[-62.727, 188.619, 23.532]}
            rotation={[0.824, 0.341, -0.582]}
          />
          <mesh
            geometry={
              nodes["Retopo_Subdivision_Surface_830_����������������4_0"]
                .geometry
            }
            material={materials.material_6}
            position={[-81.242, 168.204, 11.128]}
            rotation={[1.789, 0.274, 1.691]}
          />
          <mesh
            geometry={
              nodes["Retopo_Subdivision_Surface_829_����������������1_0"]
                .geometry
            }
            material={materials.material_7}
            position={[-81.981, 168.289, 16.471]}
            rotation={[1.539, 0.296, 1.536]}
          />
          <mesh
            geometry={
              nodes["Retopo_Subdivision_Surface_828_����������������2_0"]
                .geometry
            }
            material={materials.material_8}
            position={[-80.023, 171.819, 26.563]}
            rotation={[1.464, 0.078, 1.161]}
          />
          <mesh
            geometry={
              nodes["Retopo_Subdivision_Surface_827_����������������3_0"]
                .geometry
            }
            material={materials.material_9}
            position={[-81.507, 169.519, 21.854]}
            rotation={[1.479, 0.218, 1.387]}
          />
          <mesh
            geometry={
              nodes["Retopo_Subdivision_Surface_826_����������������_0"]
                .geometry
            }
            material={materials.material_10}
            position={[-82.348, 180.473, 16.029]}
            rotation={[1.308, 0.019, 1.445]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/ironman.glb");
