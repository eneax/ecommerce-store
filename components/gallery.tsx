"use client";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { Image } from "@/types";
import { cn } from "@/lib/utils";

interface GalleryTabProps {
  image: Image;
}

function GalleryTab({ image }: GalleryTabProps) {
  return (
    <Tab className="relative flex items-center justify-center rounded-md bg-white aspect-square cursor-pointer">
      {({ selected }) => (
        <>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <NextImage
              fill
              src={image.url}
              alt={image.id}
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </>
      )}
    </Tab>
  );
}

interface GalleryProps {
  images: Image[];
}

export default function Gallery({ images = [] }: GalleryProps) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="hidden w-full max-w-2xl sm:block lg:max-w-none mx-auto mt-6">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="w-full aspect-square">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="relative h-full w-full sm:rounded-lg overflow-hidden aspect-square">
              <NextImage
                fill
                src={image.url}
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
