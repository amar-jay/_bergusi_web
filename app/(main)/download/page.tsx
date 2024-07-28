import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="w-full max-w-6xl mx-auto py-16 md:py-24 px-4 md:px-6">
      <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0">
        <div className="relative w-32 h-32 mb-6">
          <img
            src="/placeholder.svg"
            alt="App Icon"
            className="rounded-full w-full h-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs font-medium">
            New
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-3">Bergusi App</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Experience the ultimate productivity tool for your nonGPS drone using
          your mobile phone. Control and recieve real-time data from your drone.
        </p>
        <div className="flex justify-center mb-8">
          <img
            src="/placeholder.svg"
            width={180}
            height={180}
            alt="QR Code"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex gap-4">
          <Link
            href="#"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Download on the App Store
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-input bg-background text-muted-foreground font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get it on Google Play
          </Link>
        </div>
        <div className="flex gap-4 mt-8">
          <Button variant="outline" size="lg">
            Install from Browser
          </Button>
          <Button variant="outline" size="lg">
            Install Bundle
          </Button>
        </div>
      </div>
    </div>
  );
}
