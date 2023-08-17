"use client";

import * as React from "react";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";

import { Color, Size } from "@/types";

import Button from "@/components/button";
import IconButton from "@/components/icon-button";

import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

export default function MobileFilters({ sizes, colors }: MobileFiltersProps) {
  const [open, setOpen] = React.useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative h-full w-full max-w-xs flex flex-col overflow-y-auto bg-white shadow-xl ml-auto py-4 pb-6">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
