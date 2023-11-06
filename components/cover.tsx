"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "./ui/button";
import { ImageIcon } from "lucide-react";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({
  url,
  preview
}: CoverImageProps) => {
  const params = useParams();

  return (
    <div className={cn("relative w-full h-[35vh] group", !url && "h-[12vh]", url && "bg-muted")}>
      {!!url && (
        <Image
          src={url}
          fill
          alt="cover"
          className="object-cover"
        />
      )}
      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2">
          <Button
            onClick={() => {}}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Change cover
          </Button>
        </div>
      )}
    </div>
  )
}