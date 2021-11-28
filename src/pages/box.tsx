import {Canvas, useFrame} from "@react-three/fiber";
import {Mesh} from "three";
import React, { memo, useRef} from "react";
import Controls from "../utils/Controls";

const Thing = () => {
    const ref = useRef({} as Mesh);
    useFrame(() => (ref.current.rotation.z += 0.01));
    return (
        <mesh
            ref={ref}
            onClick={(e) => console.log("click")}
            onPointerOver={(e) => console.log("hover")}
            onPointerOut={(e) => console.log("unhover")}
        >
            <boxBufferGeometry attach='geometry' args={[0.5, 0.5, 0.5]}/>
            <meshBasicMaterial
                attach="material"
                color="skyblue"
                opacity={0.5}
                transparent
            />
        </mesh>
    );
};

const Box: React.VFC = memo(() => {
    return (
        <div style={{width: "100vw", height: "100vh"}}>
            <Canvas>
                <Thing/>
                <Controls/>
                <gridHelper/>
            </Canvas>
        </div>
    );
});
export default Box;