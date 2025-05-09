"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ResumeDownloadButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1ibwWMCxSfBNi0R073dUTGzVw6rpEW_z5";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      className="bg-[#8750F7] hover:bg-[#733DD6] text-white flex items-center gap-2 cursor-pointer"
      onClick={handleDownload}
    >
      <Download size={18} />
      Download Resume
    </Button>
  );
}
