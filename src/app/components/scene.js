"use client"
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { OrbitControls, Stats, Html } from '@react-three/drei'
import TorusKnot from '../components/modal'

function CustomLoader() {
    return (
        <Html center>
            <div className='text-3xl font-bold tracking-tight'>Loading...</div>
        </Html>
    )
}
export default function Scene() {
    return (
        <div className='w-screen h-screen'>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1,2]}>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={2} />
                <Suspense fallback={<CustomLoader />}>
                    <TorusKnot/>
                </Suspense>
                <Stats />
                <gridHelper args={[10, 10]} />
                <axesHelper args={[5, 5, 5]} />
                <OrbitControls />
            </Canvas>
        </div>
    )
}


