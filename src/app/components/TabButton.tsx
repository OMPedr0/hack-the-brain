import { Tab } from '@headlessui/react';
import React from 'react';

type TabButtonProps = {
  tab: 'browser' | 'definitions';
  selectedTab: 'browser' | 'definitions';
  onSelectTab: (tab: 'browser' | 'definitions') => void;
  iconUrl?: string;
  icon?: React.ReactNode;
};

const TabButton: React.FC<TabButtonProps> = ({ tab, selectedTab, onSelectTab, iconUrl, icon }) => {
  return (
    <Tab>
      {({ selected }) => (
        <button
          className={`ml-4 ${getTabClasses(selected, tab)}`}
          onClick={() => onSelectTab(tab)}
        >
          {tab === 'browser' ? (
            <>
              <img
                src={iconUrl}
                alt="Selfi Logo"
                className="w-24 h-24 mr-2 rounded-xl"
              />
              {selected && <span className=""></span>}
            </>
          ) : (
            <>
              {icon}
              {selected && <span className=""></span>}
            </>
          )}
        </button>
      )}
    </Tab>
  );
};

function getTabClasses(selected: boolean, tab: string) {
  if (tab === 'browser' || tab === 'definitions') {
    return `
      py-2.5 text-sm w-fit leading-5 font-medium text-gray-700 rounded-lg focus:outline-none
      ${selected
        ? (tab === 'definitions' ? 'text-gray-500 hover:text-gray-700' : '')
        : 'text-gray-500 hover:text-gray-700'
      }
    `;
  } else {
    throw new Error('Valor de aba inválido');
  }
}

export default TabButton;
