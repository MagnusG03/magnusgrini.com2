"use client";

import React, { useEffect, useState, useRef } from "react";

export default function snake() {
    const [length, setLength] = useState(1);

    const canvasSize = 20;

    type Position = {
        x: number,
        y: number
    }

    type Direction = "up" | "down" | "left" | "right";

    const [headLocation, setHeadLocation] = useState<Position>({ x: 11, y: 10})
    const [tailLocation, setTailLocation] = useState<Position>({ x: 10, y: 10})

    const [snakeLocations, setSnakeLocations] = useState<Position[]>([headLocation, tailLocation])

    const [isRunning, setIsRunning] = useState(false)
    const [isAlive, setIsAlive] = useState(true)
    const [isFirstLoad, setIsFirstLoad] = useState(true)

    const [direction, setDirection] = useState<Direction>("right")

    const [fruitLocation, setFruitLocation] = useState<Position>({x: 15, y: 15})

    const isAliveRef = useRef(isAlive);

    useEffect(() => {
        isAliveRef.current = isAlive;
    }, [isAlive]);

    useEffect(() => {
        const keyPress = (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowUp":
                    setDirection("up")
                    break
                case "ArrowDown":
                    setDirection("down")
                    break
                case "ArrowLeft":
                    setDirection("left")
                    break
                case "ArrowRight":
                    setDirection("right")
                    break
            }
        }
        const pauseClick = (event: MouseEvent) => {
            if(event.button === 0 && isAliveRef.current) {
                setIsRunning(prevState => !prevState);
                setIsFirstLoad(false)
            } else if(event.button === 0 && !isAliveRef.current) {
                setDirection("right")
                setHeadLocation({ x: 11, y: 10})
                setTailLocation({ x: 10, y: 10})
                setSnakeLocations([{ x: 11, y: 10}, { x: 10, y: 10}])
                setFruitLocation({x: Math.floor(Math.random() * (canvasSize - 1) + 1), y: Math.floor(Math.random() * (canvasSize - 1) + 1)})
                setIsAlive(true)
                setIsRunning(prevState => !prevState);
                setIsFirstLoad(false)
            }
        }

        window.addEventListener("keydown", keyPress)
        window.addEventListener("mousedown", pauseClick)

        return() => {
            window.removeEventListener("keydown", keyPress)
            window.removeEventListener("mousedown", pauseClick)
        }
    }, [])

    useEffect(() => {
        if(!isRunning) return;

        const timer = setTimeout(() => {
            let newHeadLocation: Position;
            switch (direction) {
                case "up":
                    newHeadLocation = {x: headLocation.x, y: headLocation.y - 1}
                    break
                case "down":
                    newHeadLocation = {x: headLocation.x, y: headLocation.y + 1}
                    break
                case "left":
                    newHeadLocation = {x: headLocation.x - 1, y: headLocation.y}
                    break
                case "right":
                    newHeadLocation = {x: headLocation.x + 1, y: headLocation.y}
                    break
                default:
                    throw new Error("Invalid direction");
            }
            setHeadLocation(newHeadLocation)
            if(snakeLocations.slice(1).some(pos => pos.x === newHeadLocation.x && pos.y === newHeadLocation.y)) {
                setIsRunning(false)
                setIsAlive(false)
            } else if (newHeadLocation.x >= canvasSize || newHeadLocation.y >= canvasSize || newHeadLocation.x < 0 || newHeadLocation.y < 0) {
                setIsRunning(false)
                setIsAlive(false)
            } else if(newHeadLocation.x === fruitLocation.x && newHeadLocation.y === fruitLocation.y) {
                setSnakeLocations((previousLocations) => [newHeadLocation, ...previousLocations])
                setFruitLocation({x: Math.floor(Math.random() * (canvasSize - 1) + 1), y: Math.floor(Math.random() * (canvasSize - 1) + 1)})
            } else {
                setSnakeLocations((previousLocations) => [newHeadLocation, ...previousLocations.slice(0, -1)])
            }
        }, 100)

        return () => clearTimeout(timer)
    }, [isRunning, headLocation, direction])

  return (
    <div className="relative">
        <div 
        className={`bg-black absolute inset-0 z-50 opacity-50 ${
        isRunning && isAlive ? 'hidden' : ''
        }`}
        style={{ width: `${canvasSize * 24}px` }}>
            <h1 className={`text-lg ${
            !isRunning && isAlive && isFirstLoad ? '' : 'hidden'
            }`}>Start</h1>
            <h1 className={`text-lg ${
            !isRunning && isAlive && !isFirstLoad ? '' : 'hidden'
            }`}>Unpause</h1>
            <h1 className={`text-lg ${
            !isRunning && !isAlive && !isFirstLoad ? '' : 'hidden'
            }`}>Game Over, click to restart</h1>
        </div>
            {Array.from({ length: canvasSize }, (_, y) => (
                <div key={y} className="flex">
                    {Array.from({ length: canvasSize }, (_, x) => (
                        <div
                        key={x}
                        className={`w-6 h-6 border border-gray-300 ${
                        snakeLocations.some(pos => pos.x === x && pos.y === y) ? 'bg-blue-500 text-white' : fruitLocation.x === x && fruitLocation.y === y ? 'bg-red-500 text-white' : 'bg-gray-100'
                        }`}
                  ></div>
                ))}
            </div>
        ))}
    </div>
  );
}
