"use client"

import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { FaCog } from 'react-icons/fa';

import BrowserTab from './components/BrowserTab';
import DefinitionsTab from './components/DefinitionsTab';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<'browser' | 'definitions'>('browser');

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow p-4">
        <Tab.Group>
          <Tab.List className="flex space-x-4 bg-white rounded-xl shadow-md">
            {['browser', 'definitions'].map((tab) => (
              <Tab key={tab}>
                {({ selected }) => (
                  <button
                    className={getTabClasses(selected, tab)}
                    onClick={() => setSelectedTab(tab as 'browser' | 'definitions')}
                  >
                    {tab === 'browser' ? (
                      <>
                        Browser
                        {selected && <span className="ml-1"></span>}
                      </>
                    ) : (
                      <>
                        <FaCog size={20} className="absolute bottom-4 left-4" />
                        {selected && <span className="ml-1"></span>}
                      </>
                    )}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-4">
            <Tab.Panel key="browser">
              <BrowserTab />
            </Tab.Panel>
            <Tab.Panel key="definitions">
              <DefinitionsTab />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

function getTabClasses(selected: boolean, tab: 'browser' | 'definitions') {
  return `
    py-2.5 text-sm leading-5 font-medium text-gray-700 rounded-lg focus:outline-none
    ${
      selected
        ? 'bg-white shadow' + (tab === 'definitions' ? ' text-gray-500 hover-text-gray-700' : '')
        : 'text-gray-500 hover-text-gray-700'
    }
  `;
}
