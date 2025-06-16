import { useFrame } from '@react-three/fiber';
import React from 'react'
import { useRef, useState } from 'react';
import { useControls } from 'leva';


export default function TorusKnot() {
    const ref = useRef();

    const [hovered, setHovered] = useState(false);

    const { roughness, metalness, thickness, transmission, ior} = useControls({
        roughness: {value: 0.2, min: 0, max: 1, step: 0.01},
        metalness: {value: 0.3, min:0, max:  1, step: 0.01},
        thickness: {value: 0.2, min: 0, max: 1, step: 0.01},
        transmission: {value: 0.5, min: 0, max: 1, step: 0.01},
        ior:{value: 1.5, min: 1, max: 2.5, step: 0.01}

    })
    const color= hovered ? 'hotpink' : 'skyblue';
    useFrame(() =>{
        if(ref.current){
            ref.current.rotation.y += 0.01;
        }
    })

    return (
        
            <mesh ref={ref}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            >
                <torusKnotGeometry args={[1, 0.3, 256, 64]}/>
                <meshPhysicalMaterial color={color} 
                roughness={roughness}
                metalness={metalness}
                thickness={thickness}
                transmission={transmission}
                ior={ior}
                />
            </mesh>
    )
}


