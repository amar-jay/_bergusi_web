"use client";
import React, { useState, useEffect } from 'react';

export type DroneTelemetry = {
  Distance_X: number;
  Distance_Y: number;
  Distance_Z: number;
  Roll: number;
  Pitch: number;
  Yaw: number;
  Altitude: number;
  Battery: number;
  Velocity_X: number;
  Velocity_Y: number;
  Velocity_Z: number;
  Acceleration_X: number;
  Acceleration_Y: number;
  Acceleration_Z: number;
  Roll_Rate: number;
  Pitch_Rate: number;
  Yaw_Rate: number;
  Temperature: number;
  Status: string;
};

interface UseDroneTelemetryResult {
  data: DroneTelemetry | null;
  isLoading: boolean;
  lastUpdated: string;
  error: string | null;
  refetch: () => Promise<void>;
}

const initialData: DroneTelemetry = {
    Distance_X: 0,
    Distance_Y: 0,
    Distance_Z: 0,
    Roll: 0,
    Pitch: 0,
    Yaw: 0,
    Altitude: 0,
    Battery: 100,
    Velocity_X: 0,
    Velocity_Y: 0,
    Velocity_Z: 0,
    Acceleration_X: 0,
    Acceleration_Y: 0,
    Acceleration_Z: 0,
    Roll_Rate: 0,
    Pitch_Rate: 0,
    Yaw_Rate: 0,
    Temperature: 0,
    Status: 'Disconnected',
    };

const useDroneTelemetry = (interval: number = 30000): UseDroneTelemetryResult => {
  const [data, setData] = useState<DroneTelemetry>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/drone_telemetry');
      const newData:DroneTelemetry = response.ok ? await response.json() : null;
      if (!newData) {
        throw new Error('Failed to fetch data');
      }
      setData(newData);
    } catch (error) {
      console.error('Error fetching drone telemetry:', error);
      setError('Failed to fetch latest data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data immediately on mount

    const intervalId = setInterval(fetchData, interval);

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [interval]);

  const refetch = async () => {
    await fetchData();
  };

  return { data, isLoading, lastUpdated, error, refetch };
};

export default useDroneTelemetry;
