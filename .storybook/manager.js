// .storybook/manager.js
import React from 'react';
import { addons, types, useGlobals } from '@storybook/manager-api';
import { IconButton, Icons, TooltipLinkList, WithTooltip } from '@storybook/components';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Social Media Toolkit",
  }),
  shortcuts: {
    toggleShortcutsHelp: null,
  },
});

const FORMAT_OPTIONS = [
  { id: 'png', label: 'PNG' },
  { id: 'jpg', label: 'JPG' },
  { id: 'webp', label: 'WEBP' },
];

const ExportTool = () => {
  const [{ exportFormat }, updateGlobals] = useGlobals();
  const channel = addons.getChannel();
  const formatValue = exportFormat || FORMAT_OPTIONS[0].id;
  const formatLabel = formatValue.toUpperCase();

  const handleFormatChange = (nextFormat) => {
    if (nextFormat && nextFormat !== formatValue) {
      updateGlobals({ exportFormat: nextFormat });
    }
  };

  const handleDownload = () =>
    channel.emit('export-image', { format: formatValue });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <WithTooltip
        trigger="click"
        placement="top"
        closeOnOutsideClick
        tooltip={({ onHide }) => (
          <TooltipLinkList
            links={FORMAT_OPTIONS.map(({ id, label }) => ({
              id,
              title: label,
              right: id === formatValue ? <Icons icon="check" /> : undefined,
              onClick: () => {
                handleFormatChange(id);
                onHide();
              },
              active: id === formatValue,
            }))}
          />
        )}
      >
        <IconButton
          title={`Image export format: ${formatLabel}`}
          aria-label="Select image export format"
          aria-haspopup="menu"
        >
          <Icons icon="photo" />
          <span style={{ marginLeft: 6, fontSize: 12 }}>{formatLabel}</span>
        </IconButton>
      </WithTooltip>
      <IconButton
        title={`Export as ${formatLabel}`}
        onClick={handleDownload}
      >
        <Icons icon="download" />
      </IconButton>
    </div>
  );
};

addons.register('export-addon', () => {
  addons.add('export-addon/tool', {
    title: 'Export',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <ExportTool />,
  });
});
