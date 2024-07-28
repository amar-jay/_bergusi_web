"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { MainNav } from "@/components/demo-dashboard/main-nav";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import useDroneTelemetry, { DroneTelemetry } from "@/lib/use-telemetry-data";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import QRCode from "react-qr-code";
import { IpReturnType } from "@/lib/drone_requests";

function BoxIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

export const DemoDashboard: FC = () => {
  const [currentPage, setCurrentPage] = useState("main");
  const [ip, setIp] = useState<string>("");
  const { data, error, lastUpdated, isLoading, refetch } = useDroneTelemetry();
  if (isLoading) {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <div className="animate-pulse">
            <div className="mx-auto h-12 w-12 rounded-full bg-primary" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Loading...
            </h1>
            <p className="mt-4 text-muted-foreground">
              Please wait while we fetch the data for you.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Failed to fetch from server
          </h1>
          <p className="mt-4 text-muted-foreground">
            We're sorry, but we're unable to fetch data from the server at this
            time. Please try again later or contact support if the issue
            persists.
            <pre>{error}</pre>
          </p>
          <div className="flex flex-row items-center justify-center space-x-4">
            <Input
              placeholder="reset Ip Address"
              value={ip}
              onChange={(e) => setIp(e.target.value)}
            />
            <Button onClick={() => refetch(ip)}>Reset IP</Button>
          </div>
          <div className="mt-6">
            <span
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => refetch()}
            >
              Reload Page
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <BoxIcon className="mx-auto h-12 w-12 text-primary" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            No data found
          </h1>
          <p className="mt-4 text-muted-foreground">
            It looks like there is no data available at this time. Please check
            back later or contact support if you need assistance.
          </p>
          <div className="mt-6">
            <span
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => refetch()}
            >
              Reload Page
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {/**
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
         */}
      <div className="flex-col md:flex">
        <div className="flex items-end justify-between space-y-2 mb-6">
          <h2 className="text-3xl leading-5 font-bold tracking-tight">
            Dashboard
          </h2>
        </div>
        <div className="flex h-16 items-center bg-muted px-6 rounded-xl">
          <MainNav
            refetch={refetch}
            setCurrentPage={setCurrentPage}
            lastUpdated={lastUpdated}
          />
        </div>
        {currentPage == "settings" && <DashboardSettings ip={ip} />}
        {currentPage == "main" && <DashboardMain data={data} />}
      </div>
    </>
  );
};

const DashboardSettings = ({ ip }: { ip: string }) => {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [currentIp, setCurrentIp] = useState("");
  const generateQrCode = () => {
    setQrCodeUrl(inputValue);
  };

  const _fetchIp = async () => {
    try {
      const response = await fetch(`/api/current_ip${ip ? `?ip=${ip}` : ""}`);
      const newData: IpReturnType = response.ok ? await response.json() : null;
      if (!newData) {
        throw new Error("Failed to fetch data");
      }
      console.log(JSON.stringify(newData));

      setCurrentIp(newData["ip_address"]);
    } catch (error) {
      console.error("Error fetching current ip", error);
    }
  };

  useEffect(() => {
    _fetchIp(); // Fetch data immediately on mount

    const intervalId = setInterval(_fetchIp, 50000);

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [ip]);

  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-6 p-6 bg-background rounded-lg shadow-lg">
        <div className="w-full">
          <Label htmlFor="input">Current Server IP Address</Label>
          <div className="flex items-center space-x-2">
            {!!ip ? ip : "127.0.0.1"}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-6 p-6 bg-background rounded-lg shadow-lg">
        <div className="w-full">
          <Label htmlFor="input">Current Drone UDP Address</Label>
          <div className="flex items-center space-x-2">
            {!!currentIp ? currentIp : "unknown"}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-6 p-6 bg-background rounded-lg shadow-lg">
        <div className="w-full">
          <Label htmlFor="input">Enter URL or text</Label>
          <div className="flex items-center space-x-2">
            <Input
              id="input"
              type="text"
              placeholder="Enter text or URL"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1"
            />
            <Button onClick={generateQrCode}>Generate</Button>
          </div>
        </div>
        {qrCodeUrl && (
          <div
            style={{
              height: "auto",
              margin: "10px 10px",
              maxWidth: 256,
              width: "100%",
            }}
          >
            <QRCode
              //size={256}
              style={{ height: 256, maxWidth: "100%", width: "100%" }}
              value={qrCodeUrl}
              //viewBox={`0 0 256 256`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const DashboardMain = ({ data }: { data: DroneTelemetry }) => (
  <div className="flex-1 space-y-4 pt-6">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total Distance Covered
          </CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-lg flex flex-col">
            <span>
              <span className="font-bold">X</span> {data.Distance_X}
            </span>
            <span>
              <span className="font-bold">Y</span> {data.Distance_Y}
            </span>
            <span>
              <span className="font-bold">Z</span> {data.Distance_Z}
            </span>
          </div>
          <p className="text-xs mt-auto text-muted-foreground">
            {Math.pow(
              Math.pow(data.Distance_X, 2) +
                Math.pow(data.Distance_Y, 2) +
                Math.pow(data.Distance_Z, 2),
              0.5,
            ).toFixed(2)}{" "}
            distance convered in total
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Roll</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-lg grid grid-cols-3 gap-2">
            <span>
              <span className="font-bold">Roll</span> {data.Roll}
            </span>
            <span>
              <span className="font-bold">Pitch</span> {data.Pitch}
            </span>
            <span>
              <span className="font-bold">Yaw</span> {data.Yaw}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            {data.Roll_Rate} | {data.Pitch_Rate} | {data.Yaw_Rate} deg/s - rate
            of rotation
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Altitude</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <path d="M2 10h20" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold">{data.Altitude}</div>
          <p className="text-xs text-muted-foreground">
            how high is it from the ground
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Battery</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.Battery}</div>
          <p className="text-xs text-muted-foreground">Battery of the drone</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Status</CardTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-muted-foreground"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold">{data.Status}</div>
          <p className="text-xs text-muted-foreground">
            Drone connection to server
          </p>
        </CardContent>
      </Card>
    </div>
    <div className="gap-4">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Map</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <Image src="/map.jpg" alt="map image" width={1000} height={1000} />
          {/* <Overview /> */}
        </CardContent>
      </Card>
    </div>
  </div>
);
