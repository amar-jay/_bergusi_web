import { DroneTelemetry } from "./use-telemetry-data";

export const fetchFromServer = async (ip: string): Promise<DroneTelemetry> => {
  try {
    const response = await fetch(`http://${ip}:5000/drone_telemetry`, {
      cache: "no-store",
      /*      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      */
    });
    //console.log("response", JSON.stringify(await response.json()));

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} ${response.statusText}`,
      );
    }

    const data: DroneTelemetry = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching drone telemetry:", error);
    throw error;
  }
};

export interface IpReturnType {
  ip_address: string;
}
export const fetchIp = async (ip: string): Promise<IpReturnType> => {
  try {
    console.log(`URL:    http://${ip}:5000/get_current_ip`);
    const response = await fetch(`http://${ip}:5000/get_current_ip`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: { ip_address: string } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching drone host:", error);
    throw error;
  }
};
