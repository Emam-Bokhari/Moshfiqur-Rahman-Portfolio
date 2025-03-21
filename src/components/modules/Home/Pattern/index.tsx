"use client";

import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

export function Pattern() {
  return (
    <div className="absolute top-0 left-0 right-0 flex justify-center items-center -z-10 h-full w-full overflow-hidden">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
