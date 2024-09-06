import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Select,
  Selection,
  SelectItem,
} from "@nextui-org/react";
import React from "react";
import { SearchIcon } from "../Navbar/SearchIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
  onSearchChange: (value: string) => void;
  statusFilter: any;
  setStatusFilter: any;
  statusOptions: any;
  visibleColumns: any;
  setVisibleColumns: any;
  columns: any;
  users: any;
  onRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onDownload?: () => void;
  perPageOptions?: number[];
  rowsPerPage: number;
  selectedKeys: Selection;
}

const TopContent = ({
  filterValue,
  setFilterValue,
  onSearchChange,
  statusFilter,
  setStatusFilter,
  statusOptions,
  visibleColumns,
  setVisibleColumns,
  columns,
  users,
  onRowsPerPageChange,
  onDownload,
  perPageOptions,
  rowsPerPage,
  selectedKeys,
}: Props) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-wrap justify-between gap-3 items-end">
          <h1 className="text-2xl font-bold text-left mt-6 md:mt-10 grid">
            Orders
          </h1>
          <div className="flex flex-wrap gap-8 justify-end">
            <Input
              isClearable
              classNames={{
                base: "max-w-[44%] text-xs ",
                inputWrapper: "border-1",
              }}
              className="w-[40vmin]"
              placeholder="Search by name..."
              size="sm"
              startContent={<SearchIcon className="text-default-300" />}
              value={filterValue}
              variant="bordered"
              onClear={() => setFilterValue("")}
              onValueChange={onSearchChange}
            />
            <div className="flex gap-3">
              <Dropdown>
                <DropdownTrigger className="flex">
                  <Button
                    endContent={<ChevronDownIcon className="text-small" />}
                    size="sm"
                    variant="flat"
                  >
                    Status
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Table Columns"
                  closeOnSelect={false}
                  selectedKeys={statusFilter}
                  selectionMode="multiple"
                  onSelectionChange={setStatusFilter}
                  className="dark:text-foreground text-foreground"
                >
                  {statusOptions.map((status: any) => (
                    <DropdownItem key={status.uid} className="capitalize">
                      {status.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Dropdown>
                <DropdownTrigger className="flex">
                  <Button
                    endContent={<ChevronDownIcon className="text-small" />}
                    size="sm"
                    variant="flat"
                  >
                    Columns
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Table Columns"
                  closeOnSelect={false}
                  selectedKeys={visibleColumns}
                  selectionMode="multiple"
                  onSelectionChange={setVisibleColumns}
                  className="dark:text-foreground text-foreground"
                >
                  {columns.map((column: any) => (
                    <DropdownItem key={column.uid} className="capitalize">
                      {column.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Button
                className="bg-foreground text-background disabled:bg-foreground-300 disabled:text-background-300"
                endContent={<FontAwesomeIcon icon={faDownload} />}
                size="sm"
                disabled={Array.from(selectedKeys)?.length === 0}
                onClick={
                  Array.from(selectedKeys)?.length > 0 ? onDownload : undefined
                }
              >
                Download
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {users?.totalOrders} users
          </span>
          <div className="flex gap-2">
            <label className="flex items-center text-default-400 text-small whitespace-nowrap">
              Rows per page:
            </label>
            <Select
              onChange={onRowsPerPageChange}
              className="bg-transparent outline-none text-default-400 text-small w-20"
              value={rowsPerPage}
              defaultSelectedKeys={[rowsPerPage?.toString()]}
            >
              {[...(perPageOptions ?? [])]?.map((option, index: number) => (
                <SelectItem
                  key={option}
                  value={option}
                  id={`${option}_${index}`}
                  className="text-default-400 text-small"
                >
                  {option.toString()}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
