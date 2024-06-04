"use client";

import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { Caveat } from "next/font/google";
import { ScrollArea } from "./scroll-area"; // Import ScrollArea component

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

interface Tab {
  title: string;
}

export default function UnconventionalTabs() {
  const tabs: Tab[] = [
    {
      title: "Lassen Peak",
    },
    {
      title: "Mount Shasta",
    },
    {
      title: "Eureka Peak",
    },
  ];

  return (
    <Tab.Group>
      {({ selectedIndex }) => (
        <div className={`${caveat.variable}`}>
          {/* Buttons */}
          <div className="flex justify-center">
            {/* Apply ScrollArea to make the tabs scrollable */}
            <ScrollArea className="max-w-full overflow-x-auto">
              <Tab.List className="flex">
                {tabs.map((tab, index) => (
                  <Tab key={index} as={Fragment}>
                    <button
                      className={`text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${
                        selectedIndex === index
                          ? "bg-white text-slate-900"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {tab.title}
                    </button>
                  </Tab>
                ))}
              </Tab.List>
            </ScrollArea>
          </div>

          {/* Tab panels */}
          <Tab.Panels className="max-w-[640px] mx-auto">
            <div className="relative flex flex-col">
              {tabs.map((tab, index) => (
                <Tab.Panel key={index} as={Fragment} static={true}>
                  <Transition
                    as="article"
                    show={selectedIndex === index}
                    unmount={false}
                    className="w-full bg-white rounded-2xl shadow-xl min-[480px]:flex items-stretch focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 transform order-first"
                    enterFrom="opacity-0 -translate-y-8"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-12"
                  ></Transition>
                </Tab.Panel>
              ))}
            </div>
          </Tab.Panels>
        </div>
      )}
    </Tab.Group>
  );
}