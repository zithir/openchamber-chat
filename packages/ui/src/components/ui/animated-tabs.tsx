import React from 'react';

import { SortableTabsStrip } from '@/components/ui/sortable-tabs-strip';
import { cn } from '@/lib/utils';

type AnimatedTabIcon = React.ComponentType<{ className?: string }>;

type AnimatedTabItem<T extends string> = {
  value: T;
  label: string;
  icon?: AnimatedTabIcon;
};

type AnimatedTabsProps<T extends string> = {
  value: T;
  onValueChange: (value: T) => void;
  tabs: AnimatedTabItem<T>[];
  size?: 'sm' | 'md';
  className?: string;
};

export function AnimatedTabs<T extends string>({
  value,
  onValueChange,
  tabs,
  size = 'md',
  className,
}: AnimatedTabsProps<T>) {
  const iconClassName = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4';

  const items = React.useMemo(() => {
    return tabs.map((tab) => ({
      id: tab.value,
      label: tab.label,
      icon: tab.icon ? React.createElement(tab.icon, { className: iconClassName }) : undefined,
    }));
  }, [iconClassName, tabs]);

  return (
    <SortableTabsStrip
      items={items}
      activeId={value}
      onSelect={(id) => onValueChange(id as T)}
      layoutMode="fit"
      variant="animated"
      className={cn(size === 'sm' ? 'h-7' : 'h-8', className)}
    />
  );
}
