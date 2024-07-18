import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { rankItem } from "@tanstack/match-sorter-utils";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import JSON_DATA from "../../../public/db.json";

const customers = JSON_DATA.customers;

export type Transaction = {
  id: number;
  customer_id: number;
  date: string;
  amount: number;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={cn("m-auto mt-2 flex")}
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    filterFn: (row, col, value, addMeta) => {
      const itemRank = rankItem(row.getValue(col), value);
      addMeta(itemRank);
      return itemRank.passed;
    },
  },
  {
    accessorKey: "customer_id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={cn("m-auto mt-2 flex")}
        >
          Customer
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const customer_name = customers.find(
        (customer) => customer.id == row.getValue("customer_id"),
      )?.name;
      return customer_name;
    },
    filterFn: (row, columnId, value, addMeta) => {
      const itemRank = rankItem(
        customers.find((customer) => customer.id == row.getValue(columnId))
          ?.name,
        value,
      );
      addMeta(itemRank);
      return itemRank.passed;
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={cn("m-auto mt-2 flex")}
        >
          Date
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));
      const formattedDate = date.toLocaleDateString("en-uk", {
        dateStyle: "short",
      });
      return formattedDate;
    },
    filterFn: (row, col, value, addMeta) => {
      const itemRank = rankItem(row.getValue(col), value);
      addMeta(itemRank);
      return itemRank.passed;
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className={cn("ms-auto flex")}
        >
          Amount
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
    filterFn: (row, col, value, addMeta) => {
      const itemRank = rankItem(row.getValue(col), value);
      addMeta(itemRank);
      return itemRank.passed;
    },
  },
];
