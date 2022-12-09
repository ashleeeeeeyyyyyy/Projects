'use client';
import TimeAgo from 'react-timeago';

type Props = {
  time: String;
};

function LiveTimestamp({ time }: Props) {
  return <TimeAgo date={time} />;
}

export default LiveTimestamp;
