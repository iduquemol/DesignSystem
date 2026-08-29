import React from "react";
import { Card as CardRoot, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Card = () => {
  return (
    <CardRoot className="w-full max-w-[382px] rounded-[14px] border border-border bg-card pt-4 flex flex-col gap-4 overflow-hidden shadow-sm">
      <CardHeader className="px-4 py-0 flex flex-col gap-1">
        <CardTitle className="text-base font-medium text-card-foreground leading-6">
          Default Card
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground leading-5">
          This card uses the default size variant.
        </CardDescription>
      </CardHeader>
      <div className="px-4 text-sm text-card-foreground leading-5">
        The card component supports a size prop that defaults to "default" for standard spacing and sizing.
      </div>
      <CardFooter className="bg-muted p-4 mt-auto flex justify-center">
        <Button variant="outline" className="w-full rounded-[10px] h-8 text-sm font-medium">
          Action
        </Button>
      </CardFooter>
    </CardRoot>
  );
};
