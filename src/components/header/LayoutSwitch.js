import React, { Fragment } from "react";
import clsx from "clsx";
import { Popover, Transition } from "@headlessui/react";

export default function LayoutSwitch({ value, onChange }) {
  return (
    <Popover className="relative flex justify-start items-center h-16">
      {({ open }) => (
        <>
          <Popover.Button
            className={clsx(
              "text-white px-4 py-2 group rounded inline-flex items-center text-base font-medium hover:bg-[#2f2f2f] focus:outline-none",
              {
                "bg-[#2f2f2f]": open,
              }
            )}
          >
            <svg
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
            >
              <path
                className="active"
                d="M24.1348 22.1323C24.1348 22.4195 23.902 22.6523 23.6148 22.6523L4.37477 22.6523C4.08758 22.6523 3.85476 22.4195 3.85476 22.1323L3.85477 10.6632L24.1348 10.6632L24.1348 22.1323Z"
              ></path>
              <path
                className="active"
                d="M18.0427 5.29297L23.6148 5.29297C23.902 5.29297 24.1348 5.52578 24.1348 5.81297L24.1348 9.74831L18.0427 9.74831L18.0427 5.29297Z"
              ></path>
              <path
                className="active"
                d="M10.9504 5.29297L17.0426 5.29297L17.0426 9.74831L10.9504 9.74831L10.9504 5.29297Z"
              ></path>
              <path
                className="active"
                d="M3.8584 9.74792L3.8584 5.81292C3.8584 5.52574 4.09121 5.29292 4.3784 5.29292L9.95052 5.29292L9.95052 9.74792L3.8584 9.74792Z"
              ></path>
              <path
                className="normal"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.77539 9.66406V6.21094H9.95117V9.66406H4.77539ZM10.9512 9.66406V6.21094H17.043V9.66406H10.9512ZM18.043 9.66406H23.1348V6.21094H18.043V9.66406ZM4.77539 10.6641V21.625H23.1348V10.6641H4.77539ZM3.77539 5.73094C3.77539 5.44375 4.0082 5.21094 4.29539 5.21094H23.6148C23.902 5.21094 24.1348 5.44375 24.1348 5.73094V22.105C24.1348 22.3922 23.902 22.625 23.6148 22.625H4.29539C4.0082 22.625 3.77539 22.3922 3.77539 22.105V5.73094Z"
              ></path>
            </svg>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-0 top-full -translate-x-10">
              <div className="shadow rounded bg-[#2f2f2f]">
                <ul className="text-gray-50 flex">
                  <li
                    onClick={() => onChange("top")}
                    className={clsx("p-2 cursor-pointer", {
                      "text-sky-500": value === "top",
                    })}
                  >
                    <svg
                      viewBox="0 0 28 28"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        className="active"
                        d="M24.1348 22.1323C24.1348 22.4195 23.902 22.6523 23.6148 22.6523L4.37477 22.6523C4.08758 22.6523 3.85476 22.4195 3.85476 22.1323L3.85477 10.6632L24.1348 10.6632L24.1348 22.1323Z"
                      ></path>
                      <path
                        className="active"
                        d="M18.0427 5.29297L23.6148 5.29297C23.902 5.29297 24.1348 5.52578 24.1348 5.81297L24.1348 9.74831L18.0427 9.74831L18.0427 5.29297Z"
                      ></path>
                      <path
                        className="active"
                        d="M10.9504 5.29297L17.0426 5.29297L17.0426 9.74831L10.9504 9.74831L10.9504 5.29297Z"
                      ></path>
                      <path
                        className="active"
                        d="M3.8584 9.74792L3.8584 5.81292C3.8584 5.52574 4.09121 5.29292 4.3784 5.29292L9.95052 5.29292L9.95052 9.74792L3.8584 9.74792Z"
                      ></path>
                      <path
                        className="normal"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.77539 9.66406V6.21094H9.95117V9.66406H4.77539ZM10.9512 9.66406V6.21094H17.043V9.66406H10.9512ZM18.043 9.66406H23.1348V6.21094H18.043V9.66406ZM4.77539 10.6641V21.625H23.1348V10.6641H4.77539ZM3.77539 5.73094C3.77539 5.44375 4.0082 5.21094 4.29539 5.21094H23.6148C23.902 5.21094 24.1348 5.44375 24.1348 5.73094V22.105C24.1348 22.3922 23.902 22.625 23.6148 22.625H4.29539C4.0082 22.625 3.77539 22.3922 3.77539 22.105V5.73094Z"
                      ></path>
                    </svg>
                  </li>
                  <li
                    onClick={() => onChange("left")}
                    className={clsx("p-2 cursor-pointer", {
                      "text-sky-500": value === "left",
                    })}
                  >
                    <svg
                      viewBox="0 0 28 29"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        className="active"
                        d="M23.5933 5.32031C23.8805 5.32031 24.1133 5.55312 24.1133 5.84031L24.1133 22.1597C24.1133 22.4469 23.8805 22.6797 23.5933 22.6797L10.7072 22.6797L10.7072 5.32031L23.5933 5.32031Z"
                      ></path>
                      <path
                        className="active"
                        d="M3.8418 10.5L3.8418 5.83999C3.8418 5.55281 4.07461 5.31999 4.3618 5.31999L9.72656 5.31999L9.72656 10.5L3.8418 10.5Z"
                      ></path>
                      <path
                        className="active"
                        d="M9.72656 22.6797L4.36224 22.6797C4.07506 22.6797 3.84224 22.4469 3.84224 22.1597L3.84224 17.5038L9.72656 17.5038L9.72656 22.6797Z"
                      ></path>
                      <path
                        className="active"
                        d="M3.8418 16.5234L3.8418 11.4795L9.72656 11.4795L9.72656 16.5234L3.8418 16.5234Z"
                      ></path>
                      <path
                        className="normal"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.1133 6.71094L23.1133 22.125L10.6113 22.125L10.6113 6.71094L23.1133 6.71094ZM9.61133 5.71094L10.6113 5.71094L23.5933 5.71094C23.8805 5.71094 24.1133 5.94375 24.1133 6.23094L24.1133 22.605C24.1133 22.8922 23.8805 23.125 23.5933 23.125L4.27391 23.125C3.98672 23.125 3.75391 22.8922 3.75391 22.605L3.75391 17.9102L3.74654 17.9102L3.74654 16.9102L3.75391 16.9102L3.75391 11.8867L3.74654 11.8867L3.74654 10.8867L3.75391 10.8867L3.75391 6.23094C3.75391 5.94375 3.98672 5.71094 4.27391 5.71094L9.61133 5.71094ZM4.75391 11.8867L4.75391 16.9102L9.61133 16.9102L9.61133 11.8867L4.75391 11.8867ZM9.61133 10.8867L4.75391 10.8867L4.75391 6.71094L9.61133 6.71094L9.61133 10.8867ZM4.75391 22.125L4.75391 17.9102L9.61133 17.9102L9.61133 22.125L4.75391 22.125Z"
                      ></path>
                    </svg>
                  </li>
                  <li
                    onClick={() => onChange("right")}
                    className={clsx("p-2 cursor-pointer", {
                      "text-sky-500": value === "right",
                    })}
                  >
                    <svg
                      viewBox="0 0 28 29"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                    >
                      <g>
                        <path
                          className="active"
                          d="M4.3618 22.6797C4.07461 22.6797 3.8418 22.4469 3.8418 22.1597L3.8418 5.84031C3.8418 5.55313 4.07461 5.32031 4.3618 5.32031L17.2479 5.32031L17.2479 22.6797L4.3618 22.6797Z"
                        ></path>
                        <path
                          className="active"
                          d="M24.1133 17.5L24.1133 22.16C24.1133 22.4472 23.8805 22.68 23.5933 22.68L18.2285 22.68L18.2285 17.5L24.1133 17.5Z"
                        ></path>
                        <path
                          className="active"
                          d="M18.2285 5.32031H23.5928C23.88 5.32031 24.1128 5.55312 24.1128 5.84031V10.4962H18.2285V5.32031Z"
                        ></path>
                        <path
                          className="active"
                          d="M24.1133 11.4766L24.1133 16.5205L18.2285 16.5205L18.2285 11.4766L24.1133 11.4766Z"
                        ></path>
                      </g>
                      <path
                        className="normal"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.74609 22.125V6.71094H17.248L17.248 22.125H4.74609ZM18.248 23.125H17.248H4.26609C3.97891 23.125 3.74609 22.8922 3.74609 22.605V6.23094C3.74609 5.94375 3.97891 5.71094 4.26609 5.71094H23.5855C23.8727 5.71094 24.1055 5.94375 24.1055 6.23094V10.9258H24.1128V11.9258H24.1055V16.9492H24.1128V17.9492H24.1055V22.605C24.1055 22.8922 23.8727 23.125 23.5855 23.125H18.248ZM23.1055 16.9492V11.9258H18.248V16.9492H23.1055ZM18.248 17.9492H23.1055V22.125H18.248V17.9492ZM23.1055 6.71094V10.9258H18.248V6.71094H23.1055Z"
                      ></path>
                    </svg>
                  </li>
                </ul>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
