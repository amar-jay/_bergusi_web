/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cZe8ZSxVtUK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div>
      <section
        className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="inline-block bg-primary px-4 py-2 rounded-lg mb-4">
              <MountainIcon className="w-8 h-8 text-primary-foreground" />
              <span className="text-lg font-bold">Bergusi</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Innovating UAV Technology
            </h1>
            <p className="text-lg text-muted-foreground">
              Competing in the non-GPS drone space.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Founding</h3>
              </div>
              <p className="text-muted-foreground">
                Bergusi was founded by a group of passionate engineers and
                enthusiasts in 2018 with a vision to push the boundaries of UAV
                technology. We are a team of 12 dedicated members who work
                tirelessly to innovate and excel in the field of non-GPS drones.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Achievements</h3>
              </div>
              <p className="text-muted-foreground">
                Our team has participated in various competitions and has won
                several accolades for our innovative designs and efficient UAV
                systems. We are particularly proud of our performance at
                TEKNOFEST, where we have consistently been top contenders.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Technology</h3>
              </div>
              <p className="text-muted-foreground">
                Bergusi's drones are equipped with state-of-the-art technology,
                enabling them to operate effectively in environments without
                GPS. Our focus on robust algorithms and precision engineering
                ensures top-notch performance and reliability.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold">The Future</h3>
              </div>
              <p className="text-muted-foreground">
                We aim to continue our journey of innovation and excellence. Our
                team is dedicated to exploring new frontiers in UAV technology,
                making significant contributions to the industry, and ensuring
                that we remain at the cutting edge of non-GPS drone solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-background rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Team Member 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  Abdel-manan Abdel-rahman
                </h3>
                <p className="text-muted-foreground">Software Dev</p>
              </div>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Team Member 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Feyzullah Oguz</h3>
                <p className="text-muted-foreground">Lead Engineer</p>
              </div>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Team Member 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Talha</h3>
                <p className="text-muted-foreground">Software Developer</p>
              </div>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Team Member 4"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Taha</h3>
                <p className="text-muted-foreground">Mechanical Engineer</p>
              </div>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Team Member 5"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Salih</h3>
                <p className="text-muted-foreground">Electronics Specialist</p>
              </div>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Team Member 6"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Salih</h3>
                <p className="text-muted-foreground">Hardware Engineer</p>
              </div>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Team Member 7"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Mia Robinson</h3>
                <p className="text-muted-foreground">Design Lead</p>
              </div>
            </div>
            <div className="bg-background rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Team Member 8"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Liam Clark</h3>
                <p className="text-muted-foreground">Field Operator</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function MountainIcon(props:any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props:any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
