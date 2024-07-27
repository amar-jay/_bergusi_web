import { DroneTelemetry } from "./use-telemetry-data";

export const fetchFromServer = async (ip: string): Promise<DroneTelemetry> => {
  try {
    const response = await fetch(`${ip}/drone_telemetry`, {
      cache: "no-store",
      mode: "no-cors",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: DroneTelemetry = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching drone telemetry:", error);
    throw error;
  }
};

export const fetchIp = async (ip: string): Promise<string> => {
  try {
    const response = await fetch(`${ip}/get_current_ip`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: { ip_address: string } = await response.json();
    return data ? data["ip_address"] : "unknown";
  } catch (error) {
    console.error("Error fetching drone host:", error);
    throw error;
  }
};
