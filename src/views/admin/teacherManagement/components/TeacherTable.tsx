import React, { useState } from "react";
import Card from "components/card";
import { MdAdd } from 'react-icons/md';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import CreatePopUp from "./CreatePopup";

type RowObj = {
  name: string;
  examType: string;
  plan: string;
  hours: string;
  available: string;
  student: string,
  date: string,
  actions: any
};

function TeacherTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = useState<SortingState>([]);
  const [modal, setModal] = useState<boolean>(false);

  let defaultData = tableData;
  const columns = [

    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">NAME OF THE BATCH</p>
      ),
      cell: (info: any) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),


    columnHelper.accessor("examType", {
      id: "examType",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          EXAM TYPE
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),

    columnHelper.accessor("plan", {
      id: "plan",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          PLAN
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),

    columnHelper.accessor("hours", {
      id: "hours",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          HOURS
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),

    columnHelper.accessor("available", {
      id: "available",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          AVAILABLE
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),

    columnHelper.accessor("student", {
      id: "student",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          STUDENT
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),

    columnHelper.accessor("date", {
      id: "date",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),

    columnHelper.accessor("actions", {
      id: "actions",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          ACTIONS
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
  ]; // eslint-disable-next-line

  
  const [data, setData] = React.useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  const handleCreate = () =>{
    setModal(true)
  }
  return (
    <>
      {modal && <CreatePopUp setModal={setModal}/>}
      <Card extra={"w-full pb-10 p-4 h-full"}>
        <header className="relative flex items-center justify-between mt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            BATCHES
          </div>
          {/* <CardMenu transparent={false} data={'create'}/> */}
          <button className="linear flex items-center justify-center rounded-xl bg-brand-500 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={handleCreate}>
            <MdAdd className="h-6 w-6" />Create
          </button>
        </header>

        <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="!border-px !border-gray-400">
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        onClick={header.column.getToggleSortingHandler()}
                        className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start"
                      >
                        <div className="items-center justify-between text-xs text-gray-200">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: "",
                            desc: "",
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, 5)
                .map((row) => {
                  return (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            key={cell.id}
                            className="min-w-[110px] border-white/0 py-3  pr-4"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

export default TeacherTable;
const columnHelper = createColumnHelper<RowObj>();
