import React from 'react';
import { RiFolder3Line } from '@remixicon/react';

import { AnimatedTabs } from '@/components/ui/animated-tabs';
import { useUIStore } from '@/stores/useUIStore';
import { SidebarFilesTree } from './SidebarFilesTree';


export const RightSidebarTabs: React.FC = () => {
  const rightSidebarTab = useUIStore((state) => state.rightSidebarTab);
  const setRightSidebarTab = useUIStore((state) => state.setRightSidebarTab);

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-sidebar">
      <div className="min-h-0 flex-1 overflow-hidden">
        <SidebarFilesTree />
      </div>
    </div>
  );
};
