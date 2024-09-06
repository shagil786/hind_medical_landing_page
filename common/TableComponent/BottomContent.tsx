import { Pagination } from "@nextui-org/react";
import React from "react";

interface Props {
  filterValue: string;
  page: number;
  pages: number;
  setPage: (page: number) => void;
  selectedKeys: any;
  items: any[];
}

const BottomContent = ({
  filterValue,
  page,
  pages,
  setPage,
  selectedKeys,
  items,
}: Props) => {
  const hasSearchFilter = Boolean(filterValue);

  return (
    <div className="py-2 px-2 flex justify-between items-center">
      <Pagination
        showControls
        classNames={{
          cursor: "bg-foreground text-background",
        }}
        color="default"
        isDisabled={hasSearchFilter}
        page={page}
        total={pages}
        variant="light"
        onChange={setPage}
      />
      <span className="text-small text-default-400 md:inline-block hidden">
        {selectedKeys === "all"
          ? "All items selected"
          : `${selectedKeys.size} of ${items.length} selected`}
      </span>
    </div>
  );
};

export default BottomContent;
