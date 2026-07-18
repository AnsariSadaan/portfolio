import Link from "next/link";

import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sadaan Ansari. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/AnsariSadaan"
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/sadaan-ansari-82a191214/"
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/sadaan_18"
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <FaXTwitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Made with <Heart className="inline h-3 w-3 text-red-500" /> in India
        </p>
      </div>
    </footer>
  );
}
