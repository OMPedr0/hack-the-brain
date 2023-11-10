"use client"

import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { FaCog } from 'react-icons/fa';

import BrowserTab from './components/BrowserTab';
import DefinitionsTab from './components/DefinitionsTab';
import TabButton from './components/TabButton';

type TabType = 'browser' | 'definitions';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<TabType>('browser');

  return (
    <div className="flex flex-col min-h-screen bg-zinc-300">
      <div className="flex-grow p-4">
        <Tab.Group>
          <Tab.List className="flex space-x-4 bg-white rounded-xl shadow-md">
            <TabButton
              tab="browser"
              selectedTab={selectedTab}
              onSelectTab={() => setSelectedTab('browser')}
              iconUrl="https://firebasestorage.googleapis.com/v0/b/testes-full-dev.appspot.com/o/OIG.png?alt=media&token=3f9ae42a-25e8-402e-be01-057f18ef098f"
            />
            <TabButton
              tab="definitions"
              selectedTab={selectedTab}
              onSelectTab={() => setSelectedTab('definitions')}
              icon={<FaCog size={20}/>}
            />
          </Tab.List>

          <Tab.Panels className="mt-4">
            {selectedTab === 'browser' ? <BrowserTab /> : null}
            {selectedTab === 'definitions' ? <DefinitionsTab /> : null}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
