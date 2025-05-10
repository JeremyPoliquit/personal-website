import { anton, fugaz_one, sanchez } from "@/components/google-fonts"; // Removed unused fonts
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  HobbiesCard,
  IntroductionCard,
  RelationshipCard,
} from "@/components/about-me";
import { BibleVerse, GetStarted, SocialLinks } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { College, Elementary, JuniorHigh, SeniorHigh } from "@/components/education";

function Page() {
  return (
    <div className="flex flex-col bg-amber-400">
      <header className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-4 items-center">
          <div className="avatar">
            <div className="w-32 rounded-full">
              {/* Replaced <img> with Next.js <Image /> */}
              <Image
                src="/profile.jpg"
                alt="Lawrence's profile picture"
                width={128}
                height={128}
              />
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl flex flex-col">
            <span className={sanchez.className}>Hi I&apos;m</span>
            <span className={anton.className}>Lawrence Jeremy Poliquit</span>
          </h1>

          <h3 className="text-2xl">
            <span className={fugaz_one.className}>
              Computer Science student
            </span>
          </h3>

          {/* Bible Verse */}
          <div className="flex flex-col justify-center gap-12 max-w-md lg:max-w-lg">
            <div className="flex flex-col gap-1 mt-12">
              <BibleVerse />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6">
              <SocialLinks />
            </div>

            {/* Get Started */}
            <div className="flex justify-center">
              <GetStarted />
            </div>
          </div>
        </div>
      </header>

      {/* About section */}
      <section className="flex flex-col min-h-screen mx-6">
        <h1 className="text-center text-2xl font-extrabold mb-4">About Me</h1>
        <Card>
          {/* Introduction */}
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <IntroductionCard />
          </CardContent>

          {/* Hobbies */}
          <CardHeader>
            <CardTitle>Hobbies</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[150px]">
              <HobbiesCard />
            </ScrollArea>
          </CardContent>

          {/* Relationship */}
          <CardHeader>
            <CardTitle>Relationship</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[150px]">
              <RelationshipCard />
            </ScrollArea>
          </CardContent>
        </Card>
      </section>

      {/* Education */}
      <section className="flex flex-col min-h-screen mx-8">
        <h1 className="text-center text-2xl font-extrabold mb-4">Education</h1>
        <div className="flex justify-center">
          <div className="flex flex-col gap-4">
            {/* Elementary */}
            <div className="grid grid-cols-2 w-full">
              <div>
                <Badge>Elementary</Badge>
              </div>
              <div>
                <Elementary />
              </div>
            </div>

            {/* Junior High */}
            <div className="grid grid-cols-2 w-full">
              <div>
                <Badge>Junior High</Badge>
              </div>
              <div>
                <JuniorHigh />
              </div>
            </div>

            {/* Senior High */}
            <div className="grid grid-cols-2 w-full">
              <div>
                <Badge>Senior High</Badge>
              </div>
              <div>
                <SeniorHigh />
              </div>
            </div>

            {/* College */}
            <div className="grid grid-cols-2 w-full">
              <div>
                <Badge>College</Badge>
              </div>
              <div>
                <College />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
