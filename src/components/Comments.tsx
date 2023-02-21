import React from 'react';
import { CommentsItem } from './CommentsItem';

import mark from '../assets/images/avatar-mark-webber.webp';
import angela from '../assets/images/avatar-angela-gray.webp';
import jacob from '../assets/images/avatar-jacob-thompson.webp';
import rizky from '../assets/images/avatar-rizky-hasanuddin.webp';
import nathan from '../assets/images/avatar-nathan-peterson.webp';
import kimberly from '../assets/images/avatar-kimberly-smith.webp';
import anna from '../assets/images/avatar-anna-kim.webp';
import chess from '../assets/images/image-chess.webp';

const data = [
  {
    id: 1,
    name: 'Mark Webber',
    action: 'reacted to your recent post',
    object: 'My first tournament today!',
    time: '1m',
    isRead: false,
    message: null,
    avatar: mark,
    picture: null,
  },
  {
    id: 2,
    name: 'Angela Gray ',
    action: 'followed you',
    object: null,
    time: '5m',
    isRead: false,
    message: null,
    avatar: angela,
    picture: null,
  },
  {
    id: 3,
    name: 'Jacob Thompson',
    action: 'has joined your group',
    object: 'Chess Club',
    time: '1 day',
    isRead: false,
    message: null,
    avatar: jacob,
    picture: null,
  },
  {
    id: 4,
    name: 'Rizky Hasanuddin',
    action: 'sent you a private message',
    object: null,
    time: '5 days',
    isRead: true,
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    avatar: rizky,
    picture: null,
  },
  {
    id: 5,
    name: 'Kimberly Smith',
    action: 'commented on your picture',
    object: null,
    time: '1 week',
    isRead: true,
    message: null,
    avatar: kimberly,
    picture: chess,
  },
  {
    id: 6,
    name: 'Nathan Peterson',
    action: 'reacted to your recent post',
    object: '5 end-game strategies to increase your win rate',
    time: '2 weeks',
    isRead: true,
    message: null,
    avatar: nathan,
    picture: null,
  },
  {
    id: 7,
    name: 'Anna Kim',
    action: 'left the group',
    object: 'Chess Club',
    time: '2 weeks',
    isRead: true,
    message: null,
    avatar: anna,
    picture: null,
  },
];

type Props = {
  readMark: boolean;
};

export const Comments: React.FC<Props> = ({ readMark }) => {
  React.useEffect(() => {
    data.map((el) => (el.isRead = true));
  }, [readMark]);

  return (
    <section className="comments">
      <div className="comments-row">
        {data.map((item) => (
          <CommentsItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
