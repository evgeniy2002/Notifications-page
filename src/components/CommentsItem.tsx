import React from 'react';

type Props = {
  name: string;
  avatar: string;
  time: string;
  picture: string | null;
  isRead: boolean;
  action: string;
  object: string | null;
  message: string | null;
};

export const CommentsItem: React.FC<Props> = ({
  name,
  time,
  picture,
  isRead,
  action,
  object,
  avatar,
  message,
}) => {
  React.useEffect(() => {
    ibg();
  }, []);

  const ibg = React.useCallback(() => {
    let ibg = document.querySelectorAll<HTMLElement>('.ibg');
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector<HTMLElement>('img')) {
        ibg[i].style.backgroundImage =
          'url(' + ibg[i].querySelector<HTMLElement>('img')?.getAttribute('src') + ')';
      }
    }
  }, []);
  return (
    <div className={isRead ? 'item' : 'item item-active'}>
      <div className="item-row">
        <div className="item-row__avatar ibg">
          <img src={avatar} alt="" />
        </div>
        <div className="item-row__info">
          <p>
            <strong>{name}</strong>
            &nbsp;&nbsp;
            {action}
            &nbsp;&nbsp;
            {object ? <span>{object}</span> : null}
            {isRead ? '' : <span className="item-row__info-mark"></span>}
          </p>
          <p>{time} ago</p>
          {message ? (
            <div className="item-row__info__message">
              <span>{message}</span>
            </div>
          ) : null}
        </div>
        {picture ? (
          <div className="item-row__img ibg">
            <img src={picture} alt="" />
          </div>
        ) : null}
      </div>
    </div>
  );
};
