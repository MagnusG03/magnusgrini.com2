"use client";

import React, { useEffect, useState } from "react";

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

    const [isRunning, setIsRunning] = useState(true);

    const [direction, setDirection] = useState<Direction>("right")

    const [fruitLocation, setFruitLocation] = useState<Position>({x: 15, y: 15})

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

        window.addEventListener("keydown", keyPress)

        return() => {
            window.removeEventListener("keydown", keyPress)
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
            } else if (newHeadLocation.x >= canvasSize || newHeadLocation.y >= canvasSize || newHeadLocation.x < 0 || newHeadLocation.y < 0) {
                setIsRunning(false)
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
    <div>
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
