import React from 'react';

type Props = {
  handleMark: () => void;
};

export const Header: React.FC<Props> = ({ handleMark }) => {
  return (
    <header className="header">
      <div className="header-row">
        <h2 className="header-row__title">Notifications</h2>
        <div className="header-row__count">
          <span>3</span>
        </div>
        <span className="header-row__mark" onClick={handleMark}>
          Mark all as read
        </span>
      </div>
    </header>
  );
};
