import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function GetStarted() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Get Started</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>DISCLAIMER</AlertDialogTitle>
          <AlertDialogDescription>
            Itong website ay hindi pa totaly tapos at mobile view palang siya
            meaning hindi pa siya responsive para desktop screen, maraming
            salamat sa pag unawa.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Ok</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function BibleVerse() {
  return (
    <>
      <span className="font-bold">Proverbs 21:19</span>
      {/* Escaped quotes to fix `react/no-unescaped-entities` */}
      <span className="italic ms-6">
        &quot;It is better to dwell in the wilderness than with a contentious
        and angry woman.&quot;
      </span>
    </>
  );
}

export function SocialLinks() {
  return (
    <>
      {/* Facebook */}
      <Link href="https://www.facebook.com/jeremy.poliquit">
        <button className="btn btn-circle bg-[#1A77F2] text-white border-[#005fd8]">
          <svg
            aria-label="Facebook logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"
            ></path>
          </svg>
        </button>
      </Link>

      {/* Instagram */}
      <Link href="">
        <button className="btn btn-circle bg-black text-white border-black">
          <svg
            aria-label="X logo"
            width="16"
            height="12"
            viewBox="0 0 300 271"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
            />
          </svg>
        </button>
      </Link>
    </>
  );
}
