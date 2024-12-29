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

    const [directionQueue, setDirectionQueue] = useState<Direction[]>(["right"])

    const isAliveRef = useRef(isAlive);
    const directionRef = useRef(direction);
    const directionQueueRef = useRef(directionQueue)
    const nextDirection = useRef(directionQueue[0])

    useEffect(() => {
        isAliveRef.current = isAlive;
        directionRef.current = direction;
        directionQueueRef.current = directionQueue
        nextDirection.current = directionQueue[0]
    }, [isAlive, direction, directionQueue]);

    useEffect(() => {
        const keyPress = (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowUp":
                case "w":
                case "W":
                    if(nextDirection.current != "down" && directionQueueRef.current.length > 0 && directionQueueRef.current[0] != "up") {
                        setDirectionQueue([directionQueueRef.current[0], "up"])
                    } else if(nextDirection.current != "down" && directionQueueRef.current.length === 0) {
                        setDirectionQueue(["up"])
                    }
                    break
                case "ArrowDown":
                case "s":
                case "S":
                    if(nextDirection.current != "up" && directionQueueRef.current.length > 0 && directionQueueRef.current[0] != "down") {
                        setDirectionQueue([directionQueueRef.current[0], "down"])
                    } else if(nextDirection.current != "up" && directionQueueRef.current.length === 0) {
                        setDirectionQueue(["down"])
                    }
                    break
                case "ArrowLeft":
                case "a":
                case "A":
                    if(nextDirection.current != "right" && directionQueueRef.current.length > 0 && directionQueueRef.current[0] != "left") {
                        setDirectionQueue([directionQueueRef.current[0], "left"])
                    } else if(nextDirection.current != "right" && directionQueueRef.current.length === 0) {
                        setDirectionQueue(["left"])
                    }
                    break
                case "ArrowRight":
                case "d":
                case "D":
                    if(nextDirection.current != "left" && directionQueueRef.current.length > 0 && directionQueueRef.current[0] != "right") {
                        setDirectionQueue([directionQueueRef.current[0], "right"])
                    } else if(nextDirection.current != "left" && directionQueueRef.current.length === 0) {
                        setDirectionQueue(["right"])
                    }
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
            switch (nextDirection.current) {
                case "up":
                    newHeadLocation = {x: headLocation.x, y: headLocation.y - 1}
                    if(directionQueueRef.current.length > 1) {
                        setDirectionQueue(directionQueueRef.current.slice(1))
                    }
                    break
                case "down":
                    newHeadLocation = {x: headLocation.x, y: headLocation.y + 1}
                    if(directionQueueRef.current.length > 1) {
                        setDirectionQueue(directionQueueRef.current.slice(1))
                    }
                    break
                case "left":
                    newHeadLocation = {x: headLocation.x - 1, y: headLocation.y}
                    if(directionQueueRef.current.length > 1) {
                        setDirectionQueue(directionQueueRef.current.slice(1))
                    }
                    break
                case "right":
                    newHeadLocation = {x: headLocation.x + 1, y: headLocation.y}
                    if(directionQueueRef.current.length > 1) {
                        setDirectionQueue(directionQueueRef.current.slice(1))
                    }
                    break
                default:
                    throw new Error("Invalid direction");
            }
            setHeadLocation(newHeadLocation)
            if(snakeLocations.slice(1).some(pos => pos.x === newHeadLocation.x && pos.y === newHeadLocation.y)) {
                setIsRunning(false)
                setIsAlive(false)
                setDirectionQueue(["right"])
            } else if (newHeadLocation.x >= canvasSize || newHeadLocation.y >= canvasSize || newHeadLocation.x < 0 || newHeadLocation.y < 0) {
                setIsRunning(false)
                setIsAlive(false)
                setDirectionQueue(["right"])
            } else if(newHeadLocation.x === fruitLocation.x && newHeadLocation.y === fruitLocation.y) {
                setSnakeLocations((previousLocations) => [newHeadLocation, ...previousLocations])
                setFruitLocation({x: Math.floor(Math.random() * (canvasSize - 1) + 1), y: Math.floor(Math.random() * (canvasSize - 1) + 1)})
            } else {
                setSnakeLocations((previousLocations) => [newHeadLocation, ...previousLocations.slice(0, -1)])
            }
        }, 50)

        return () => clearTimeout(timer)
    }, [isRunning, headLocation, direction])

  return (
    <div className="relative">
        <div 
        className={`bg-black absolute inset-0 z-50 opacity-50 ${
        isRunning && isAlive ? 'hidden' : ''
        }`}
        style={{ width: `${canvasSize * 24}px` }}>
        </div>
        <div 
        className={`absolute inset-0 z-50 flex items-center justify-center ${
        isRunning && isAlive ? 'hidden' : ''
        }`}
        style={{ width: `${canvasSize * 24}px` }}>
            <h1 className={`text-6xl text-white text-center ${
            !isRunning && isAlive && isFirstLoad ? '' : 'hidden'
            }`}>Start</h1>
            <h1 className={`text-6xl text-white text-center ${
            !isRunning && isAlive && !isFirstLoad ? '' : 'hidden'
            }`}>Unpause</h1>
            <h1 className={`text-5xl text-white text-center ${
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
